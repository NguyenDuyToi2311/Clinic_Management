using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoaDonController : ControllerBase
    {
        private readonly ClinicDbContext _context;
        private readonly IConfiguration _config;



        public HoaDonController(IConfiguration config, ClinicDbContext dbContext)
        {
            _context = dbContext;
            _config = config;
        }
        [HttpPut]
        public async Task<IActionResult> PutHoaDon(HoaDon hoaDon)
        {
            _context.Entry(hoaDon).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return new JsonResult("Fail");
            }

            return new JsonResult("Cập nhật thành công");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHoaDon(int id)
        {
            var hd = await _context.HoaDon.FindAsync(id);
            if (hd == null)
            {
                return new JsonResult("Error");
            }

            _context.HoaDon.Remove(hd);
            await _context.SaveChangesAsync();

            return new JsonResult("Success");
        }
    }
}
