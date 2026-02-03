export default function AgenciesWhytable() {
  return (
    <section className="sm:mt-12 mt-6">
      {/* Table wrapper for mobile scroll */}
      <div className="overflow-x-auto">
        <div className="min-w-[900px] overflow-hidden mx-auto">
          {/* Header */}
          <div className="grid grid-cols-[20%_28%_50%] gap-2.5">
            <div className="bg-[#1E1E1E] text-white font-bold px-6 py-4 text-lg md:text-xl text-center">
              Feature
            </div>
            <div className="bg-[#1C1C1C] text-white font-bold px-6 py-4 text-lg md:text-xl text-center">
              Traditional Agency
            </div>
            <div className="bg-[#2EC4F3] text-black font-bold px-6 py-4 text-lg md:text-xl text-center">
              Lemolite Technologies
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, index) => (
            <div key={index} className="grid grid-cols-[20%_28%_50%] gap-2.5 ">
              {/* Feature */}
              <div className="px-6 py-4 font-semibold text-center text-lg text-black my-1 bg-white border border-black">
                {row.feature}
              </div>

              {/* Traditional */}
              <div className="px-6 py-4 text-center bg-white my-1 text-lg text-black border border-black">
                {row.traditional}
              </div>

              {/* Lemolite */}
              <div className="px-6 py-4 text-center bg-[#E0F8FF] my-1 text-lg text-black border border-black">
                {row.lemolite}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const rows = [
  {
    feature: "Payment",
    traditional: "100% Cash Upfront",
    lemolite: "Flexible cash and equity aligned to growth",
  },
  {
    feature: "Involvement",
    traditional: "Just Execution",
    lemolite: "Mentorship, strategy, and long-term alignment",
  },
  {
    feature: "Leadership",
    traditional: "Project Manager",
    lemolite: "Fractional CTO driving scalable architecture",
  },
  {
    feature: "Legal Support",
    traditional: "Not Included",
    lemolite: "Dedicated in-house legal protection from day one",
  },
  {
    feature: "Post-Launch Support",
    traditional: "Hourly Billing",
    lemolite: "Ongoing partnership focused on growth outcomes",
  },
  {
    feature: "MVP Delivery",
    traditional: "Standard Timelines",
    lemolite: "Fast-tracked, scalability-first MVP execution",
  },
];
