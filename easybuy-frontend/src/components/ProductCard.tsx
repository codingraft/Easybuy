import { FaPlus } from "react-icons/fa";

type ProductsProp = {
  productId: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  handler: () => void;
};

const ProductCard = ({
  productId,
  image,
  name,
  price,
  quantity,
  handler,
}: ProductsProp) => {
  return (
    <div className="product-card bg-white flex flex-col justify-center items-center w-1/4 relative mt-10 group py-10 px-8 gap-8 border border-slate-100 rounded">
      <img
        src={image}
        alt={name}
        className="product-card-img h-[calc(100%-2rem)] w-full object-cover mb-3"
      />
      <p className="text-lg pt-3">{name}</p>
      <span className="font-bold text-xl">₹{price}</span>

      <div className="addtocart absolute bottom-0 right-0 flex justify-center items-center h-full w-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => handler()}
          className="text-xl border-none text-white size-10 rounded-full flex items-center justify-center bg-blue-800 hover:rotate-12"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
