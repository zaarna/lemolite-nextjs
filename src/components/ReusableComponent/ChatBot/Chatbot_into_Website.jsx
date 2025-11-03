import React from "react";
import Titlecontent from "../Titlecontent/Titlecontent";

function Chatbot_into_Website() {
  return (
    <div className="chatbot-into-website mx-auto top-bottom">
      <div className="content-sec flex ">
        <div className="container">
          <div className="flex lg:flex-row flex-col items-center justify-between">
            <div className=" lg:w-2/5 ">
              <img
                src={"/robot-chatbot.webp"}
                alt="Why Chatbot Integration"
                className="w-[90%] m-auto"
              />
            </div>
            <div className=" lg:w-3/5 items-left rounded-3xl text-left lg:pl-7">
              <div className="title--head ">
                <Titlecontent title="Why Integrate a Chatbot into Your Website?" />
                <p className="py-2">
                  Our chatbot development services introduce a virtual assistant
                  uniquely crafted for your business needs. By transitioning
                  from manual to automated support and establishing a tailored
                  communication channel, we create a smoother user experience
                  while driving meaningful business outcomes.
                </p>
                <p className="py-2">
                  With our expertise, we can help you redesign workflows,
                  enhance operational efficiency, and improve customer
                  experiences. By leveraging our solutions, you can gain a
                  competitive edge and achieve your business objectives.
                </p>

                <div className="lg:px-8 pt-2 md:pt-5 ">
                  <ul className="list-none listing-image flex flex-wrap justify-between text-[16px] md:text-[20px] font-light content-start pl-10 lg:pl-0">
                    <li>Automated Customer Support</li>
                    <li>Appointment Scheduling</li>
                    <li>Order Tracking </li>
                    <li>Lead Generation</li>
                    <li>FAQ Assistance </li>
                    <li>Feedback Collection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot_into_Website;
