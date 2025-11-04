function page({ params }) {
  const { slug } = params;
  return <p>Post: {slug}</p>;
}

export default page;
