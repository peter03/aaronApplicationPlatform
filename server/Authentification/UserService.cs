using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

using aaronApplicationPlatform.Data;
using aaronApplicationPlatform.Data.Entity;
using aaronApplicationPlatform.Logic;
using aaronApplicationPlatform.Helper;

namespace aaronApplicationPlatform.Authentication
{
    public interface IUserService
    {
        AuthenticateResponse Login(AuthenticateRequest model);

        void Logout(User user);
                
        User GetCachedUserById(int id);

        User LoggedinUser {get; set;}
    }

    public partial class UserService : IUserService
    {

        private readonly Lazy<UserLogic> UserLogic;

        // cache for logged in users
        private static Dictionary<int, User> _cachedUsers = new Dictionary<int, User>();

        private MyDbContext _dbContext;
        private readonly AppSetting _appSetting;

        public UserService(MyDbContext dbContext, IOptions<AppSetting> appSetting)
        {
            _dbContext = dbContext;
            _appSetting = appSetting.Value;
            UserLogic = new Lazy<UserLogic>(() => new UserLogic(_dbContext));
        }

        public User LoggedinUser { get; set;}

        public AuthenticateResponse Login(AuthenticateRequest model)
        {

            string md5Hash = model.Password.ToMd5Hash();
            var user = UserLogic.Value.GetByLoginNameAndPwd(model.LoginName, md5Hash);

            // return null if user not found or disabled
            if (user == null || user.Disabled) return null;

            // append users rules (white list only)
            var ruleLogic = new UserRuleViewLogic(_dbContext);
            var userRules = ruleLogic.GetList(new int[] { user.Id }).Where(e => e.Denied == false);
            user.RuleId = userRules != null ? userRules.Select(s => s.RuleId).ToArray() : null;
            user.UserRoles = null;
            user.UserRules = null;
            UpdateCachedUsers(user);

            // append person
            if (user.PersonId.HasValue)
            {
                var personLogic = new PersonLogic(_dbContext);
                user.Person = personLogic.GetById(user.PersonId.Value);
            }

            // authentication successful so generate jwt token
            var token = generateJwtToken(user);

            return new AuthenticateResponse(user, token);
        }

        public void Logout(User user)
        {
            _cachedUsers.Remove(user.Id);
        }

        public User GetCachedUserById(int id)
        {
            try
            {
                return _cachedUsers[id];
            }
            catch (Exception)
            {
                return null;
            }
        }

        // #region helper methods

        private void UpdateCachedUsers(User user)
        {
            User cachedUser = GetCachedUserById(user.Id);
            if (cachedUser == null)
            {
                _cachedUsers.Add(user.Id, user);
            }
            else
            {
                cachedUser = user;
            }
        }

        private string generateJwtToken(User user)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSetting.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        // #endregion

    }
}

