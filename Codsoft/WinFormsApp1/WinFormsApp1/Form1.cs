using MongoDB.Driver;
using System;
using System.Configuration;
using System.Windows.Forms;


namespace WinFormsApp1
{
    public partial class Form1 : Form
    {
        IMongoCollection<MeetingRoom> MeetingRoomCollection;


        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            var connectionStrting = ConfigurationManager.ConnectionStrings["DatabaseConnection"].ConnectionString;
            var databaseName = MongoUrl.Create(connectionStrting).DatabaseName;
            var mongoClient = new MongoClient(connectionStrting);
            var database = mongoClient.GetDatabase(databaseName);
            MeetingRoomCollection = database.GetCollection<MeetingRoom>("meetingroom");

            LoadProductData();
        }


        private void LoadProductData()
        {
            var filterDefinition = Builders<MeetingRoom>.Filter.Empty;
            var meetingroom = MeetingRoomCollection.Find(filterDefinition).ToList();
            DataGridView1.DataSource = meetingroom;
        }


        private void butto_click(object sender, EventArgs e)
        {

            string meetingroomid = txtRoom.Text;
            string meetingtitle = txtTitle.Text;
            int attendeescount = int.Parse(textBox1.Text);
            string userid = txtUser.Text;
            string meetingroomname = textBox2.Text;
            DateTime starttime = dateTimePickerStart.Value;
            DateTime endtime = dateTimePickerEnd.Value;


            var meetingroom = new MeetingRoom
            {
                MeetingRoomId = meetingroomid,
                MeetingTitle = meetingtitle,
                AttendeesCount = attendeescount,
                UserId = userid,
                MeetingRoomName = meetingroomname,
                startTime = starttime,
                EndTime = endtime

            };

            MeetingRoomCollection.InsertOne(meetingroom);
            LoadProductData();

        }
        private void button2_click(object sender, EventArgs e)
        {
            {
                string meetingroomIdToDelete = txtRoom.Text;
                var filter = Builders<MeetingRoom>.Filter.Eq(x => x.MeetingRoomId, meetingroomIdToDelete);



                var result = MeetingRoomCollection.DeleteOne(filter);



                if (result.DeletedCount > 0)
                {
                    MessageBox.Show("Meeting document deleted.");
                }
                else
                {
                    MessageBox.Show("Meeting document not found or no deletions applied.");
                }
                LoadProductData();
            }
        }
    }
}



