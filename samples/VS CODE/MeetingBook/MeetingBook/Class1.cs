using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace WinFormsApp1
{
    [Serializable]
    public class MeetingRoom
    {
        [BsonId, BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }

        [BsonElement("MeetingRoomId"), BsonRepresentation(BsonType.String)]
        public string MeetingRoomId { get; set; }

        [BsonElement("MeetingTitle"), BsonRepresentation(BsonType.String)]
        public string MeetingTitle { get; set; }

        [BsonElement("AttendeesCount"), BsonRepresentation(BsonType.String)]
        public int AttendeesCount { get; set; }

        [BsonElement("UserId"), BsonRepresentation(BsonType.String)]
        public string UserId { get; set; }

        [BsonElement("MeetingRoomName"), BsonRepresentation(BsonType.String)]

        public string MeetingRoomName { get; set; }


        [BsonElement("startTime"), BsonRepresentation(BsonType.DateTime)]

        public DateTime startTime { get; set; }

        [BsonElement("EndTime"), BsonRepresentation(BsonType.DateTime)]

        public DateTime EndTime { get; set; }
    }


}

