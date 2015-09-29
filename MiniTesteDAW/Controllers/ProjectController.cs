using MiniTesteDAW.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MiniTesteDAW.Controllers
{
    public class ProjectController : Controller
    {
        //
        // GET: /Projecto/
        DefaultContext db = new DefaultContext();
        public ActionResult Index()
        {
            return View();
        }


        public JsonResult save(Project data)
        {
            db.project.Add(data);
            db.SaveChanges();
            return null;
        }
        public ActionResult CRUDProject()
        {
            return PartialView();
        }

        public JsonResult getList()
        {
            db.Configuration.ProxyCreationEnabled = false; //Para não dar erro de circular reference

            var emp = new List<Project>();

            emp = db.project.ToList();
            return Json(emp, JsonRequestBehavior.AllowGet);
        }

        public JsonResult details(int memberID)
        {
            db.Configuration.ProxyCreationEnabled = false; //Para não dar erro de circular reference

            var ret = db.tarefa.Where(x => x.trabalhoCod == memberID).Select(x => new { x.memberCod, x.description }).ToList();
            return Json(ret, JsonRequestBehavior.AllowGet);

            /*var emp = new List<Project>();

            emp = db.project.ToList();
            return Json(emp, JsonRequestBehavior.AllowGet);*/
        }


        public JsonResult update(Project emp)
        {
            db.Entry(emp).State = EntityState.Modified;
            db.SaveChanges();
            return null;
        }


        public JsonResult delete(Project data)
        {
            Project emp = db.project.Find(data.id);
            db.project.Remove(emp);
            db.SaveChanges();
            return null;
        }

    }
}
