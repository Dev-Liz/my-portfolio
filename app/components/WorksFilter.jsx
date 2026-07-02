import { worksFilter } from "../data/data";

const WorksFilter = () => {
  return (
    <div
      className="flex items-center justify-center space-x-6  w-full lg:w-[30%] 
    lg:justify-between lg:space-x-0"
    >
      {worksFilter.map((filter) => (
        <div
          className="text-body-20 font-kumbhsans font-medium hover:text-primary"
          key={filter}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};

export default WorksFilter;
