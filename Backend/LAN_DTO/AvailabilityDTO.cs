using LAN_Enums;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LAN_DTO
{
    [Table("availability")]
    public class AvailabilityDTO
    {
        [Key]
        public int AvailabilityID { get;  set; }
        [ForeignKey("UserID")]
        public UserDTO User { get;  set; }
        [JsonConverter(typeof(StringEnumConverter))]
        public AvailabilityEnum Available { get; set; }
    }
}
