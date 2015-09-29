using MiniTesteDAW.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MiniTesteDAW.Controllers
{
    public class OfficeController : Controller
    {
        //
        // GET: /Office/

        DefaultContext db = new DefaultContext();
        public ActionResult Index()
        {
            return View();
        }


        public JsonResult save(Office data)
        {

            db.office.Add(data);
            db.SaveChanges();
            return null;
        }
        public ActionResult CRUD()
        {
            return PartialView();
        }

        public JsonResult getList()
        {
            var emp = new List<Office>();

            emp = db.office.ToList();
            return Json(emp, JsonRequestBehavior.AllowGet);
        }


        public JsonResult update(Member emp)
        {
            db.Entry(emp).State = EntityState.Modified;
            db.SaveChanges();
            return null;
        }


        public JsonResult delete(Office data)
        {
            Office emp = db.office.Find(data.id);
            db.office.Remove(emp);
            db.SaveChanges();
            return null;
        }

    }
}
