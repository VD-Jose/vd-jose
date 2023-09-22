using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace connecttomysql
{
           public class author
        {
            public string author_ID { get; set; }
            public string author_name { get; set; }
            public string Nationality { get; set; }

            public author(string Author_ID, string Author_name, string Nationality)
            {
                this.author_ID = Author_ID; 
                this.author_name = Author_name;
                this.Nationality = Nationality;
            }
        }
    }

