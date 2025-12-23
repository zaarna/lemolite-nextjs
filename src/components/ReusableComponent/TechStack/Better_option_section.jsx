import Better_option from "../Card/Better_option";
import Titlecontent from "../Titlecontent/Titlecontent";

function Better_option_section({
  bg = "bg-white",
  padding = "top-bottom",
  title,
  content,
  data,
}) {
  return (
    <section className={`${bg} ${padding}`}>
      <div className="container">
        <div className="title--head text-center sm:pb-10 pb-5 md:px-16 px-5">
          <Titlecontent title={title} content={content} />
        </div>
        <Better_option data={data} />
      </div>
    </section>
  );
}

export default Better_option_section;
