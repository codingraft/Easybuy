import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });
  const navigate = useNavigate();
  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="shipping">
      <button className="absolute top-20 left-10 border border-back size-10 flex items-center justify-center rounded-full bg-black text-white mb-8" onClick={() => navigate('/cart')}>
        <BiArrowBack />
      </button>

      <form action="" className="shipping-form lg:w-2/5 sm:w-full flex flex-col gap-4 mt-10 m-auto p-10" >
        <h1 className="text-2xl text-center font-bold">Shipping Address</h1>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingInfo.city}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={shippingInfo.state}
          onChange={changeHandler}
        />
        <select name="country" id="" onChange={changeHandler}>
          <option value="country">Country</option>
          <option value="india">India</option>
        </select>
        <input
          type="number"
          name="pinCode"
          placeholder="Pin Code"
          value={shippingInfo.pinCode}
          onChange={changeHandler}
        />

        <button type="submit" className="bg-black text-white p-3 rounded">Pay Now</button>
      </form>
    </div>
  );
};
export default Shipping;
