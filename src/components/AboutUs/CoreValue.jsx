import Titlecontent from "../ReusableComponent/Titlecontent/Titlecontent";

const imageData = [
  {
    light: "/storyimage1.webp",
    alt: "Innovation",
    icon: "storyicon1.svg",
    text: "Innovation",
  },
  {
    light: "/storyimage2.webp",
    alt: "Integrity",
    icon: "storyicon2.svg",
    text: "Integrity",
  },
  {
    light: "/storyimage3.webp",
    alt: "Customer Focus",
    icon: "storyicon3.svg",
    text: "Customer-Centricity",
  },
  {
    light: "/storyimage4.webp",
    alt: "Collaboration",
    icon: "storyicon4.svg",
    text: "Collaboration",
  },
];

function Corevalue() {
  return (
    <section className="top-bottom">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          {/* Left Section */}
          <div className="title--head w-full md:w-3/5 pr-0 pb-7 md:pb-0 md:pr-14">
            <Titlecontent
              title={"Core Values"}
              content={
                " Our values are the foundation of who we are and how we work. They shape the way we approach challenges, build partnerships, and deliver solutions. We focus on staying creative, being honest and trustworthy, putting our clients’ needs first, and working as a team. These principles motivate us to achieve excellence and help our clients succeed."
              }
            />
          </div>

          <div className="w-full md:w-2/5">
            <div className="grid gap-6 grid-cols-2 md:grid-cols-2">
              {imageData.map((item, index) => (
                <div
                  key={index}
                  className={`main-core border-custom relative rounded-3xl group`}
                >
                  <div className="before:absolute before:inset-0 before:bg-gradient-to-tl before:from-secondry before:to-primary before:rounded-2xl before:transition-all before:duration-500 before:ease-in-out before:opacity-0 group-hover:before:opacity-100">
                    <img
                      src={item.light}
                      alt={item.alt}
                      className="grayscale object-cover w-full h-full"
                    />
                  </div>
                  <div className="core-icon absolute top-[5%] left-[5%]  rounded-2xl w-[60px] h-[60px] flex items-center justify-center flex-wrap">
                    <img src={item.icon} alt={item.icon} className="w-12" />
                  </div>
                  <div className="absolute bottom-[8%] left-[8%] font-extrabold text-xl">
                    <h3>{item.text}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Corevalue;
