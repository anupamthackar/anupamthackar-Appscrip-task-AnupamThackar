'use client'
import {useRouter} from 'next/navigation'
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react";
import Image from "next/image";
import HeartComponent from "./components/heartRed"
import '@fortawesome/fontawesome-free/css/all.css';
import Filters from "./components/Filter"
import Footer from "./components/Footer";

const App = () => {
  const [products, setProducts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [sortBy, setSortBy] = useState('price-high-to-low');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(()=>{                       
    const fetchdata = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        console.log(data)
        setProducts(data);
        setTotalItems(data.length);
        console.log(data.length)
      } catch (error) {
        console.log("Error fetching data: ", error)
      }
    }
    fetchdata()
  }, [ ]);

  const sortProducts = (sortOption) => {
    let sortedProducts = [...products]

    switch (sortOption) {
      case "price-high-to-low" :
        sortedProducts.sort((a,b)=>b.price - a.price);
        break
      case 'price-low-to-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'newest-first':
        sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'popular':
        break;
      default:
        break;
    }
    setProducts(sortedProducts);
  }

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    sortProducts(event.target.value);
  };

  const toggleFilters = () => {
  setShowFilters(!showFilters);
  };

  const Router = useRouter();
  const navigation = (name)=>{
    Router.push(name)
  }
  
  return (
    <main>
      <Navbar />
      <div className="main_section">
        <div className="main_section1">
          <div className="main_section1_1">
            <div className="totalItems">{totalItems} ITEMS</div>
            <div className="totalItems1">
              {showFilters ? <img src="/assets/down-arrow.png" alt="Right arrow" width={16} height={16} />:<img src="/assets/Right arrow.png" alt="Right arrow" width={16} height={16} />}
              <div className="filter">
                <p onClick={toggleFilters}>
                  {showFilters ?  "Hide filter" : "Show filter"}
                </p>
            </div>
            </div>
          </div>
          <div className="sort">
            <label  htmlFor="sort"></label>
            <select className="sort" id="sort" value={sortBy} onChange={handleSortChange}>
              <option value="price-high-to-low" defaultValue='Recommended'>Recommended</option>
              <option value="price-high-to-low">Price: High to Low</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="newest-first">Newest First</option>
              <option value="popular">Popular</option>
            </select>
          </div>
        </div>
        
        <hr className="line1" />

        <div className="main_section2">
          <aside>
            {showFilters && (
              <div className="filter_section">
                <Filters />
              </div>
            )}
          </aside>

          <div className="card_section">
            {products.map(product => (
              <div key={product.id} className="card">
                <img src={product.image} alt={product.title} width={250} height={250} />
                <h3>{product.title}</h3>
                <div className="card3">
                  <p onClick={()=>navigation("./SignUp")} className="signup_line">Sign in or Create an account to see pricing</p>
                  <HeartComponent />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>

  )
}

export default App;