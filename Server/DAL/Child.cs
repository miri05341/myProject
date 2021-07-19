using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    [Table("children")]
    public class Child
    {
        public int childId { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        [Required]
        public string name { get; set; }

        [Required]
        public string birthdate { get; set; }

        [Column(TypeName = "nvarchar(12)")]
        [Required]
        public string ID { get; set; }
    }
}
