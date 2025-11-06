import SectionBlock from "@/components/ReusableComponent/SectionBlock";

function Opening({ params }) {
  const { id } = params;
  "id", id;
  return (
    <section className="career-inner">
      <div className="container">
        <SectionBlock
          title="Job Overview"
          content="We are looking for a highly motivated Lead GenFlutter Developereration to join our team for a minimum 1+ years experience. The ideal candidate will be responsible for generating qualified leads, managing outreach efforts, and supporting the sales team in driving business growth."
        />

        <SectionBlock
          title="Responsibilities"
          list={[
            {
              text: "Identify and research potential leads through various channels such as social media, email campaigns, databases, and cold calling.",
            },
            {
              text: "Qualify leads and pass them to the sales team with relevant details to improve conversion rates.",
            },
            {
              text: "Develop and implement lead generation strategies to meet sales targets effectively.",
            },
            {
              text: "Maintain accurate and up-to-date records in CRM systems to track leads and follow-ups.",
            },
            {
              text: "Work closely with the sales and marketing teams to align efforts and improve lead conversion.",
            },
            {
              text: "Monitor, track, and report on lead generation KPIs to measure success and identify areas for improvement.",
            },
            {
              text: "Analyze lead generation processes and suggest improvements for better efficiency and effectiveness.",
            },
          ]}
        />

        <SectionBlock
          title="Requirements"
          list={[
            "Proven experience in lead generation, sales support, or a similar role.",
            "Strong communication skills, both written and verbal.",
            "Experience with CRM software such as Salesforce or HubSpot.",
            "Ability to work independently and collaboratively in a fast-paced environment.",
            "Excellent organizational and time-management skills.",
            "Attention to detail and a proactive approach to problem-solving.",
          ]}
        />

        <SectionBlock
          title="Preferred Skills"
          list={[
            "Experience in B2B or B2C lead generation processes.",
            "Familiarity with digital marketing strategies and tools.",
            "Knowledge of sales funnels and conversion optimization.",
            "Understanding of data analytics and reporting for lead tracking.",
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
  );
}

export default Opening;
