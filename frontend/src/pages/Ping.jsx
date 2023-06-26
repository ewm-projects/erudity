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
      const { total, pages, pings } = await PingService.get(page, LIMIT);
      setPings(pings);
      setPageCount(pages);
      setTotalCount(total);
    };

    fetchPong();
  }, [page]);

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
    console.log("page", page);
    console.log("start", Math.max(Math.ceil(page - 1 * LIMIT), 1));
    console.log("lower", Math.ceil(page - 1 * LIMIT));
  };

  const onClickNextPageHandler = () => {
    setPage((p) => {
      if (p == pageCount) return p;
      return p + 1;
    });
    console.log("page", page);
    console.log("start", Math.max(Math.ceil(page - 1 * LIMIT), 1));
    console.log("lower", Math.ceil(page - 1 * LIMIT));
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-slate-200 pt-16">
      <h1 className="text-4xl bold">Pings</h1>
      <div className="w-3/4 my-8">
        <AddPingComponent pings={pings} setPings={setPings} />
        <div className="flex flex-col justify-start items-center gap-2 mt-8">
          {displayPings}
          <p className="self-end">
            Showing {page * LIMIT - LIMIT + 1}-
            {totalCount > page * LIMIT ? page * LIMIT : totalCount} out of{" "}
            {totalCount}
          </p>
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
