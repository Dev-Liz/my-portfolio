import Badge from "./Badge";

const WorksFilter = ({ filter, setFilter }) => {
  const filterStatus = ["All", "Frontend", "Documentation"];
  return (
    <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0 md:space-x-3">
      {filterStatus.map((status) => (
        <Badge
          className="text-body-20 font-kumbhsans font-medium hover:text-primary"
          key={status}
          onClick={() => setFilter(status)}
          variant={filter === status ? "primary" : "secondary"}
        >
          {status}
        </Badge>
      ))}
    </div>
  );
};

export default WorksFilter;
