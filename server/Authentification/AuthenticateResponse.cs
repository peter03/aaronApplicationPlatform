using System.Collections.Generic;
using aaronApplicationPlatform.Data.Entity;

namespace aaronApplicationPlatform.Authentication
{
    public class AuthenticateResponse
    {
        public User User { get; set; }
        public string Token { get; set; }

        public AuthenticateResponse(User user, string token)
        {
            User = user;
            Token = token;
        }
    }
}