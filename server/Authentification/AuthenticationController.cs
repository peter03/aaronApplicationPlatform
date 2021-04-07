using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using aaronApplicationPlatform.Data;
//using aaronApplicationPlatform.Data.Dto;
using aaronApplicationPlatform.Data.Entity;
using aaronApplicationPlatform.Logic;
using aaronApplicationPlatform.Authentication;

namespace aaronApplicationPlatform.Authentication
{
    // [Authorize]
    [Route("auth")]
    [ApiController]
    public partial class AuthenticationController : ControllerBase
    {
        private IUserService _userService;

        public AuthenticationController(IUserService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public IActionResult Login(AuthenticateRequest model)
        {
            var response = _userService.Login(model);

            if (response == null)
            {
                throw new Exception(String.Format("Failed to login user {0}!", model.LoginName));
            }

            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPost("logout")]
        public IActionResult Logout(User user)
        {
            _userService.Logout(user);
            return Ok();
        }

    }
}
