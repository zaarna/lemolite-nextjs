import FunFactCard from "../FunFactCard/FunFactCard";

const FunFactTecjstack = ({ stats, width }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center ">
        {stats.map((stat, index) => (
          <FunFactCard
            key={index}
            value={stat.value}
            label={stat.label}
            bgColor={stat.bgColor}
            collumWidth={width}
          />
        ))}
      </div>
    </div>
  );
};

export default FunFactTecjstack;
