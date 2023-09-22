using MySql.Data.MySqlClient;

namespace connecttomysql

{

    internal class program
    {
        static void Main(string[] args)
        {
            string server = "localhost";
            string database = "library";
            string username = "root";
            string password = "Vuedata@123";
            string constring = "SERVER=" + server + ";" + "DATABASE=" + database + ";" + "USERNAME=" + username + ";" + "PASSWORD="
+ password + ";";
            MySqlConnection conn = new MySqlConnection (constring);
            conn.Open ();
            string query = "select * from author";
            MySqlCommand cmd = new MySqlCommand (query, conn);
            MySqlDataReader reader = cmd.ExecuteReader ();
            //author author = null;
            List<author> authors = new List<author> ();
            while (reader.Read ())
            {
                authors.Add(new author(reader.GetString(0), reader.GetString(1), reader.GetString(2))); 
                    
            }


            conn.Close ();
        }
    }
}