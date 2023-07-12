import { TextHelper } from "../../utils/textHelper";
import { TimeHelper } from "../../utils/timeHelper";

const ResourceComponent = ({
  desc,
  creator,
  updatedAt,
  ratings,
  avgRating,
  format,
  tags,
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-y-2 p-4 border border-slate-200">
      <div>
        <h1 className="text-lg text-ellipsis font-semibold">{desc}</h1>
        <p className="text-sm md:text-xs">
          by {creator} • Last Updated {TimeHelper.displayDate(updatedAt)} •{" "}
          {TextHelper.uppercaseFirst(format)}
        </p>
      </div>
      <div className="flex flex-col justify-start items-start gap-y-2 text-sm md:flex-row md:justify-between md:items-center md:gap-x-4 md:text-xs md:w-full">
        <div>
          <p>
            {Number(avgRating).toFixed(2)} avg rating • {ratings} ratings
          </p>
        </div>
        <div className="flex gap-x-2">
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-outline text-xs">
              {TextHelper.uppercaseFirst(tag)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceComponent;
