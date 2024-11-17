import React, { useEffect, useState } from "react";
import { Col, Card, Tag, Button, Typography, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { fallbackData } from "../lib/fallbackData";

const { Text } = Typography;

const RecentEvents2 = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://umbznza169.execute-api.us-east-2.amazonaws.com/hr/eventlist",
          {
            headers: {
              Authorization: `Bearer ${process.env.TOKEN}`,
            },
          }
        );
        setEvents(response.data.data || []);
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents(fallbackData.data);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const calculateSeatAvailability = (event) => {
    const remainingSeats = event.maxallowedparticipants - event.peopleJoined;
    const totalSeats = event.maxallowedparticipants;
    const remainingPercentage = (remainingSeats / totalSeats) * 100;
    console.log(remainingPercentage);

    let seatStatus;
    let seatColor;
    if (remainingPercentage > 50) {
      seatStatus = "Available";
      seatColor = "green";
    } else if (remainingPercentage < 80) {
      seatStatus = "Limited seat";
      seatColor = "orange"; 
    } else if (remainingPercentage < 85) {
      seatStatus = "Full";
      seatColor = "red"; 
    } else {
      seatStatus = "Full";
      seatColor = "red"; 
    }

    return {
      remainingSeats,
      seatStatus,
      seatColor
    };
  };

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <div className="custom-content-area events">
      <p className="heading">Recent Events</p>
      <Col className="custom-content-area row">
        {events.map((event) => (
          <Card
            key={event.id}
            className="card"
            style={{
              width: "90%",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            cover={
              <div style={{ position: "relative" }}>
                <img
                  alt="Event Cover"
                  src={event.imgurl || "/default-image.jpg"} // Fallback to default image
                  style={{
                    height: "150px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                {event.maxallowedparticipants > 0 && (
                <Tag
                color={calculateSeatAvailability(event).seatColor}
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                }}
              >
                {`${calculateSeatAvailability(event).seatStatus}`}
              </Tag>
                )}
                <Button
                  type="primary"
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: "#FF8C42",
                    border: "none",
                  }}
                  onClick={() => navigate(`/eventdetails/${event.id}`)}
                >
                  {event.join ? "Joined" : "Join"}
                </Button>
              </div>
            }
            bodyStyle={{ padding: "16px" }}
          >
            <h3 style={{ marginBottom: "8px" }}>{event.eventname}</h3>
            <Text type="secondary">{event.subtitle}</Text>
            <div style={{ margin: "8px 0", fontSize: "12px" }}>
              <CalendarOutlined style={{ marginRight: "4px" }} />
              {event.startdatetime} &nbsp;&nbsp;
              <ClockCircleOutlined style={{ marginRight: "4px" }} />
              {event.enddatetime}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <Text>{event.entry || "Free"}</Text>
              <Text>{event.type || "Public"}</Text>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "8px",
                fontSize: "14px",
              }}
            >
              <TeamOutlined style={{ marginRight: "4px" }} />
              <Text>
                {event.peopleJoined} / {event.maxallowedparticipants}
              </Text>
            </div>
          </Card>
        ))}
      </Col>
    </div>
  );
};

export default RecentEvents2;
