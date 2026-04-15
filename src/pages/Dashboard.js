import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/dashboard", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setMessage(res.data.message);
      } catch (err) {
        setMessage("Unauthorized");
      }
    };

    fetchData();
  }, []);

  return <h2>{message}</h2>;
}