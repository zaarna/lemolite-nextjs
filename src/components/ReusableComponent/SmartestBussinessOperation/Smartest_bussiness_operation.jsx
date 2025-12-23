import Titlecontent from "../Titlecontent/Titlecontent";

const solutions = [
  {
    title: "Smart Resource and Workflow Management",
    description:
      "Manage your organization’s operations more effectively with custom software that provides real-time insights into resources, optimizes workflows, and enhances collaboration. Everything you need is accessible from a single, easy-to-use platform.",
  },
  {
    title: "Personalized Customer Engagement Tools",
    description:
      "Build stronger customer relationships with our tailored CRM systems and engagement tools. These solutions help you understand customer behavior, personalize interactions, and foster long-term loyalty and business growth.",
  },
  {
    title: "Efficient Supply Chain Solutions",
    description:
      "Streamline your supply chain operations with software that automates inventory management, improves logistics tracking, and reduces costs. Enjoy greater visibility and smoother workflows across your entire supply chain.",
  },
  {
    title: "Simplified Finance and Accounting Systems",
    description:
      "Take the complexity out of financial management with software that automates bookkeeping, generates detailed reports, and provides actionable insights. Make smarter decisions to enhance your business’s financial health.",
  },
  {
    title: "Productivity and Collaboration Platforms",
    description:
      "Unlock your team’s full potential with software designed to centralize knowledge, track projects, and enhance collaboration. These tools help streamline communication and boost productivity to meet your business objectives.",
  },
  {
    title: "Advanced Business Analytics Tools",
    description:
      "Leverage the power of data with analytics software that tracks key metrics, visualizes trends, and highlights opportunities for growth. Make informed decisions to drive success with confidence.",
  },
  {
    title: "Seamless IoT Integration Systems",
    description:
      "Connect your devices and systems effortlessly with IoT-enabled software. Automate processes, improve data flow, and enhance team collaboration to create a smarter, more connected business environment.",
  },
  {
    title: "Comprehensive Security and Emergency Tools",
    description:
      "Safeguard your business with advanced software for real-time monitoring, risk mitigation, and incident response. Ensure the safety of your assets, employees, and operations with robust emergency management systems.",
  },
  {
    title: "Immersive AR and VR Experiences",
    description:
      "Captivate your audience with innovative AR and VR solutions. From training simulations to product demonstrations, these tools create memorable, interactive experiences that set your business apart.",
  },
  {
    title: "Smart and Reliable POS Solutions",
    description:
      "Simplify your sales and customer transactions with user-friendly POS systems. Manage inventory, process payments efficiently, and deliver exceptional customer experiences with custom-built solutions.",
  },
];

function Smartest_bussiness_operation() {
  return (
    <section className="bg-[#F1F1F1] top-bottom">
      <div className="container">
        <div className="smart-business-operation">
          <div className="title--head md:pb-10 sm:pb-6 pb-5 text-center">
            <Titlecontent
              title="Smart Software for Smarter Business Operations"
              content={
                "Our innovative custom software development services are tailored to meet your unique business requirements. With a focus on seamless integration, user-friendly interfaces, and measurable results, our custom software development services empower your business to stay ahead in today's competitive world."
              }
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {solutions.map((solution, index) => (
              <div key={index} className="h-full">
                <div className="h-full side-cards bg-[#FFFFFF] rounded-3xl p-5 md:p-8 hover:bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30">
                  <h3 className="text-lg md:text-2xl mb-2 font-bold">
                    {solution.title}
                  </h3>
                  <p className="text-base md:text-lg">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Smartest_bussiness_operation;
