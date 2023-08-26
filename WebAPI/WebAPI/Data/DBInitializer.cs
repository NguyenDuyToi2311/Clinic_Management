using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Data
{
    public static class DBInitializer
    {
        public static void Initialize(ClinicDbContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Admin.Any())
            {
                return;   // DB has been seeded
            }

            var admin = new Admin
            {
                AdminName = "dominhhieu",
                FullName = "DO MINH HIEU",
                Password = "1234",
                UserType = "Admin"
            };
            context.Admin.Add(admin);
            var admin2 = new Admin
            {
                AdminName = "nguyenbinhan",
                FullName = "NGUYEN DUY",
                Password = "1234",
                UserType = "Admin"
            };
            context.Admin.Add(admin2);
            context.SaveChanges();

            
        }
    }
}
