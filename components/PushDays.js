const PushDays = ({ url, title, desc }) => {
  return (
    <div className="container mx-auto max-w-sm  bg-white rounded-lg shadow-md p-5">
      <img src={url} alt="product image" className="lg:h-auto lg:w-auto" />

      <h3 className="text-purple  mb-2">{title}</h3>
      <p className="text-[14px] mb-0">{desc}</p>
    </div>
  );
};

export default PushDays;
