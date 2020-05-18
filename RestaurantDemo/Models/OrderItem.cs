namespace RestaurantDemo.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class OrderItem
    {
        [Key]
        public int PK { get; set; }

        [Required]
        [StringLength(128)]
        public string Item { get; set; }

        public int OrderID { get; set; }

        [StringLength(200)]
        public string Comment { get; set; }

        public virtual Order Order { get; set; }
    }
}
