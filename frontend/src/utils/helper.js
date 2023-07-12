const currentPaginatedItems = (page, limit, totalCount) => {
  if (totalCount) {
    const start = 1 + page * limit - limit;
    const end = totalCount > page * limit ? page * limit : totalCount;

    return `Showing ${start} - ${end} out of ${totalCount}`;
  }

  return `Showing 0 - 0 out of 0`;
};

export const Helper = {
  currentPaginatedItems,
};
