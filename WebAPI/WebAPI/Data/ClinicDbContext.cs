using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class ClinicDbContext:DbContext
    {
        public ClinicDbContext(DbContextOptions options)
            : base(options)
        {
        }
        public DbSet<Department> Department { get; set; }
        public DbSet<Employee> Employee { get; set; }
        public DbSet<Admin> Admin { get; set; }        
        public DbSet<ChuyenKhoa> ChuyenKhoa { get; set; }
        public DbSet<HoaDon> HoaDon { get; set; }
        public DbSet<LichKham> LichKham { get; set; }
        public DbSet<PhieuKhamBenh> PhieuKhamBenh { get; set; }
        public DbSet<BenhNhan> BenhNhan { get; set; }
        public DbSet<BacSi> BacSi { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<BenhNhan>(entity => {
                entity.HasIndex(e => e.SDT).IsUnique();
            });
            builder.Entity<BacSi>(entity => {
                entity.HasIndex(e => e.Email).IsUnique();
            });
        }
    }
}
