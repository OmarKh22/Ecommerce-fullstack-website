import { HiArrowRight } from "react-icons/hi";

const CustomRightArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-5 m-auto h-10 w-10 flex items-center justify-center bg-lightText/80 rounded-full border-gray-100 hover:bg-gray-950 hover:text-whiteText duration-200"
      aria-label="Next"
    >
      <HiArrowRight className="text-base" />
    </button>
  );
};

export default CustomRightArrow;