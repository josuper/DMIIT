using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MiniTesteDAW.Models
{
    [Table("tb_membro")]
    public class Member
    {
        [Column("id")]
        public int id { get; set; }

        [Column("name")]
        public string name { get; set; }

        [Column("username")]
        public string username { get; set; }

        [Column("password")]
        public string password { get; set; }

       // [JsonIgnore] // Para nao dar erro de circular reference
        public virtual ICollection<Tarefa> tarefa { get; set; }
    }
}