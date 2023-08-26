using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class BenhNhan
    {
        [Key]
        public int MaBN { get; set; }
        public string TenBN { get; set; }
        public string GioiTinh { get; set; }
        public DateTime NgaySinh { get; set; }
        public string SDT { get; set; }
        public string DiaChi { get; set; }
        public string Password { get; set; }
        public string UserType { get; set; }
        public ICollection<LichKham> LichKhams { get; set; }
        public ICollection<PhieuKhamBenh> PhieuKhamBenhs { get; set; }
        public string HinhAnh { get; set; }
    }
}
