using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    [Table("persons")]
    public class Person
    {
        public int personId { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        [Required]
        public string firstName { get; 
            set; }

        [Column(TypeName = "nvarchar(20)")]
        [Required]
        public string lastName { get; 
            set; }

        [Column(TypeName = "nvarchar(12)")]
        [Required]
        public string ID { get; set; }

        [Required]
        public string birthdate { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        [Required]
        public string kind{get;set;}

       [Column(TypeName = "nvarchar(10)")]
        [Required]
        public string helth { get; set; }

        [Required]
        public HashSet<Child> child { get; set; }

    }
}
