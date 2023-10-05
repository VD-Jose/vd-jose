using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Meetings
{
    public partial class index1 : System.Web.UI.Page
    {
        string conString = "server=localhost;database=vuedatameetings;uid=root;password=Vuedata@123";

        void GridFill()
        {
            MySqlConnection conn = new MySqlConnection(conString);
            conn.Open();
            MySqlDataAdapter sqlDa = new MySqlDataAdapter("BookingsViewAll", conn);
            sqlDa.SelectCommand.CommandType = CommandType.StoredProcedure;
            DataTable dtbl = new DataTable();
            sqlDa.Fill(dtbl);

            gvuserbookings.DataSource = dtbl;
            gvuserbookings.DataBind();


        }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                Clear();
                GridFill();
            }
        }

        protected void btnSave_Click(object sender, EventArgs e)

        {
            try
            {

                MySqlConnection conn = new MySqlConnection(conString);
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("bookingsadd", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("_BookingId", Convert.ToInt32(hfBookingId.Value == "" ? "0" : hfBookingId.Value));
                cmd.Parameters.AddWithValue("_EmployeeId", Convert.ToInt32(employeeId.Text.Trim()));
                cmd.Parameters.AddWithValue("_MeetingRoomName", meetingroomname.Text.Trim());
                cmd.Parameters.AddWithValue("_startTime", DateTime.ParseExact(txstartTime.Text.Trim(), "yyyy-MM-ddTHH:mm", null));
                cmd.Parameters.AddWithValue("_endTime", DateTime.ParseExact(txendTime.Text.Trim(), "yyyy-MM-ddTHH:mm", null));
                cmd.Parameters.AddWithValue("_attendeesCount", Convert.ToInt32(attendeesCount.Text.Trim()));
                cmd.ExecuteNonQuery();
                GridFill();
                Clear();
                lblSuccessMessage.Text = "Submitted Successfully";
            }
            catch (Exception ex) {
                lblErrorMessage.Text = ex.Message;
            }
            }

    
        



void Clear()
        {
            hfBookingId.Value = "";
            employeeId.Text = txstartTime.Text = txendTime.Text = attendeesCount.Text  = "";
            btnSave.Text = "Save";
            btnDelete.Enabled = false;
            lblErrorMessage.Text = lblSuccessMessage.Text = "";
        }
        protected void btnClear_Click(object sender, EventArgs e)
        {
            {
                Clear();
            }



            
        }



            protected void lnkSelect_OnClick(object sender, EventArgs e)
            {
                int meetingId = Convert.ToInt32((sender as LinkButton).CommandArgument);

                {
                    MySqlConnection conn = new MySqlConnection(conString);
                    conn.Open();
                    MySqlCommand cmd = new MySqlCommand("BookingsViewByID", conn);
                    cmd.Parameters.AddWithValue("_BookingId", hfBookingId);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataReader reader = cmd.ExecuteReader();



                    if (reader.Read())
                    {
                        DateTime startTime = Convert.ToDateTime(reader["StartTime"]);
                        DateTime endTime = Convert.ToDateTime(reader["EndTime"]);



                        txstartTime.Text = startTime.ToString("yyyy-MM-ddTHH:mm");
                        txendTime.Text = endTime.ToString("yyyy-MM-ddTHH:mm");
                        attendeesCount.Text = reader["AttendeesCount"].ToString();
                        employeeId.Text = reader["txtEmployeeId"].ToString();
                    meetingroomname.Text = reader["txtmeetingRoomId"].ToString();
                        



                        btnSave.Text = "Update";
                        btnDelete.Enabled = true;
                    }
                }
            }
            protected void btnDelete_Click(object sender, EventArgs e)
            {              
                    MySqlConnection conn = new MySqlConnection(conString);
                    conn.Open();
                    MySqlCommand cmd = new MySqlCommand("BookingsDeleteByID", conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("_BookingId", Convert.ToInt32(hfBookingId.Value == "" ? "0" : hfBookingId.Value));
                    cmd.ExecuteNonQuery();
                    GridFill();
                    Clear();
                    lblSuccessMessage.Text = "Deleted Successfully";
                
                }
        }
        }
    

    
