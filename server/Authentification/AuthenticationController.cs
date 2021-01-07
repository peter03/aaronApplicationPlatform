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
    public class AuthenticationController : ControllerBase
    {
        private IUserService _userService;

        public AuthenticationController(IUserService userService) 
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        //public IActionResult Authenticate([FromBody]AuthenticateRequest model)
        public IActionResult Authenticate(AuthenticateRequest model)
        {
               var response = _userService.Authenticate(model);

                if (response == null)
                    //return BadRequest(new { message = "Username or password is incorrect" });
                    {
                        throw new Exception("Username or password is incorrect");
                    }

                return Ok(response);
        }

    }
}
