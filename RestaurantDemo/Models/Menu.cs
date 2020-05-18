namespace RestaurantDemo.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Menu")]
    public partial class Menu
    {
        [Key]
        public int PK { get; set; }

        [Required]
        [StringLength(128)]
        public string Title { get; set; }

        [Required]
        [StringLength(1000)]
        public string Description { get; set; }

        [Required]
        [StringLength(1000)]
        public string Ingredients { get; set; }

        [Required]
        [StringLength(128)]
        public string Catagory { get; set; }

        public decimal Price { get; set; }

        public bool Avalible { get; set; }
    }
}
