using Microsoft.AspNet.Identity;
using RestaurantDemo.Models;
using System.Linq;
using System.Web.Mvc;
using RestaurantDemo.Models.ViewModels;
using RestaurantDemo.DAL;
using Newtonsoft.Json;

namespace RestaurantDemo.Controllers
{
    public class HomeController : Controller
    {
        private RoleModel db = new RoleModel();
        private DBContext menuDB = new DBContext();

        public ActionResult Index()
        {
            var userID = User.Identity.GetUserId();
            var role = db.AspNetUserRoles.Any(x => x.UserId.ToString() == userID);
            ViewBag.AdminRole = role;

            MenuViewModel model = new MenuViewModel();
            model.PK = menuDB.Menus.Select(x => x.PK).ToArray();
            model.Ingredients = menuDB.Menus.Select(x => x.Ingredients).ToArray();
            model.Price = menuDB.Menus.Select(x => x.Price).ToArray();
            model.Title = menuDB.Menus.Select(x => x.Title).ToArray();
            model.Description = menuDB.Menus.Select(x => x.Description).ToArray();
            model.Catagory = menuDB.Menus.Select(x => x.Catagory).ToArray();
            model.Avalible = menuDB.Menus.Select(x => x.Avalible).ToArray();

            return View(model);
        }

        public ActionResult Menu()
        {
            string[] title = menuDB.Menus.Select(x => x.Title).ToArray();

            var json = JsonConvert.SerializeObject(title);

            return Json(json, JsonRequestBehavior.AllowGet);
        }
    }
}