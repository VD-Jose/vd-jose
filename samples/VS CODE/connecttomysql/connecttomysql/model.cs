
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace connectingdb1
{
    public class book
    {
        public string Title { get; set; }
        public int Book_ID { get; set; }
        public string Publisher { get; set; }
        public string Category { get; set; }

        public int Author_ID { get; set; }
        public int Genre_ID { get; set; }


        public book(string Title, int Book_ID, string Publisher, string Category, int Author_ID, int Genre_ID)
        {
            this.Title = Title;
            this.Book_ID = Book_ID; 
            this.Publisher = Publisher; 
            this.Category = Category;
            this.Author_ID = Author_ID;
            this.Genre_ID = Genre_ID;
        }
    }
}