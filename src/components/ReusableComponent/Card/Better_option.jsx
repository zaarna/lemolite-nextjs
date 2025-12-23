import Image from "next/image";

function Better_option({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-[#F5F5F5] rounded-[20px] md:rounded-[30px] p-3 md:p-6 h-full"
        >
          <div className="flex items-center justify-between mb-1">
            <figure className="w-1/5 md:w-1/4">
              <Image
                src={item.img}
                alt={`Image for ${item.title}`}
                // className="w-20"
                width={80}
                height={20}
              />
            </figure>
            <h3 className="w-4/5 md:w-3/4 text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] 2xl:text-[28px] leading-[1.2] font-medium mr-2">
              {item.title}
            </h3>
          </div>
          <p className="text-[16px] md:text-[20px] font-light">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Better_option;
