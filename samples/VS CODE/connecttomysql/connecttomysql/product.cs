using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;


namespace connectingdb
{
    public class book
    {
        private string v1;
        private int v2;
        private string v3;
        private string v4;
        private int v5;
        private int v6;

        public book(string v1, int v2, string v3, string v4, int v5, int v6)
        {
            this.v1 = v1;
            this.v2 = v2;
            this.v3 = v3;
            this.v4 = v4;
            this.v5 = v5;
            this.v6 = v6;
        }

        static void Main(string[] args)
        {
            string server = "localhost";
            string database = "library";
            string username = "root";
            string password = "Vuedata@123";
            string constring = "SERVER=" + server + ";" + "DATABASE=" + database + ";" + "USERNAME=" + username + ";" + "PASSWORD="
    + password + ";";
            MySqlConnection conn = new MySqlConnection(constring);
            conn.Open();
            string query = "select * from book";
            MySqlCommand cmd = new MySqlCommand(query, conn);
            MySqlDataReader reader = cmd.ExecuteReader();
            List<book> books = new List <book> ();
            while (reader.Read())
            {
                books.Add(new book(reader.GetString(0), reader.GetInt32(1), reader.GetString(2), reader.GetString(3), reader.GetInt32(4), reader.GetInt32(5)));
            }

            conn.Close();
        }
    }
}


