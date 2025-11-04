"use client";
import CareerBanner from "@/components/ReusableComponent/CarrerBanner";
import SectionBlock from "@/components/ReusableComponent/SectionBlock";
import { bde } from "@/data/breadcrumsdata";
import { feaureofbde } from "@/data/home";
import React, { useRef } from "react";

function Bde() {
  const footerRef = useRef(null); // Create a reference for the footer

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
  };
  return (
    <div>
      <CareerBanner
        breddata={bde}
        title={"Business Development Executive"}
        btntext={"Apply"}
        onclick={scrollToFooter}
        stats={feaureofbde}
      />
      <section className="career-inner">
        <div className="container">
          <SectionBlock
            title="Job Overview"
            content="The Business Development Executive (BDE) is responsible for driving business growth by identifying new sales opportunities, nurturing client relationships, and increasing the company’s market presence. The role involves prospecting, lead generation, and closing sales deals, while working closely with the marketing and product teams to deliver solutions that meet client needs."
          />

          <SectionBlock
            title="Responsibilities"
            list={[
              {
                text: "Identify and generate new business opportunities through cold calling, networking, and research.",
              },
              {
                text: "Qualify leads and manage the sales pipeline to ensure a steady flow of prospects.",
              },
              {
                text: "Meet or exceed sales targets and key performance indicators (KPIs).",
              },
              {
                text: "Build and maintain strong relationships with clients and key stakeholders.",
              },
              {
                text: "Present and demonstrate products/services to potential clients effectively.",
              },
              {
                text: "Prepare and negotiate proposals and contracts to close deals.",
              },
              {
                text: "Work closely with internal teams to ensure successful project delivery and customer satisfaction.",
              },
              {
                text: "Monitor market trends and competitor activities to identify potential opportunities.",
              },
              {
                text: "Provide post-sales support to ensure customer retention and satisfaction.",
              },
            ]}
          />

          <SectionBlock
            title="Requirements"
            list={[
              "Proven experience in sales or business development.",
              "Excellent communication and interpersonal skills.",
              "Strong negotiation and presentation skills.",
              "Ability to work independently and as part of a team.",
              "Problem-solving mindset with a customer-centric approach.",
              "Familiarity with CRM software and sales tools.",
              "Bachelor’s degree in Business, Marketing, or related field.",
              "Experience in IT (preferred).",
            ]}
          />

          <SectionBlock
            title="Preferred Skills"
            list={[
              "Experience in B2B and B2C sales processes.",
              "Understanding of digital marketing and lead generation techniques.",
              "Ability to analyze sales data and market trends to optimize strategies.",
              "Familiarity with proposal writing and contract negotiations.",
            ]}
          />

          <SectionBlock
            title="Company Overview"
            content="At Lemolite Technologies LLP, we're committed to delivering innovative tech solutions and exceptional service to our clients. Our dedication to excellence propels us to push the boundaries of AI/ML and digital transformation."
          />

          <SectionBlock
            title="Benefits"
            list={[
              "Competitive salary based on experience and skills.",
              "Opportunities for professional growth and career advancement.",
              "Flexible work hours and remote work options (if required).",
              "Collaborative and supportive work environment fostering innovation and creativity.",
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default Bde;
