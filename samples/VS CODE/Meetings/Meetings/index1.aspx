<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index1.aspx.cs" Inherits="Meetings.index1" %>

<!DOCTYPE html>

 

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<title>Meeting Management</title>
    <link rel="stylesheet" type="text/css" href="StyleSheet.CSS" />
</head>
<body>
<form id="bookingForm" runat="server">
    <div>
<asp:Label ID="label1" runat="server" />
<asp:HiddenField ID="hfBookingId" runat="server"/>
<br />
<asp:Label Text="EmployeeID:" runat="server" />  
<asp:TextBox ID="employeeId" runat="server" type="Text" />
<br />

<asp:Label Text="MeetingRoomName:" runat="server" />
<asp:TextBox ID="meetingroomname" runat="server" type="text" />
<br />

<asp:Label Text="Start Time:" runat="server" />
<asp:TextBox ID="txstartTime" runat="server" type="datetime-local" />
<br />

<asp:Label Text="End Time:" runat="server" />
<asp:TextBox ID="txendTime" runat="server" type="datetime-local" />
<br />

<asp:Label Text="Attendees Count:" runat="server" />
<asp:TextBox ID="attendeesCount" runat="server" type="Text" />
<br />
        
<asp:Button ID="btnSave" runat="server" Text="Save" OnClick="btnSave_Click" />
<asp:Button ID="btnDelete" runat="server" Text="Delete" OnClick="btnDelete_Click" />
<asp:Button ID="btnClear" runat="server" Text="Clear" OnClick="btnClear_Click" />


    
<table>
<tr>
<td colspan="2">
<asp:Label ID="lblSuccessMessage" runat="server" ForeColor="Green" />
</td>
</tr>
<tr>
<td></td>
<td colspan="2">
<asp:Label ID="lblErrorMessage" runat="server" ForeColor="Red" />
</td>
</tr>
</table>
<br />
<asp:GridView ID="gvuserbookings" runat="server" AutoGenerateColumns="false">
<Columns>
<asp:BoundField DataField="meetingroomname" HeaderText="MeetingRoomName" />
<asp:BoundField DataField="employeeId" HeaderText="EmloyeeId" />
<asp:BoundField DataField="attendeesCount" HeaderText="Attendees Count" />
<asp:BoundField DataField="startTime" HeaderText="StartTime" />
<asp:BoundField DataField="endTime" HeaderText="EndTime" />
<asp:TemplateField>
<ItemTemplate>
<asp:LinkButton Text="Select" ID="lnkSelect" CommandArgument='<%# Eval("BookingId") %>' runat="server" OnClick="lnkSelect_OnClick"/>
</ItemTemplate>
</asp:TemplateField>
</Columns>
</asp:GridView>
</div>
    </form>
</body>
</html>
