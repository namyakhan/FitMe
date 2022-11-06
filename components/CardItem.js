import { ArrowRightIcon } from "@heroicons/react/solid";

const CardItem = ({ url, title, desc, program, bgcolor, text }) => {
  return (
    <div
      className={`p-3 lg:p-6 w-[300px] lg:w-[300px] xl:w-[400px] bg-${bgcolor} rounded-lg box drop-shadow-md hover:drop-shadow-lg `}
    >
      <img
        src={url}
        alt="cardio"
        loading="lazy"
        className=" h-[70px] lg:h-[100px] mb-3  "
      />
      <h5 className={`text-${text}`}>{title}</h5>

      <p className={`text-${text} g:text-[16px]`}>{desc}</p>
      <button
        onClick={program}
        className={`inline-flex tracking-wide items-center text-sm   hover:bg-beige hover:text-purple hover:border-purple hover:border cursor-pointer`}
      >
        Learn More <ArrowRightIcon className="h-5 ml-2" />
      </button>
    </div>
  );
};

export default CardItem;
