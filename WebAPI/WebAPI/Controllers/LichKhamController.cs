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
    public class LichKhamController : ControllerBase
    {
        private readonly ClinicDbContext _context;
        private readonly IConfiguration _config;



        public LichKhamController(IConfiguration config, ClinicDbContext dbContext)
        {
            _context = dbContext;
            _config = config;
        }

        [HttpPost]
        public async Task<ActionResult<LichKham>> PostLichKham(LichKham kham)
        {    
            _context.LichKham.Add(kham);
            await _context.SaveChangesAsync();
            return new JsonResult("Success");
        }

        
        [HttpPut]
        public async Task<IActionResult> PutLichKham(LichKham lichKham)
        {
            _context.Entry(lichKham).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return new JsonResult("Fail");
            }

            return new JsonResult("Cập nhật trạng thái lịch khám thành công");
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLichKham(int id)
        {
            var bacsi = await _context.LichKham.FindAsync(id);
            if (bacsi == null)
            {
                return new JsonResult("Error");
            }

            _context.LichKham.Remove(bacsi);
            await _context.SaveChangesAsync();

            return new JsonResult("Success");
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LichKham>> GetLichKham(int id)
        {
            var benhnhan = await _context.LichKham.Where(a=>a.MaLK==id).Include(a => a.BenhNhan).FirstOrDefaultAsync();
            if (benhnhan == null)
            {
                return NotFound();
            }

            return benhnhan;
        }
        [HttpGet]
        
        public IActionResult GetAllLichKham()
        {
            var benhnhan =_context.LichKham.Include(a=>a.BacSi).Include(b=>b.BenhNhan);
            if (benhnhan == null)
            {
                return NotFound();
            }

            return new JsonResult(benhnhan);
        }
    }
}
