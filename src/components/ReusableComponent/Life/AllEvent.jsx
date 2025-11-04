"use client";
import React from "react";
import { useState, useEffect } from "react";
import { all, celebration, event, sport } from "@/data/imagesdata";
import EventGallery from "./EventGallery";
import Titlecontent from "../Titlecontent/Titlecontent";

const tabsData = [
  {
    id: "all",
    title: "All",
    content: (
      <EventGallery images={all} alt={"Festive Celebration at Lemolite"} />
    ),
  },
  {
    id: "Cultural Celebrations",
    title: "Cultural Celebrations",
    content: (
      <EventGallery
        images={celebration}
        alt={"Cultural Celebrations at Lemolite"}
      />
    ),
  },
  {
    id: "Sports",
    title: "Sports",
    content: (
      <EventGallery
        images={sport}
        alt={"Sports and outdoor activities at Lemolite"}
      />
    ),
  },
  {
    id: "Event",
    title: "Event",
    content: (
      <EventGallery
        images={event}
        alt={"Office Events and Fun activities at Lemolite"}
      />
    ),
  },
];

function AllEvent() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="top-bottom bg-[#f1f1f1]">
      <div className="container">
        <div className="title--head  md:pb-10 sm:pb-6 pb-5 text-center">
          <Titlecontent
            title={"Celebrating Every Moment at Lemolite"}
            content={
              "From vibrant events and festive celebrations to everyday moments of joy, life at Lemolite is all about energy, creativity, and connection. We believe in free expression, teamwork, and embracing new ideas. Our culture encourages collaboration, personal growth, and shared experiences, making every day meaningful, exciting, and rewarding—both professionally and personally."
            }
          />
        </div>

        <div className="">
          {/* Tabs for Desktop */}
          {!isMobile && (
            <div className="flex space-x-4">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  className={`gradient-event-btn text-center  ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>
          )}

          {/* Content for Desktop */}
          {!isMobile && (
            <div className="mt-4 ">
              {tabsData.find((tab) => tab.id === activeTab)?.content}
            </div>
          )}

          {/* Accordion for Mobile */}
          {isMobile && (
            <div className="space-y-2">
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  className={` w-full transition-all ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                >
                  <button
                    onClick={() =>
                      setActiveTab(activeTab === tab.id ? "" : tab.id)
                    }
                    className="w-full flex justify-between gradient-event-btn text-left"
                  >
                    <span>{tab.title}</span>
                    <span>{activeTab === tab.id ? "-" : "+"}</span>
                  </button>
                  {activeTab === tab.id && (
                    <div className="p-3 bg-white">{tab.content}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AllEvent;
