namespace WinFormsApp1
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            label1 = new Label();
            label2 = new Label();
            label3 = new Label();
            txtTitle = new TextBox();
            txtUser = new TextBox();
            txtRoom = new TextBox();
            label6 = new Label();
            dateTimePickerStart = new DateTimePicker();
            label7 = new Label();
            dateTimePickerEnd = new DateTimePicker();
            button2 = new Button();
            label8 = new Label();
            textBox1 = new TextBox();
            label9 = new Label();
            label10 = new Label();
            textBox2 = new TextBox();
            butto = new Button();
            DataGridView1 = new DataGridView();
            panel1 = new Panel();
            ((System.ComponentModel.ISupportInitialize)DataGridView1).BeginInit();
            panel1.SuspendLayout();
            SuspendLayout();
            // 
            // label1
            // 
            label1.BackColor = Color.DimGray;
            label1.Font = new Font("Segoe UI", 14F, FontStyle.Regular, GraphicsUnit.Point);
            label1.Location = new Point(0, 0);
            label1.Name = "label1";
            label1.Size = new Size(446, 164);
            label1.TabIndex = 0;
            label1.Text = "\r\nMeeting Room Booking";
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(38, 181);
            label2.Name = "label2";
            label2.Size = new Size(193, 32);
            label2.TabIndex = 1;
            label2.Text = "Meeting RoomId";
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(41, 265);
            label3.Name = "label3";
            label3.Size = new Size(157, 32);
            label3.TabIndex = 3;
            label3.Text = "Meeting Title";
            // 
            // txtTitle
            // 
            txtTitle.Location = new Point(347, 265);
            txtTitle.Name = "txtTitle";
            txtTitle.Size = new Size(287, 39);
            txtTitle.TabIndex = 7;
            // 
            // txtUser
            // 
            txtUser.Location = new Point(347, 439);
            txtUser.Name = "txtUser";
            txtUser.Size = new Size(303, 39);
            txtUser.TabIndex = 10;
            // 
            // txtRoom
            // 
            txtRoom.Location = new Point(347, 181);
            txtRoom.Name = "txtRoom";
            txtRoom.Size = new Size(287, 39);
            txtRoom.TabIndex = 11;
            // 
            // label6
            // 
            label6.AutoSize = true;
            label6.Location = new Point(39, 590);
            label6.Name = "label6";
            label6.Size = new Size(122, 32);
            label6.TabIndex = 14;
            label6.Text = "Start Time";
            // 
            // dateTimePickerStart
            // 
            dateTimePickerStart.Location = new Point(347, 583);
            dateTimePickerStart.Name = "dateTimePickerStart";
            dateTimePickerStart.Size = new Size(400, 39);
            dateTimePickerStart.TabIndex = 15;
            // 
            // label7
            // 
            label7.AutoSize = true;
            label7.Location = new Point(43, 674);
            label7.Name = "label7";
            label7.Size = new Size(114, 32);
            label7.TabIndex = 16;
            label7.Text = "End Time";
            // 
            // dateTimePickerEnd
            // 
            dateTimePickerEnd.Location = new Point(347, 667);
            dateTimePickerEnd.Name = "dateTimePickerEnd";
            dateTimePickerEnd.Size = new Size(400, 39);
            dateTimePickerEnd.TabIndex = 17;
            // 
            // button2
            // 
            button2.BackColor = Color.DimGray;
            button2.Location = new Point(121, 748);
            button2.Name = "button2";
            button2.Size = new Size(220, 46);
            button2.TabIndex = 18;
            button2.Text = "Delete a Booking";
            button2.UseVisualStyleBackColor = false;
            // 
            // label8
            // 
            label8.AutoSize = true;
            label8.Location = new Point(38, 357);
            label8.Name = "label8";
            label8.Size = new Size(194, 32);
            label8.TabIndex = 23;
            label8.Text = "Attendees Count";
            // 
            // textBox1
            // 
            textBox1.Location = new Point(347, 353);
            textBox1.Name = "textBox1";
            textBox1.Size = new Size(287, 39);
            textBox1.TabIndex = 24;
            // 
            // label9
            // 
            label9.AutoSize = true;
            label9.Location = new Point(43, 450);
            label9.Name = "label9";
            label9.Size = new Size(88, 32);
            label9.TabIndex = 25;
            label9.Text = "User Id";
            // 
            // label10
            // 
            label10.AutoSize = true;
            label10.Location = new Point(42, 521);
            label10.Name = "label10";
            label10.Size = new Size(244, 32);
            label10.TabIndex = 26;
            label10.Text = "Meeting Room Name";
            // 
            // textBox2
            // 
            textBox2.Location = new Point(347, 510);
            textBox2.Name = "textBox2";
            textBox2.Size = new Size(303, 39);
            textBox2.TabIndex = 27;
            // 
            // butto
            // 
            butto.BackColor = Color.DimGray;
            butto.Location = new Point(427, 748);
            butto.Name = "butto";
            butto.Size = new Size(220, 46);
            butto.TabIndex = 28;
            butto.Text = "Book a Meet";
            butto.UseVisualStyleBackColor = false;
            // 
            // DataGridView1
            // 
            DataGridView1.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            DataGridView1.Location = new Point(772, 182);
            DataGridView1.Name = "DataGridView1";
            DataGridView1.RowHeadersWidth = 82;
            DataGridView1.RowTemplate.Height = 41;
            DataGridView1.Size = new Size(946, 300);
            DataGridView1.TabIndex = 29;
            // 
            // panel1
            // 
            panel1.BackColor = SystemColors.MenuHighlight;
            panel1.Controls.Add(label1);
            panel1.Location = new Point(0, 1);
            panel1.Name = "panel1";
            panel1.Size = new Size(1663, 164);
            panel1.TabIndex = 30;
            // 
            // Form1
            // 
            AccessibleRole = AccessibleRole.TitleBar;
            AllowDrop = true;
            AutoScaleDimensions = new SizeF(13F, 32F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1669, 971);
            Controls.Add(DataGridView1);
            Controls.Add(butto);
            Controls.Add(textBox2);
            Controls.Add(label10);
            Controls.Add(label9);
            Controls.Add(textBox1);
            Controls.Add(label8);
            Controls.Add(button2);
            Controls.Add(dateTimePickerEnd);
            Controls.Add(label7);
            Controls.Add(dateTimePickerStart);
            Controls.Add(label6);
            Controls.Add(txtRoom);
            Controls.Add(txtUser);
            Controls.Add(txtTitle);
            Controls.Add(label3);
            Controls.Add(label2);
            Controls.Add(panel1);
            ImeMode = ImeMode.On;
            Name = "Form1";
            Text = "Form1";
            Load += Form1_Load;
            ((System.ComponentModel.ISupportInitialize)DataGridView1).EndInit();
            panel1.ResumeLayout(false);
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label label1;
        private Label label2;
        private Label label3;
        private TextBox txtTitle;
        private TextBox txtUser;
        private TextBox txtRoom;
        private Label label6;
        private DateTimePicker dateTimePickerStart;
        private Label label7;
        private DateTimePicker dateTimePickerEnd;
        private Button button2;
        private Label label8;
        private TextBox textBox1;
        private Label label9;
        private Label label10;
        private TextBox textBox2;
        private Button butto;
        private DataGridView DataGridView1;
        private Panel panel1;
    }
}