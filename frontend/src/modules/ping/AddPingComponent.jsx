import { useRef } from "react";
import { PingService } from "./PingService";

const AddPingComponent = ({ pings, setPings }) => {
  const messageRef = useRef(null);

  const onSubmitPingHandler = async (event) => {
    event.preventDefault();
    try {
      if (messageRef.current) {
        const newPing = {
          message: messageRef.current.value,
        };

        const savedPing = await PingService.add(newPing);
        setPings(pings.concat(savedPing.data));
        console.log("saved ping", savedPing);
        console.log("pings", pings);
      }
    } catch (e) {
      console.error("Error in AddPingComponent");
      throw e;
    }
  };

  return (
    <form onSubmit={onSubmitPingHandler} className="flex gap-x-2 my-2 mr-2">
      <input
        type="text"
        placeholder="Type here"
        ref={messageRef}
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn">submit</button>
    </form>
  );
};

export default AddPingComponent;
