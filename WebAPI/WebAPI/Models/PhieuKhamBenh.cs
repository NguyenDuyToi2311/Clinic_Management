using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class PhieuKhamBenh
    {
        [Key]
        public int MaPK { get; set; }
        public DateTime NgayKham { get; set; }
        public string TrieuChung { get; set; }
        public string ChuanDoan { get; set; }
        public int MaBN { get; set; }
        [ForeignKey("MaBN")]
        public BenhNhan BenhNhan { get; set; }
        public int MaBS { get; set; }
        [ForeignKey("MaBS")]
        public BacSi BacSi { get; set; }
        public int MaHD { get; set; }
        [ForeignKey("MaHD")]
        public HoaDon HoaDon { get; set; }
    }
}
