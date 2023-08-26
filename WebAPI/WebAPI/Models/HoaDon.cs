using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class HoaDon
    {
        [Key]
        public int MaHD { get; set; }
        public PhieuKhamBenh PhieuKhamBenh { get; set; }
        public DateTime NgayLap { get; set; }
        public decimal TongTien { get; set; }
    }
}
