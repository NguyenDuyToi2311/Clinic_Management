using Microsoft.AspNetCore.Authorization;
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
    public class ChuyenKhoaController : ControllerBase
    {
        private readonly ClinicDbContext _context;

        public ChuyenKhoaController(ClinicDbContext context)
        {
            _context = context;
        }

        // GET: api/ChuyenKhoa
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ChuyenKhoa>>> GetChuyenKhoas()
        {
            return new JsonResult(await _context.ChuyenKhoa.ToListAsync());
        }

        // GET: api/ChuyenKhoa/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ChuyenKhoa>> GetChuyenKhoa(int id)
        {
            var chuyenkhoa = await _context.ChuyenKhoa.FindAsync(id);

            if (chuyenkhoa == null)
            {
                return NotFound();
            }

            return chuyenkhoa;
        }

        // PUT: api/ChuyenKhoa/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Authorize(Policy = Policies.Admin)]
        public async Task<IActionResult> PutChuyenKhoa(ChuyenKhoa chuyenkhoa)
        {
            _context.Entry(chuyenkhoa).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return new JsonResult("Error");
            }
            return new JsonResult("Success");

        }

        // POST: api/ChuyenKhoa
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Policy = Policies.Admin)]
        public async Task<ActionResult> PostChuyenKhoa(ChuyenKhoa chuyenkhoa)
        {
            if (ModelState.IsValid)
            {
                _context.ChuyenKhoa.Add(chuyenkhoa);
                await _context.SaveChangesAsync();
                return new JsonResult("Success");
            }
            return new JsonResult("Error");
        }

        // DELETE: api/ChuyenKhoa/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteChuyenKhoa(int id)
        {
            var chuyenkhoa = await _context.ChuyenKhoa.FindAsync(id);
            if (chuyenkhoa == null)
            {
                return NotFound();
            }

            _context.ChuyenKhoa.Remove(chuyenkhoa);
            await _context.SaveChangesAsync();

            return new JsonResult("Success");
        }

        private bool ChuyenKhoaExists(int id)
        {
            return _context.ChuyenKhoa.Any(e => e.MaCK == id);
        }
    }
}
