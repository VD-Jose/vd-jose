using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace VuedataMeetings
{
    public class MeetingRoom
    {
        [BsonId, BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
        public string MeetingRoomId { get; set; }

        [BsonElement("MeetingRoomName"), BsonRepresentation(BsonType.String)]
        public List<MeetingRoomName> RoomNames { get; set; }

        [BsonElement("Capacity"), BsonRepresentation(BsonType.String)]
        public string Capacity { get; set; }
        [BsonElement("UserName"), BsonRepresentation(BsonType.String)]
        public string UserName { get; set; }

        [BsonElement("MeetingName"), BsonRepresentation(BsonType.String)]
        public string MeetingName { get; set; }

    }

    public class MeetingRoomName
    {
        public DateTime date { get; set; }
        public string inspirationChamber { get; set; }

        public string CubicRoom {  get; set; }
        public string WarRoom {  get; set; }

    }

}


