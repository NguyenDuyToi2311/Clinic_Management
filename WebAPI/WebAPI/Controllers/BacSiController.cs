using Microsoft.AspNetCore.Authorization;
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
    public class BacSiController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        private readonly ClinicDbContext _context;

        public BacSiController(ClinicDbContext context, IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
            _context = context;
        }

        // GET: api/BacSi
        [HttpGet]
        
        public async Task<ActionResult> GetAllBacSi()
        {
            return new JsonResult(await _context.BacSi.Include(x => x.ChuyenKhoa).ToListAsync());
        }

        // GET: api/BacSi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BacSi>> GetBacSi(int id)
        {
            var bacsi = await _context.BacSi.FindAsync(id);
            bacsi.ChuyenKhoa = await _context.ChuyenKhoa.FindAsync(bacsi.MaCK);
            if (bacsi == null)
            {
                return NotFound();
            }

            return bacsi;
        }

        // PUT: api/BacSi/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Authorize(Policy = Policies.Admin)]
        public async Task<IActionResult> PutBacSi(BacSi bacsi)
        {
            _context.Entry(bacsi).State = EntityState.Modified;

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

        // POST: api/BacSi
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Policy = Policies.Admin)]
        public async Task<ActionResult<BacSi>> PostBacSi(BacSi bacsi)
        {
            _context.BacSi.Add(bacsi);
            await _context.SaveChangesAsync();
            return new JsonResult("Success");
        }

        // DELETE: api/BacSi/5
        [HttpDelete("{id}")]
        [Authorize(Policy = Policies.Admin)]
        public async Task<IActionResult> DeleteBacSi(int id)
        {
            var bacsi = await _context.BacSi.FindAsync(id);
            if (bacsi == null)
            {
                return new JsonResult("Error");
            }

            _context.BacSi.Remove(bacsi);
            await _context.SaveChangesAsync();

            return new JsonResult("Success");
        }

        private bool BacSiExists(int id)
        {
            return _context.BacSi.Any(e => e.MaBS == id);
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


        [Route("GetAllChuyenKhoa")]
        public JsonResult GetAllChuyenKhoa()
        {

            var chuyenKhoas = _context.ChuyenKhoa.ToList();
            return new JsonResult(chuyenKhoas);
        }
        [Authorize(Policy = Policies.Doctor)]
        
        [Route("LichKhamChoDuyet/{id}")]
        public JsonResult LichKhamChoDuyet(int id)
        {
            var lichKhams = _context.LichKham.Where(a => a.TrangThai == "Chờ Duyệt" && a.MaBS==id).Include(a=>a.BenhNhan);
            return new JsonResult(lichKhams);
        }
        [Route("LichKhamChoKham/{id}")]
        public JsonResult LichKhamChoKham(int id)
        {
            var lichKhams = _context.LichKham.Where(a => a.TrangThai == "Chờ Khám" && a.MaBS == id).Include(a => a.BenhNhan);
            return new JsonResult(lichKhams);
        }
        [Route("LichKhamComplete/{id}")]
        public JsonResult LichKhamComplete(int id)
        {
            var lichKhams = _context.LichKham.Where(a => a.TrangThai == "Đã Khám" && a.MaBS == id).Include(a => a.BenhNhan);
            return new JsonResult(lichKhams);
        }

    }
}
