import { useState, useEffect } from "react";

import { PingService } from "../modules/ping/PingService";
import PingComponent from "../modules/ping/PingComponent";
import AddPingComponent from "../modules/ping/AddPingComponent";

const PingPage = () => {
  const [pings, setPings] = useState([]);

  useEffect(() => {
    const fetchPong = async () => {
      const res = await PingService.get();
      setPings(res.data);
    };

    fetchPong();
  }, []);

  const displayPings =
    pings.length == 0 ? (
      <p>No pings available</p>
    ) : (
      pings
        .sort((firstPing, nextPing) => nextPing.date - firstPing.date)
        .map((ping) => <PingComponent key={ping.id} message={ping.message} />)
    );

  return (
    <div className="w-[50%] flex flex-col justify-center content-center bg-slate-200 mt-10">
      <div className="border-2 mx-2">{displayPings}</div>
      <div className="w-[50%] self-end">
        <AddPingComponent pings={pings} setPings={setPings} />
      </div>
    </div>
  );
};

export default PingPage;
