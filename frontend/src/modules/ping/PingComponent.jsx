import { useState, useEffect } from "react";
import { PingService } from "./PingService";

const PingComponent = () => {
  const [pong, setPong] = useState("");

  useEffect(() => {
    const fetchPong = async () => {
      const res = await PingService.get();
      setPong(res.data.message);
    };

    fetchPong();
  }, []);

  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-bubble">Ping!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">{pong}</div>
      </div>
    </div>
  );
};

export default PingComponent;
