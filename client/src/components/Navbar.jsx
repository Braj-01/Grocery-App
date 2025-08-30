import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, setShowUserLogin, navigate } = useAppContext();

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const logout = () => {
    setUser(false);
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="sticky top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          {/* <img src={assets.logo} alt="logo" className="h-8" /> */}
          <span className="font-bold text-lg">GrocerEase</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link className="hover:text-green-600 transition" to="/">Home</Link>
          <Link className="hover:text-green-600 transition" to="/products">Products</Link>
          <Link className="hover:text-green-600 transition" to="/cart">Cart</Link>

          {user ? (
            <>
              <Link className="hover:text-green-600 transition" to="/my-orders">My Orders</Link>
              <button
                onClick={logout}
                className="px-4 py-1 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowUserLogin(true)}
              className="px-4 py-1 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <>
          {/* Blur + Dark Overlay */}
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          ></div>

          {/* Dropdown Content */}
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-6 flex flex-col gap-4 px-6 text-sm font-medium z-50 animate-slide-down">
            <Link onClick={() => setOpen(false)} className="hover:text-green-600 transition" to="/">Home</Link>
            <Link onClick={() => setOpen(false)} className="hover:text-green-600 transition" to="/products">Products</Link>
            <Link onClick={() => setOpen(false)} className="hover:text-green-600 transition" to="/cart">Cart</Link>

            {user ? (
              <>
                <Link onClick={() => setOpen(false)} className="hover:text-green-600 transition" to="/my-orders">My Orders</Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setShowUserLogin(true);
                  setOpen(false);
                }}
                className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition text-left"
              >
                Login
              </button>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
