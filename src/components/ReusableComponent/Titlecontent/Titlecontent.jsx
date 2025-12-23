import React from 'react';
function Titlecontent({ title, content, textcolor = 'text-black', titleTag = 'h2', contentTag = 'p' }) {
  // Dynamic tag assignment
  const TitleTag = titleTag;
  const ContentTag = contentTag;
  return (
    <div className={`${textcolor}`}>
      <TitleTag className="font-bold text-[22px] md:text-[26px] lg:text-[30px] xl:text-[36px] 2xl:text-[40px]">{title}</TitleTag>
      <ContentTag className="font-normal text-base xl:text-[18px]">{content}</ContentTag>
    </div>
  );
}
export default Titlecontent;