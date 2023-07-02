import { TimeHelper } from "../../utils/timeHelper";
import { PingService } from "./PingService";

const PingComponent = ({ id, message, timestamp, pings, setPings }) => {
  const onClickUpdateHandler = async () => {
    try {
      const newMessage = prompt(`Enter new ping message`);

      if (newMessage) {
        const currentPing = pings.find((ping) => ping.id == id);
        currentPing.message = newMessage;
        const res = await PingService.update(id, currentPing);
        const updatedPing = res.data;
        setPings(
          pings.map((ping) => (ping.id != updatedPing.id ? ping : updatedPing))
        );
      }
    } catch (e) {
      console.error("Error in ping update handler");
      throw e;
    }
  };

  const onClickDeleteHandler = async () => {
    if (confirm(`Delete ping?`)) {
      try {
        await PingService.remove(id);
        setPings(pings.filter((ping) => ping.id != id));
      } catch (e) {
        console.error("Error in ping delete handler");
        throw e;
      }
    }
  };

  return (
    <div className="w-full h-24 border-black border-b-2 flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <p>{message}</p>
        <p>{TimeHelper.toUTCTime(timestamp)}</p>
      </div>
      <div className="flex gap-2">
        <button className="btn" onClick={onClickUpdateHandler}>
          Update
        </button>
        <button className="btn" onClick={onClickDeleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PingComponent;
