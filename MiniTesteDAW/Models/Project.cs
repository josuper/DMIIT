using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MiniTesteDAW.Models
{
    [Table("tb_project")]
    public class Project
    {
        [Column("id")]
        public int id { get; set; }

        [Column("title")]
        public string title { get; set; }

        [Column("data_inicio")]
        [Display(Name = "Data de Início ")]
        [DisplayFormat(DataFormatString = "dd/mm/yyyy")]
        //[Required(ErrorMessage = "Este campo deve ser preenchido")]
        public DateTime startDate { get; set; }

        [Column("data_fim")]
        [Display(Name = "Data de Termino ")]
        [DisplayFormat(DataFormatString = "dd/mm/yyyy")]
        //[Required(ErrorMessage = "Este campo deve ser preenchido")]
        public DateTime endDate { get; set; }

      //  [JsonIgnore] // Para nao dar erro de circular reference
        public virtual ICollection<Tarefa> tarefa { get; set; }

    }
}