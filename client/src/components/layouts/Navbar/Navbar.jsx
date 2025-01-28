import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../../ui/Button";
import logo from "../../../assets/svg/Kanadelogo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/treatments", label: "Treatments" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  return (
    <nav className="bg-white fixed z-50 w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-28">
        <NavLink to="/" onClick={handleLinkClick} className="flex items-center">
          <img src={logo} className="h-20 w-20" alt="Logo" />
          <span className="ml-2 text-2xl font-bold text-gray-800">
            Dr. Kanade Hospital
          </span>
        </NavLink>
        <div className="hidden md:flex items-center space-x-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `text-black hover:text-[rgb(107,71,55)] font-medium px-3 py-2 ${
                  isActive ? "text-orange-700 font-semibold" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Button
            onClick={() => {
              navigate("/appointment");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-[rgb(107,71,55)] hover:bg-[#B39362] text-white"
          >
            Book Appointment
          </Button>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-[#C5A572]"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `block text-gray-700 hover:text-[#C5A572] px-3 py-2 rounded-md ${
                  isActive ? "text-[rgb(209,124,91)] font-semibold" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Button
            className="w-full bg-[#C5A572] hover:bg-[#B39362] text-white mt-4"
            onClick={() => {
              setIsOpen(false);
              navigate("/appointment");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Book Appointment
          </Button>
        </div>
      )}
    </nav>
  );
}
