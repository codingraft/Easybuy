import { useState } from "react";
import {
  FaSearch,
  FaShoppingBasket,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "3", role: "user" };
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const logout = () => {
    setOpen(false);
  };

  return (
    <nav className="header flex items-center justify-between">
      <Link to="/" onClick={() => setOpen(false)}>
        <h1 className="text-2xl font-bold text-black">EasyBuy</h1>
      </Link>
      <div className="right">
        {/* <Link to="/" onClick={() => setOpen(false)}>
        Home
      </Link> */}
        <Link
          to="/search"
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          <FaSearch />
        </Link>
        <Link
          to="/cart"
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          <FaShoppingBasket />
        </Link>
        {user._id ? (
          <>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center"
            >
              <FaUser />
            </button>
            <dialog open={open}>
              <div>
                {user.role === "admin" && (
                  <Link to="/admin/dashboard" onClick={() => setOpen(false)}>
                    Admin
                  </Link>
                )}
                <Link to="/orders" onClick={() => setOpen(false)}>Orders</Link>
                <button className="flex items-center" onClick={logout}>
                  <FaSignOutAlt />
                </button>
              </div>
            </dialog>
          </>
        ) : (
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="flex items-center"
          >
            <FaSignInAlt />
          </Link>
        )}
      </div>
    </nav>
  );
};
export default Header;
