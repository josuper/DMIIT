using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MiniTesteDAW.Models
{
    [Table("tb_tarefa")]
    public class Tarefa
    {
        [Key]
        [ForeignKey("cod_member")]
        [Column(Order = 10)]
       // [Display(Name = " Docente * ")]
       // [Required(ErrorMessage = " ")]
        public int memberCod { get; set; }
        public virtual Member cod_member { get; set; }

        [Key]
        [ForeignKey("cod_project")]
        [Column(Order = 30)]
        //[Display(Name = " Título de Trabalho * ")]
        //[Required(ErrorMessage = " ")]
        public int trabalhoCod { get; set; }
        public virtual Project cod_project { get; set; }

        [Column("description")]
        public string description { get; set; }

        //BREAKPOINT: a ideia era no CRUDTarefa invez de colocar memberCod
    }
}