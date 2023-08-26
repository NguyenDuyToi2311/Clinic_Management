using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class BacSi
    {
        [Key]
        public int MaBS { get; set; }
        public string TenBS { get; set; }
        public int MaCK { get; set; }

        [ForeignKey("MaCK")]
        public ChuyenKhoa ChuyenKhoa { get; set; }
        
        public string Email { get; set; }
        public string SDT { get; set; }
        public string Password { get; set; }
        public string UserType { get; set; }
        public ICollection<PhieuKhamBenh> PhieuKhamBenhs { get; set; }
        public ICollection<LichKham> LichKhams { get; set; }
        public string HinhAnh { get; set; }
       
    }
}
