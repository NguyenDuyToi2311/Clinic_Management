using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ClinicDbContext _dbContext;
        private readonly IConfiguration _config;
        
        
        
        public LoginController(IConfiguration config, ClinicDbContext dbContext)
        {
            _dbContext = dbContext;
            _config = config;
        }
        [HttpPost]
        [AllowAnonymous]
        public IActionResult Login([FromBody] User login)
        {
            IActionResult response = Unauthorized();
            
            User user = AuthenticateUser(login);
            if (user == null)
                return BadRequest();
            if (user != null)
            {
                var tokenString = GenerateJWT(user);
                response = Ok(new
                {
                    token = tokenString,
                    userDetails = user,
                });
            }
            return response;
        }
        User AuthenticateUser(User loginCredentials)
        {
            if (loginCredentials == null)
                return null;
            User user;
            if (Int32.TryParse(loginCredentials.UserName, out int sdt))
            {
                var benhnhan = _dbContext.BenhNhan.SingleOrDefault(x => x.SDT == loginCredentials.UserName && x.Password == loginCredentials.Password);
                user = new User
                {
                    UserId = benhnhan.MaBN,
                    UserName = benhnhan.SDT,
                    FullName = benhnhan.TenBN,
                    UserType = benhnhan.UserType
                };
            }
            else
            {
                var bacsi = _dbContext.BacSi.SingleOrDefault(x => x.Email == loginCredentials.UserName && x.Password == loginCredentials.Password);
                user = new User
                {
                    UserId = bacsi.MaBS,
                    UserName = bacsi.Email,
                    FullName = bacsi.TenBS,
                    UserType = bacsi.UserType
                };
            }
            return user;
        }
        string GenerateJWT(User userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:SecretKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, userInfo.UserName),
                new Claim("fullName", userInfo.FullName.ToString()),
                new Claim("role",userInfo.UserType),
                new Claim("userid",userInfo.UserId.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };
            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: credentials 
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}
