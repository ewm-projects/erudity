import { useEffect, useState } from "react";
import ResourceComponent from "../modules/resources/ResourceComponent";
import { ResourceService } from "../modules/resources/ResourceService";
import { Helper } from "../utils/helper";
import Paginate from "../components/Paginate";

const LandingPage = () => {
  const [resources, setResources] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const LIMIT = 5;

  useEffect(() => {
    const fetchResources = async () => {
      const { count, pages, results } = await ResourceService.get(page, LIMIT);
      setResources(results);
      setPageCount(pages);
      setTotalCount(count);
    };

    fetchResources();
  }, [resources, page]);

  const displayResources =
    resources.length == 0 ? (
      <p>No resources available</p>
    ) : (
      resources
        .sort((first, next) => next.updatedAt - first.updatedAt)
        .map((resource) => (
          <ResourceComponent
            key={resource.id}
            desc={resource.description}
            creator={resource.creators[0]}
            updatedAt={resource.updatedAt}
            ratings={resource.totalRatings}
            avgRating={resource.avgRating}
            format={resource.format}
            tags={resource.tags}
          />
        ))
    );

  return (
    <div className="w-full flex flex-col justify-start items-center mt-0 mb-4 md:mt-4">
      <div className="flex flex-col w-full mx-2 md:w-3/4 md:mx-0 xl:w-1/2">
        {displayResources}
        <p className="self-end px-2">
          {Helper.currentPaginatedItems(page, LIMIT, totalCount)}
        </p>
        <Paginate page={page} setPage={setPage} pageCount={pageCount} />
      </div>
    </div>
  );
};

export default LandingPage;
