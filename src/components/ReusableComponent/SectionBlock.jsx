function SectionBlock({ title, content, list }) {
  return (
    <div className="border-custom p-4 md:p-6 my-5 sm:my-10">
      <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-bold">
        {title}
      </h3>

      {content && (
        <p className="pt-4 text-[16px] md:text-[20px] font-normal">{content}</p>
      )}

      {list && (
        <ul className="common-lists pt-4 text-[16px] md:text-[20px] font-normal">
          {list.map((item, index) => (
            <li key={index}>
              {typeof item === "string" ? (
                item
              ) : (
                <>
                  <span className="font-semibold">{item.label} </span>{" "}
                  {item.text}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SectionBlock;
