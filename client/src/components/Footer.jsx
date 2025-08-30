import { useState } from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    toast.success("Thanks for subscribing to our grocery updates!");
    setEmail(""); // clear input after toast
  };

  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* --- Grocery App Description --- */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-black">GrocerEase</h2>
          <p className="text-sm leading-relaxed">
            Your one-stop online grocery store delivering fresh fruits, vegetables,
            dairy, and everyday essentials right to your doorstep. 
            Shop smart, eat fresh, live better with GrocerEase!
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg
                className="w-6 h-6 hover:text-pink-500 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg
                className="w-6 h-6 hover:text-blue-600 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.5l-.4 3h-2.1v7A10 10 0 0 0 22 12" />
              </svg>
            </a>

            {/* TwitterX (replaced old Twitter logo) */}
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <svg
                className="w-6 h-6 hover:text-black transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2H21.5l-7.34 8.39L22 22h-6.828l-5.35-6.833L3.9 22H.64l7.834-8.96L2 2h6.922l4.797 6.177L18.244 2zM17 20h1.708L7.2 4H5.34L17 20z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg
                className="w-6 h-6 hover:text-blue-700 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17v-6.5H6V17h2.34zM7.17 9.5c.76 0 1.23-.5 1.23-1.1 0-.62-.47-1.1-1.2-1.1-.74 0-1.22.48-1.22 1.1 0 .6.48 1.1 1.2 1.1zM18 17v-3.3c0-1.8-1-2.6-2.3-2.6-1 0-1.5.6-1.8 1.1V10.5H11V17h2.34v-3.2c0-.2 0-.3.1-.4.2-.3.5-.7 1.1-.7.8 0 1.2.6 1.2 1.5V17H18z" />
              </svg>
            </a>
          </div>
        </div>

        {/* --- Footer Links Example --- */}
        <div>
          <h3 className="font-semibold mb-3 text-black">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-black">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>

        {/* --- Newsletter with Toast --- */}
        <div>
          <h3 className="font-semibold mb-3 text-black">Newsletter</h3>
          <p className="text-sm mb-2">Get the latest grocery deals & discounts.</p>
          <div className="flex items-center mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none text-sm"
              placeholder="Your email"
            />
            <button
              onClick={handleSubscribe}
              className="flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 12l18-9-7 9 7 9-18-9z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GrocerEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
