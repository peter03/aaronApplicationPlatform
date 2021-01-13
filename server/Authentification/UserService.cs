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
        AuthenticateResponse Authenticate(AuthenticateRequest model);
        IEnumerable<User> GetAll();
        User GetById(int id);

        User LoggedinUser {get; set;}
    }

    public partial class UserService : IUserService
    {

        private readonly Lazy<UserLogic> UserLogic;

        private static List<User> _users; 

        private MyDbContext _dbContext;
        private readonly AppSetting _appSetting;

        public UserService(MyDbContext dbContext, IOptions<AppSetting> appSetting)
        {
            _dbContext = dbContext;
            _appSetting = appSetting.Value;
            UserLogic = new Lazy<UserLogic>(() => new UserLogic(_dbContext));
        }

        public User LoggedinUser { get; set;}

        public AuthenticateResponse Authenticate(AuthenticateRequest model)
        {

            var user = GetAll().SingleOrDefault(x => x.LoginName == model.LoginName); // todo: && x.PasswordMD5 == model.Password);

            // return null if user not found
            if (user == null) return null;

            // authentication successful so generate jwt token
            var token = generateJwtToken(user);

            return new AuthenticateResponse(user, token);
        }

        public IEnumerable<User> GetAll()
        {
            if (_users == null)
            {
                _users = UserLogic.Value.GetList().ToList();
            }
            return _users;
        }

        public User GetById(int id)
        {
            var res = GetAll().FirstOrDefault(x => x.Id == id);
            //if (res.ShopId == null)
            //{
            //    UserLogic.Value.AttachShopIds(res);
            //}
            return res;
        }

        // helper methods

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
    }
}

