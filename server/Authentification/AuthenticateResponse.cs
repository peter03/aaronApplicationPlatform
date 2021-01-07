using aaronApplicationPlatform.Data.Entity;

namespace aaronApplicationPlatform.Authentication
{
    public class AuthenticateResponse
    {
        public User User { get; set; }
        public string Token { get; set; }

        public AuthenticateResponse(User user, string token)
        {
            this.User = user;
            Token = token;
        }
    }
}