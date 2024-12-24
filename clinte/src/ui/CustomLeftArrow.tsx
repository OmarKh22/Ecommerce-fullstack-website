import { HiArrowLeft } from "react-icons/hi";

const CustomLeftArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-5 m-auto h-10 w-10 flex items-center justify-center bg-lightText/80 rounded-full  border-gray-100 hover:bg-gray-950 hover:text-whiteText duration-200"
      aria-label="Next"
    >
      <HiArrowLeft className="text-base" />
    </button>
  );
};

export default CustomLeftArrow;