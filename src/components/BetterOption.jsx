'use client';
import Image from 'next/image';
import Titlecontent from '@/components/ReusableComponent/Titlecontent/Titlecontent';



export default function BetterOption() {
  const data = [
    {
      img: "/voice01.svg",
      title: 'Cost Efficiency',
      description:
        'Save resources with AI-powered voicebots that automate tasks, reduce operational costs, and provide scalable solutions without fixed overhead expenses.',
    },
    {
      img: "/voice02.svg",
      title: 'Always Accessible',
      description:
        'Deliver 24/7 customer support, personalized interactions, and seamless communication across multiple platforms, ensuring a superior user experience.',
    },
    {
      img: "/voice03.svg",
      title: 'Boosted Efficiency and Productivity',
      description:
        'Increase efficiency by handling multiple queries at once, freeing agents to focus on complex tasks, and reducing employee stress with automated workflows.',
    },
    {
      img: "/voice04.svg",
      title: 'Personalized Communication',
      description:
        'Provide tailored experiences with multilingual support, proactive outreach, and responses that adapt to user behavior and preferences.',
    },
    {
      img: "/voice05.svg",
      title: 'Seamless Integration',
      description:
        'Easily integrate voicebots into your existing systems to enhance customer experience, streamline operations, and boost team productivity.',
    },
    {
      img: "/voice06.svg",
      title: 'Lower Labor Costs',
      description:
        'Cut labor costs by automating repetitive tasks, reducing the need for hiring and training, and enabling staff to focus on strategic goals.',
    },
  ];

  return (
    <section className="better-option w-full top-bottom bg-[#F1F1F1]">
      {/* Section Title */}
      <div className="text-center pb-10 md:pb-8">
        <Titlecontent title="Why Voicebots are the Future of Customer Service" />
      </div>

      {/* Cards Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="column flex flex-col py-5 px-4 rounded-3xl text-left bg-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-row justify-between items-center mb-3">
                <h3 className="w-3/4 text-[20px] sm:text-[24px] font-semibold leading-tight">
                  {item.title}
                </h3>
                <div className="w-1/4 flex justify-end">
                  <Image
                    src={item.img}
                    alt={`Icon for ${item.title}`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>

              <p className="text-[16px] md:text-lg font-light text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
