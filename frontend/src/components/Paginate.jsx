const Paginate = ({ page, setPage, pageCount }) => {
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

  return (
    <div className="flex justify-center items-center gap-4 mt-2 md:mt-8">
      <button
        disabled={page === 1}
        onClick={onClickPreviousPageHandler}
        className="btn"
      >
        Prev
      </button>
      <button
        disabled={page === pageCount}
        onClick={onClickNextPageHandler}
        className="btn"
      >
        Next
      </button>
    </div>
  );
};

export default Paginate;
