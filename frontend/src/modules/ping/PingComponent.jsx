const PingComponent = ({ message }) => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-bubble">Pong!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-accent">{message}</div>
      </div>
    </div>
  );
};

export default PingComponent;
