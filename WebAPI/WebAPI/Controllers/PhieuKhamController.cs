using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
    public class PhieuKhamController : ControllerBase
    {
        private readonly ClinicDbContext _context;
        public PhieuKhamController(ClinicDbContext dbContext)
        {
            _context = dbContext;
        }

        [HttpPost]
        public async Task<ActionResult<PhieuKhamBenh>> PostLichKham(PhieuKhamViewModel kham)
        {


            var hoadon = new HoaDon
            {
                TongTien = kham.TongTien,
                NgayLap = DateTime.Now.Date
            };
            await _context.HoaDon.AddAsync(hoadon);
            await _context.SaveChangesAsync();
            
            var phieukham = new PhieuKhamBenh
            {
                MaHD = hoadon.MaHD,
                NgayKham = hoadon.NgayLap,
                MaBN = kham.MaBN,
                MaBS = kham.MaBS,
                TrieuChung = kham.TrieuChung,
                ChuanDoan = kham.ChuanDoan,

            };
            await _context.PhieuKhamBenh.AddAsync(phieukham);
            await _context.SaveChangesAsync();
            return new JsonResult("Success");
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PhieuKhamBenh>> GetPhieuKham(int id)
        {
            var phieuKham = await _context.PhieuKhamBenh.FindAsync(id);
            phieuKham.HoaDon = await _context.HoaDon.FindAsync(phieuKham.MaHD);
            if (phieuKham == null)
            {
                return NotFound();
            }

            return phieuKham;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhieuKham(int id)
        {
            var phieuKhamBenh = await _context.PhieuKhamBenh.FindAsync(id);
            if (phieuKhamBenh == null)
            {
                return new JsonResult("Error");
            }

            _context.PhieuKhamBenh.Remove(phieuKhamBenh);
            await _context.SaveChangesAsync();

            return new JsonResult("Success");
        }

        [HttpGet]
        public async Task<ActionResult> GetAllPhieuKham()
        {
            return new JsonResult(await _context.PhieuKhamBenh.Include(x => x.HoaDon).Include(a=>a.BacSi).Include(a=>a.BenhNhan).ToListAsync());
        }
        
        [HttpGet]
        [Route("GetHoaDonByMaHD/{id}")]
        public async Task<IActionResult> GetHoaDonByMaHD(int id)
        {
            return new JsonResult(await _context.HoaDon.FindAsync(id));
        }

        [HttpPut]
        public async Task<IActionResult> PutPhieuKham(PhieuKhamBenh phieuKham)
        {
            _context.Entry(phieuKham).State = EntityState.Modified;

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
    }
}
