using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RestaurantDemo.Models.ViewModels
{
    public class MenuViewModel
    {
        public int[] PK { get; set; }

        public string[] Title { get; set; }

        public string[] Description { get; set; }

        public string[] Ingredients { get; set; }

        public string[] Catagory { get; set; }

        public decimal[] Price { get; set; }

        public bool[] Avalible { get; set; }
    }
}