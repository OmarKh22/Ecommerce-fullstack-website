import BannerCategories from "./ui/BannerCategories"
import 'react-multi-carousel/lib/styles.css';
import HomeBanner from "./ui/HomeBanner";
import Hightlites from "./ui/Hightlites";
import Categories from "./ui/Categories";
import ProductList from "./ui/ProductList";
import Pagination from "./ui/Pagination";
import DiscountedBanner from "./ui/DiscountedBanner";
import Blog from "./ui/Blog";

function App() {
  
  return (
    <main>
      <BannerCategories/>
      <HomeBanner />
      <Hightlites />
      <Categories />
      <ProductList />
      <DiscountedBanner />
      <Blog />
    </main>
  )
}

export default App
