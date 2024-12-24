import { Link } from "react-router-dom";
import Container from "./Container"
import Title from "./Title"
import { brandFive, brandFour, brandOne, brandSix, brandThree, brandTwo, discountImgOne, discountImgTwo } from "../assets";


const DiscountedBanner = () => {
    const popularSearchItem = [
        {title: "Smart Watches", link:"smartwatches"},
        {title: "Headphone", link:"headphones"},
        {title: "Cameras", link:"camerasAndPhotos"},
        {title: " Audio", link:"tvAndAudio"},
        {title: "Laptop & Computers", link:"computersAndLaptop"},
        {title: "Sell Phone", link:"sellphones"},
    ];
  return (
    <Container>
        <div>
            <Title text="Popular Search" />
            <div className="w-full h-[1px] bg-lightText mt-3" />
        </div>
        <div className="my-7 flex items-center flex-wrap gap-4">
            {popularSearchItem.map(({title,link})=>(
                <Link key={title} to={`/category/${link}`} className="border border-[1px] border-[#908c9266] px-8 py-3 rounded-full capitalize font-normal hover:bg-darkText hover:text-whiteText duration-300 ">
                    {title}
                </Link>
            ))}
        </div>
        <div className="w-full py-5 md:py-0 my-12 bg-[#f6f6f6] rounded-lg flex items-center justify-between overflow-hidden">
            <img src={discountImgOne} alt="disconted image" className="hidden lg:inline-flex h-36"/>
            <div className="flex flex-col text-center flex-1 gap-2">
                <div className="flex items-center justify-center gap-x-3 text-xl md:text-4xl font-bold">
                    <h2>Sony Headphone</h2>
                    <Link to="/product" className="border border-[#b94545] px-4 py-2 text-xl md:text-3xl text-[#f65050] rounded-full font-bold ">Discount 20%</Link>
                </div>
                <p className="text-sm text-[#696769] font-medium">You are out to play or stepping out to make</p>
            </div>
            <div>
                <img src={discountImgTwo} alt="disconted image two" className="hidden lg:inline-flex h-36" />
            </div>
        </div>
        <div className="mt-7">
            <p className="font-bold text-2xl">Brands we distripute</p>
            <div className="mt-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                <div className="border border-r-0 border-[#dac9daf7] flex items-center justify-center px-6 py-2 cursor-pointer group">
                    <img src={brandOne} alt="brand one" className="w-36 h-auto group-hover:opacity-50 duration-200"/>
                </div>
                 <div className="border border-r-0 border-[#dac9daf7] flex items-center justify-center px-6 py-2 cursor-pointer group">
                    <img src={brandTwo} alt="brand 2" className="w-36 h-auto group-hover:opacity-50 duration-200"/>
                </div> <div className="border border-r-0 border-[#dac9daf7] flex items-center justify-center px-6 py-2 cursor-pointer group">
                    <img src={brandThree} alt="brand 3" className="w-36 h-auto group-hover:opacity-50 duration-200"/>
                </div> <div className="border border-r-0 border-[#dac9daf7] flex items-center justify-center px-6 py-2 cursor-pointer group">
                    <img src={brandFour} alt="brand 4" className="w-36 h-auto group-hover:opacity-50 duration-200"/>
                </div> <div className="border border-r-0 border-[#dac9daf7] flex items-center justify-center px-6 py-2 cursor-pointer group">
                    <img src={brandFive} alt="brand 5" className="w-36 h-auto group-hover:opacity-50 duration-200"/>
                </div> <div className="border border-[#dac9daf7] flex items-center justify-center px-6 py-2 cursor-pointer group">
                    <img src={brandSix} alt="brand 6" className="w-36 h-auto group-hover:opacity-50 duration-200"/>
                </div>
            </div>
            
        </div>
    </Container>
  )
}

export default DiscountedBanner