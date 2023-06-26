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
        .map((ping) => (
          <PingComponent
            key={ping.id}
            id={ping.id}
            message={ping.message}
            timestamp={ping.date}
            pings={pings}
            setPings={setPings}
          />
        ))
    );

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-slate-200 pt-16">
      <h1 className="text-4xl bold">Pings</h1>
      <div className="w-3/4 my-8">
        <AddPingComponent pings={pings} setPings={setPings} />
        <div className="flex flex-col justify-start items-center gap-2 mt-8">
          {displayPings}
        </div>
      </div>
    </div>
  );
};

export default PingPage;
