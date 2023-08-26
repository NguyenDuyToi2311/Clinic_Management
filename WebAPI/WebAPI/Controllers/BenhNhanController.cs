using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BenhNhanController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        private readonly ClinicDbContext _context;

        public BenhNhanController(ClinicDbContext context, IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
            _context = context;
        }

        // GET: api/BenhNhan
        [HttpGet]
        public async Task<ActionResult> GetAllBenhNhan()
        {
            return new JsonResult(await _context.BenhNhan.ToListAsync());
        }

        // GET: api/BenhNhan/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BenhNhan>> GetBenhNhan(int id)
        {
            var benhnhan = await _context.BenhNhan.FindAsync(id);
            if (benhnhan == null)
            {
                return NotFound();
            }

            return benhnhan;
        }

        // PUT: api/BenhNhan/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutBenhNhan(BenhNhan benhnhan)
        {
            _context.Entry(benhnhan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return new JsonResult("Fail");
            }

            return new JsonResult("Success");
        }

        // POST: api/BenhNhan
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BenhNhan>> PostBenhNhan(BenhNhan benhnhan)
        {
            var bn = await _context.BenhNhan.AnyAsync(b => b.SDT == benhnhan.SDT);
            if (bn)
                return new JsonResult("Số điện thoại đã được sử dụng");
            _context.BenhNhan.Add(benhnhan);
            await _context.SaveChangesAsync();
            return new JsonResult("Success");
        }

        // DELETE: api/BenhNhan/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBenhNhan(int id)
        {
            var benhnhan = await _context.BenhNhan.FindAsync(id);
            if (benhnhan == null)
            {
                return new JsonResult("Error");
            }

            _context.BenhNhan.Remove(benhnhan);
            await _context.SaveChangesAsync();

            return new JsonResult("Success");
        }

        private bool BenhNhanExists(int id)
        {
            return _context.BenhNhan.Any(e => e.MaBN == id);
        }

        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {

                return new JsonResult("a1.jpg");
            }
        }

        [Route("LichKhamChoDuyet/{id}")]
        public JsonResult LichKhamChoDuyet(int id)
        {
            var lichKhams = _context.LichKham
            .Where(a => a.TrangThai == "Chờ Duyệt" && a.MaBN == id)
            .Include(a => a.BacSi).Include(a=>a.BacSi.ChuyenKhoa);
            // .Include(a => a.BacSi.ChuyenKhoa);
            return new JsonResult(lichKhams);
        }
        [Route("LichKhamChoKham/{id}")]
        public JsonResult LichKhamChoKham(int id)
        {
            var lichKhams = _context.LichKham.Where(a => a.TrangThai == "Chờ Khám" && a.MaBN == id).Include(a => a.BacSi).Include(a => a.BacSi.ChuyenKhoa);
            return new JsonResult(lichKhams);
        }
        [Route("LichKhamComplete/{id}")]
        public JsonResult LichKhamComplete(int id)
        {
            var lichKhams = _context.LichKham.Where(a => a.TrangThai == "Đã Khám" && a.MaBN == id).Include(a => a.BacSi).Include(a => a.BacSi.ChuyenKhoa);
            return new JsonResult(lichKhams);
        }
        [Route("GetPhieuKhamBN/{id}")]
        public JsonResult AllLichKham(int id)
        {
            var phieukham = _context.PhieuKhamBenh.Where(a =>a.MaBN == id).Include(a => a.HoaDon).Include(a=>a.BacSi);
            return new JsonResult(phieukham);
        }

    }
}
