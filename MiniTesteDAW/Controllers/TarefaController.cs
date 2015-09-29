using MiniTesteDAW.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MiniTesteDAW.Controllers
{
    public class TarefaController : Controller
    {
        //
        // GET: /Tarefa/

        DefaultContext db = new DefaultContext();

        public ActionResult Index()
        {
            return View();
        }

        //Pega dados dos projectos da base de dados
        [HttpPost]
        public JsonResult GetStates(int countryId)
        {
            {
                var ret = db.project.Where(x => x.id == countryId).Select(x => new { x.id, x.title }).ToList();
                return Json(ret);
            }
        }

        //Pega projectos para preencher na combobox
        public JsonResult GetProject()
        {
            {
                var ret = db.project.Select(x => new { x.id, x.title }).ToList();
                return Json(ret, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult GetMember()
        {
            {
                var ret = db.member.Select(x => new { x.id, x.name }).ToList();
                return Json(ret, JsonRequestBehavior.AllowGet);
            }
        }


        public JsonResult save(Tarefa data)
        {
            //O cod_member chega null, vamos resolver isso
           data.cod_member = db.member.Find(data.memberCod);

            //O cod_project chega null, vamos resolver isso
           data.cod_project = db.project.Find(data.trabalhoCod);

            db.tarefa.Add(data);
            db.SaveChanges();

            return null;
        }
        public ActionResult CRUDTarefa()
        {
            return PartialView();
        }

        public JsonResult getList()
        {
            db.Configuration.ProxyCreationEnabled = false; //Para não dar erro de circular reference

            var emp = db.tarefa.ToList();
            //var emp = db.tarefa.Select(x => new { x.cod_project.title }).ToList();

            //as Taerfas estao com cod_member e cod_project nulos, vamos resolver isso nesse foreach
          /*  foreach(var e in emp)
            {
                e.cod_member = db.member.Find(e.memberCod);
                e.cod_project = db.project.Find(e.trabalhoCod);
            }*/
            
            return Json(emp, JsonRequestBehavior.AllowGet);
        }

      /*  public JsonResult getListProject(List<Tarefa> t)
        {
            db.Configuration.ProxyCreationEnabled = false; //Para não dar erro de circular reference


            var emp = new List<Project>();

            foreach(var e in t)
            {
                emp.Add(e.cod_project);
            }         

            return Json(emp, JsonRequestBehavior.AllowGet);
        }
        */
        public JsonResult update(Tarefa emp)
        {
            db.Entry(emp).State = EntityState.Modified;
            db.SaveChanges();
            return null;
        }


        public JsonResult delete(Tarefa data)
        {
            Tarefa emp = db.tarefa.Find(data.cod_project);
            db.tarefa.Remove(emp);
            db.SaveChanges();
            return null;
        }

    }
}
