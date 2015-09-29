using MiniTesteDAW.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MiniTesteDAW.Controllers
{
    public class MemberController : Controller
    {
        //
        // GET: /Member/
        //
        // GET: /Employee/
        DefaultContext db = new DefaultContext();
        public ActionResult Index()
        {
            return View();
        }


        public JsonResult save(Member data)
        {

            db.member.Add(data);
            db.SaveChanges();
            return null;
        }
        public ActionResult CRUD()
        {
            return PartialView();
        }

        public JsonResult getList()
        {
            db.Configuration.ProxyCreationEnabled = false; //Para não dar erro de circular reference

            var emp = new List<Member>();

            emp = db.member.ToList();
            return Json(emp, JsonRequestBehavior.AllowGet);
        }


        public JsonResult update(Member emp)
        {
            db.Entry(emp).State = EntityState.Modified;
            db.SaveChanges();
            return null;
        }


        public JsonResult delete(Member data)
        {
            Member emp = db.member.Find(data.id);
            db.member.Remove(emp);
            db.SaveChanges();
            return null;
        }

    }
}
