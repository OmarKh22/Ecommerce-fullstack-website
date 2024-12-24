import { Link } from "react-router-dom"
import { CategoryProps } from "../../../type"
import { useEffect, useState } from "react";
import { config } from "../../../config";
import { getData } from "../lib";

const CategoryFilters = ({id}:{id:string | undefined}) => {
    const [categories, setCategories] = useState([]);
    
    
    useEffect(() => {
        const fetchData = async () => {
          const endpoint = `${config?.baseUrl}/categories`;
          try {
            const data = await getData(endpoint);
            setCategories(data);
          } catch (error) {
            console.error("Error fetching data", error);
          }
        };
        fetchData();
      }, []);
  return (
    <div className="hidden md:inline-flex flex-col gap-5">
        <p className="text-2xl font-bold">Filters</p>
        <div>
         {categories.map((item: CategoryProps) => (
                  <div key={item?._id}>
                    <Link
                      to={`/category/${item?._base}`}
                      className={`flex text-[#a3a4b3e3] py-1 max-w-52 font-semibold text-base hover:underline decoration-[1px] decoration-transparent underline-offset-2 hover:text-darkText items-center duration-200 ${
                  item?._base === id
                    ? "text-greenText decoration-greenText"
                    : "text-lightText"
                }`}
                    >
                      {item?.name}
                    </Link>
                  </div>
        ))}

        </div>
    </div>
  )
}

export default CategoryFilters