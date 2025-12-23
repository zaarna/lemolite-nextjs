import Titlecontent from "./ReusableComponent/Titlecontent/Titlecontent";

export default function ReinventWheelSection({
  title = "We Don't Reinvent the Wheel",

  subtitle = "We respect and reuse what's already working.",

  description = "If you're already aligned with standards like ISO 27001, ISO 15288, or complying with regulations like CRA, RED DA, or NIS 2, we won't ask you to start over. Instead, we refine and extend your existing documentation, processes, and controls to map seamlessly to IEC 62443 requirements.",

  sectionTitle = "This means:",

  listItems = [
    "No duplicated effort",

    "Aligned and optimized documentation",

    "Efficient compliance without extra burden",
  ],

  additionalText = "Our goal is to integrate, not duplicate—so your teams can focus on building great products, not rewriting processes.",

  image = "/weiec.webp",

  alt = "IEC 62443 Alignment",

  badgeText = "IEC 62443 Alignment",
}) {
  return (
    <section className="top-bottom">
      <div className="container">
        <div className="dream-application">
          {/* Header Section */}
          <div className="mb-8">
            <div className="title--head md:pb-0 text-left">
              <Titlecontent title={title} content="" />
            </div>
            <p className="text-lg mt-4 text-gray-700 font-medium">{subtitle}</p>
          </div>

          {/* Main Content Section */}
          <div className="content-sec flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="lg:w-3/5">
              {/* Description */}
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                {description}
              </p>

              {/* Section Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {sectionTitle}
              </h3>

              {/* List with Gradient Bullets */}
              <ul className="list-none space-y-3 mb-6">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-4 h-4 rounded-full mt-1"
                      style={{
                        background:
                          "linear-gradient(135deg, #4ade80 0%, #86efac 100%)",

                        boxShadow: "0 2px 8px rgba(74, 222, 128, 0.3)",
                      }}
                    ></span>
                    <span className="text-base text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Additional Text */}

              {additionalText && (
                <p className="text-base text-gray-700 leading-relaxed">
                  {additionalText}
                </p>
              )}
            </div>

            {/* Right Image */}
            <div className="lg:w-2/5 w-full flex justify-center items-center relative">
              {/* Badge */}
              <figure className="w-full flex justify-center">
                <img
                  src={image}
                  alt={alt}
                  className="h-auto w-full max-w-md object-contain"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
