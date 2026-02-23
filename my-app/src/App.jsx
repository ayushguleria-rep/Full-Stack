
import headphones from "./assets/headphones.jpg";
import smartwatch from "./assets/smartwatch.jpg";
import speaker from "./assets/speaker.jpg";
import mouse from "./assets/mouse.jpg";

import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="main-heading">Featured Products</h1>

      <div className="amazon-container">
        <ProductCard
          title="Wireless Headphones"
          image={headphones}
          rating={4}
          reviews={39}
          price="2579"
          originalPrice="7999"
          discount="68"
        />

        <ProductCard
          title="Smart Watch"
          image={smartwatch}
          rating={4}
          reviews={23}
          price="3099"
          originalPrice="4249"
          discount="27"
        />

        <ProductCard
          title="Bluetooth Speaker"
          image={speaker}

          rating={5}
          reviews={33}
          price="2699"
          originalPrice="7999"
          discount="66"
        />

        <ProductCard
          title="Laptop Backpack"
          image="https://images.unsplash.com/photo-1581605405669-fcdf81165afa"
          rating={4}
          reviews={21}
          price="1299"
          originalPrice="2499"
          discount="48"
        />

        <ProductCard
          title="Gaming Mouse"
          image={mouse}
          rating={4}
          reviews={18}
          price="999"
          originalPrice="1999"
          discount="50"
        />
      </div>
    </>
  );
}

export default App;
