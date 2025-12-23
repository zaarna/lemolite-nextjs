import React from "react";

function WhyLemolite() {
  return (
    <section className="why-lemolite bg-gradient-to-r from-[#2EC4F3]/30 to-[#BFD633]/30 top-bottom">
      <div className="container">
        <div className="why-lemo flex md:flex-row sm:flex-col bg-white rounded-[32px] p-8">
          <div className="main-lemo-sec sm:w-full md:w-2/4 title md:justify-center md:items-center md:content-center md:text-left sm:text-center">
            <h2>Why Lemolite</h2>
            <p>
              We offer an environment where your career can flourish. Here’s
              what you can expect when you join us:
            </p>
          </div>
          <div className="sm:w-full md:w-2/4 content sm:pt-8 md:pt-0">
            <div>
              <div className='flex py-4 items-center relative before:absolute before:content-[" "] before:bg-gradient-to-r from-[#2EC4F3] to-[#BFD633] before:w-full before:h-[2px] before:bottom-0'>
                <div className="image-list">
                  <img src="/doller.webp" alt="" className="w-[70px]" />
                </div>
                <h3 className="ml-4">Competitive Salary</h3>
              </div>
              <div className='flex py-4 items-center relative before:absolute  before:content-[" "] before:bg-gradient-to-r from-primary to-secondry before:w-full before:h-[2px] before:bottom-0'>
                <div className="image-list">
                  {" "}
                  <img src="tag.webp" alt="" className="w-[70px]" />
                </div>
                <h3 className="ml-4">Professional Development Opportunities</h3>
              </div>
              <div className='flex py-4 items-center relative before:absolute  before:content-[" "] before:bg-gradient-to-r from-primary to-secondry before:w-full before:h-[2px] before:bottom-0'>
                <div className="image-list">
                  <img src="puzzle.webp" alt="" className="w-[70px]" />
                </div>
                <h3 className="ml-4">Team Building Activities </h3>
              </div>
              <div className='flex py-4 items-center relative before:absolute  before:content-[" "] before:bg-gradient-to-r from-primary to-secondry before:w-full before:h-[2px] before:bottom-0'>
                <div className="image-list">
                  {" "}
                  <img src="star.webp" alt="" className="w-[70px]" />
                </div>
                <h3 className="ml-4">Recognition and Rewards</h3>
              </div>
              <div className="flex py-4 items-center ">
                <div className="image-list">
                  {" "}
                  <img src="WFH.webp" alt="" className="w-[70px]" />
                </div>
                <h3 className="ml-4">Work from Home ( if required )</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyLemolite;
