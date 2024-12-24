import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { config } from '../../../config';
import { CategoryProps, ProductProps } from '../../../type';
import { getData } from '../lib';
import Loading from '../ui/Loading';
import Container from '../ui/Container';
import PriceTag from '../ui/PriceTag';
import { MdOutlineStarOutline } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';
import FormattedPrice from '../ui/FormattedPrice';
import { IoClose } from 'react-icons/io5';
import AddToCartBtn from '../ui/AddToCartBtn';
import { productPayment } from '../assets';
import ProductCard from '../ui/ProductCard';
import CategoryFilters from '../ui/CategoryFilters';

const Product = () => {

  const [productData, setProductData] = useState<ProductProps | null>(null)
  const [allProducts, setAllProducts] = useState<ProductProps[]>([])
  const [loading, setLoading] = useState(false)
  const [imgURL, setImgURL] = useState("")
  const [color, setColor] = useState("")
  const {id} = useParams();
  const endpoint = id ? `${config?.baseUrl}/products/${id}` : `${config?.baseUrl}/products `


  useEffect(()=>{
    const fetchData =async ()=>{
      try {
        setLoading(true)
        const data = await getData(endpoint)
        if(id){
          setProductData(data)
          setAllProducts([])
        }else{
          setAllProducts(data)
          setProductData(null)
        }
      } catch (error) {
        console.error('Error', error)
      }finally{
        setLoading(false)
      }
    }
    fetchData()
  },[id,endpoint])

  useEffect(()=>{
    if(productData){
      setImgURL(productData?.images[0]);
      setColor(productData?.colors[0]);
    }
  }, [productData])


  

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {!!id && productData ? (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              <div className='flex flex-start'>
                <div className=''>
                  {productData.images.map((item, index)=>(
                    <img src={item} alt="img" key={index}
                    className={`w-24 cursor-pointer duration-200 opacity-80 hover:opacity-100
                    ${imgURL === item && 'border border-[#2a2b28c6] rounded-md opacity-100'}`}
                    onClick={()=>setImgURL(item)}
                    />
                  ))}
                </div>
                <div>
                  <img src={imgURL} alt="" />
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='font-bold text-3xl'>{productData.name}</h2>
                <div className='flex items-center justify-between'>
                  <PriceTag regularPrice={productData.regularPrice} discountedPrice={productData.discountedPrice} className='text-xl'/>
                  <div className="flex items-center gap-1">
                      <div className="text-base text-lightText flex items-center">
                        <MdOutlineStarOutline />
                        <MdOutlineStarOutline />
                        <MdOutlineStarOutline />
                        <MdOutlineStarOutline />
                        <MdOutlineStarOutline />
                      </div>
                      <p className="text-base font-semibold">{`(${productData?.reviews} reviews)`}</p>
                  </div>
                </div>
                <p className='flex items-center gap-2'>
                  <FaRegEye />
                  <span>{productData.reviews} people watching this product</span>
                </p>
                <p className='font-semibold' >You are going to save{" "}
                    <span className="text-[#43e270]">
                      <FormattedPrice
                        amount={productData?.regularPrice - productData?.discountedPrice}
                      />{" "}
                    </span>
                    from this product.
                </p>

                  {/* COLORS */}
                <div>
                  <p>Color : <span className='capitalize font-semibold'
                  style={{color:color}}
                  >{color}</span></p>
                </div>
                <div className='flex items-center gap-x-3'>
                  {productData.colors.map((item,index)=>(
                    <div key={index} className={`${item === color ? "border border-darkText p-1 rounded-full" : "border-transparent"}`}>
                      <div className='w-10 h-10 rounded-full cursor-pointer' style={{backgroundColor:item}} onClick={()=>setColor(item)}/>
                    </div>
                  ))}
                </div>
                {color && (<button onClick={()=>setColor("")} className='font-semibold mt-1 flex items-center gap-1 hover:text-redText duration-100'><IoClose />Clear</button>) }
                <div>
                  <p>
                    Brand:{" "}
                    <span className="font-medium">{productData?.brand}</span>
                  </p>
                  <p>
                    Category:{" "}
                    <span className="font-medium">{productData?.category}</span>
                  </p>
                </div>
                {/* ADD TO CART BTN */}
                <AddToCartBtn product={productData} title='Buy now' className='bg-[#313131f9] text-whiteText py-3 text-md hover:cursor-pointer scale-100'/>

                <div className='rounded-md p-5 flex flex-col items-center gap-3 bg-[#aabfc255]'>
                  <img className='w-auto object-cover' src={productPayment} alt="product payment" />
                  <p>Guaranteed safe & secure checkout</p>
                </div>
                </div>
              </div>
          ) : (
            <div className='flex flex-start gap-24'>
              <CategoryFilters id={id} />
              <div className=''>
              <p className='font-bold text-3xl text-center mb-5'>Products Collection</p>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
              {allProducts.map((item:ProductProps)=>(
                <ProductCard key={item._id} item={item}/>
              ))}
            </div>
            </div>
            </div>
          )}
        </Container>
      )}
    </div>
  )
}

export default Product