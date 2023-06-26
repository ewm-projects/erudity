import { useRef, useState } from "react";
import { PingService } from "./PingService";
import { TimeHelper } from "../../utils/timeHelper";

const AddPingComponent = ({ pings, setPings }) => {
  const [pong, setPong ] = useState("")
  const messageRef = useRef(null);

  const onSubmitPingHandler = async (event) => {
    event.preventDefault();
    try {
      if (messageRef.current.value) {
        setPong('')
        const newPing = {
          message: messageRef.current.value,
        };

        const savedPing = await PingService.add(newPing);
        setPings(pings.concat(savedPing.data));
        setPong(TimeHelper.utcTimeNow())
        messageRef.current.value = ""
        setTimeout(() => setPong(''), 5000)
      }
    } catch (e) {
      console.error("Error in AddPingComponent");
      throw e;
    }
  };

  return (
    <div className="w-full mt-6 flex flex-col justify-start items-center">
      <div className="flex flex-col justify-center items-start">
        <form onSubmit={onSubmitPingHandler} className="w-full flex justify-start gap-x-2">
          <input
            type="text"
            placeholder="Enter any message"
            ref={messageRef}
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn">submit</button>
        </form>
        <div className="mt-2">
          {pong && <p className="underline underline-offset-2 decoration-2">Pong! - {pong}</p>}
        </div>
      </div>
    </div>
  );
};

export default AddPingComponent;
