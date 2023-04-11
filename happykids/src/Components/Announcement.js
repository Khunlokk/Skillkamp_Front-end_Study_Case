import React, { useState, useEffect } from "react";
import "./Announcement.css";

const Announcement = () => {
  const [announcement, setAnnouncement] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  // Array of messages
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const messages = [
    "Get 10% Off - Use Coupon Code HAPPY123",
    "Free Shipping Over $50",
  ];

  useEffect(() => {
    // Function to update announcement text with new message
    const updateAnnouncement = () => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    };

    // Start the timer to update announcement text every 3 seconds
    const timerId = setInterval(updateAnnouncement, 3000);

    // Cleanup the timer on component unmount
    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    // Update announcement text based on current message index
    setAnnouncement(messages[messageIndex]);
  }, [messageIndex, messages]);

  return <div className="Announcement">{announcement}</div>;
};

export default Announcement;
