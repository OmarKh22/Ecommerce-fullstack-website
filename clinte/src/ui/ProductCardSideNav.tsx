
import { FaRegEye, FaRegStar } from 'react-icons/fa'
import { LuArrowLeftRight } from 'react-icons/lu'

const ProductCardSideNav = () => {
  return (
    <div className='absolute top-1 right-1 flex flex-col gap-1 transition translate-x-12 group-hover:translate-x-0'>
      <span className='w-10 h-10 text-[#000] inline-flex items-center justify-center rounded-full text-lg hover:text-whiteText hover:bg-darkText duration-200'><FaRegStar /></span>
      <span className='w-10 h-10 text-[#000] inline-flex items-center justify-center rounded-full text-lg hover:text-whiteText hover:bg-darkText duration-200'><LuArrowLeftRight /></span>
      <span className='w-10 h-10 text-[#000] inline-flex items-center justify-center rounded-full text-lg hover:text-whiteText hover:bg-darkText duration-200'><FaRegEye /></span>
    </div>
  )
}

export default ProductCardSideNav