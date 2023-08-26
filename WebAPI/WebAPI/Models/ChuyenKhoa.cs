using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class ChuyenKhoa
    {
        [Key]
        public int MaCK { get; set; }
        public string TenCK { get; set; }
        public ICollection<BacSi> BacSis { get; set; }
    }
}
