import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCart = () => {};
  return (
    <div className="home">
      <section className="banner relative h-[75vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80"
          alt="Lifestyle products"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="latest_prod p-10">
        <h1 className="text-3xl flex justify-between items-center">
          Latest Product{" "}
          <Link to="/search" className="text-sm">
            More
          </Link>
        </h1>
        <div className="product_card">
          <ProductCard
            productId="sdv"
            image="https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"
            name="Random"
            price={66878}
            quantity={0}
            handler={addToCart}
          />
        </div>
      </section>
    </div>
  );
};
export default Home;
