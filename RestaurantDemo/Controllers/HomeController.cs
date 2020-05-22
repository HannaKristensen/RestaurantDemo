using Microsoft.AspNet.Identity;
using RestaurantDemo.Models;
using System.Linq;
using System.Web.Mvc;

namespace RestaurantDemo.Controllers
{
    public class HomeController : Controller
    {
        private RoleModel db = new RoleModel();

        public ActionResult Index()
        {
            var userID = User.Identity.GetUserId();
            var role = db.AspNetUserRoles.Any(x => x.UserId.ToString() == userID);
            ViewBag.AdminRole = role;
            return View();
        }
    }
}