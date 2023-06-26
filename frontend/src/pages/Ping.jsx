import { useState, useEffect } from "react";

import { PingService } from "../modules/ping/PingService";
import PingComponent from "../modules/ping/PingComponent";
import AddPingComponent from "../modules/ping/AddPingComponent";

const PingPage = () => {
  const [pings, setPings] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const LIMIT = 5;

  useEffect(() => {
    const fetchPong = async () => {
      const { count, pages, results } = await PingService.get(page, LIMIT);
      setPings(results);
      setPageCount(pages);
      setTotalCount(count);
    };

    fetchPong();
  }, [pings, page]);

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

  const onClickPreviousPageHandler = () => {
    setPage((p) => {
      if (p == 1) return p;
      return p - 1;
    });
  };

  const onClickNextPageHandler = () => {
    setPage((p) => {
      if (p == pageCount) return p;
      return p + 1;
    });
  };

  const currentPaginatedItems = () => {
    if (totalCount) {
      const start = (1 + page * LIMIT) - (LIMIT)
      const end = totalCount > page * LIMIT ? page * LIMIT : totalCount
      
      return `Showing ${start} - ${end} out of ${totalCount}`
    }

    return `Showing 0 - 0 out of 0`
  }
  
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-slate-200 pt-16">
      <h1 className="text-4xl bold">Pings</h1>
      <div className="w-3/4 my-8">
        <AddPingComponent pings={pings} setPings={setPings} />
        <div className="flex flex-col justify-start items-center gap-2 mt-8">
          {displayPings}
          <p className="self-end">{currentPaginatedItems()}</p>
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            disabled={page === 1}
            onClick={onClickPreviousPageHandler}
            className="btn"
          >
            Previous
          </button>
          <button
            disabled={page === pageCount}
            onClick={onClickNextPageHandler}
            className="btn"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PingPage;
