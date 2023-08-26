using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class PhieuKhamViewModel
    {
        public int MaPK { get; set; }
        public DateTime NgayKham { get; set; }
        public string TrieuChung { get; set; }
        public string ChuanDoan { get; set; }
        public int MaBN { get; set; }       
        public int MaBS { get; set; }
        public decimal TongTien { get; set; }
    }
}
