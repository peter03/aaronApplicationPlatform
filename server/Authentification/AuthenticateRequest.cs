using System.ComponentModel.DataAnnotations;

namespace aaronApplicationPlatform.Authentication
{
    public class AuthenticateRequest
    {
        [Required]
        public string LoginName { get; set; }

        [Required]
        public string Password { get; set; }
    }
}