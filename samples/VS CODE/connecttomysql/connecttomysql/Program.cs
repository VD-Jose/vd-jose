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
            while (reader.Read ())
            {
                Console.WriteLine(reader["Author_ID"]);
                Console.WriteLine(reader["Author_Name"]);
                Console.WriteLine(reader["Nationality"]); 
            }

            conn.Close ();
        }
    }
}