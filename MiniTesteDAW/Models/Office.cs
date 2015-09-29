using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MiniTesteDAW.Models
{
    [Table("tb_office")]
    public class Office
    {
        [Column("id")]
        public int id { get; set; }

        [Column("description")]
        public string description { get; set; }

        [Column("designation")]
        public string designation { get; set; }

    }
}