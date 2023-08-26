using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class LichKham
    {
        [Key]
        public int MaLK { get; set; }
        public DateTime NgayKham { get; set; }
        public string TrangThai { get; set; }
        public string GhiChu { get;set; }
        public string PhongKham { get; set; }
        public int MaBN { get; set; }
        [ForeignKey("MaBN")]
        public BenhNhan BenhNhan { get; set; }
        public int MaBS { get; set; }
        [ForeignKey("MaBS")]
        public BacSi BacSi { get; set; }
    }
}
