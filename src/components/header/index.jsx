import { useState } from "react";
import logo from "../../assets/logo.svg";


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <nav className="hidden lg:flex items-center bg-white px-4 md:px-8 h-[68px] border-b border-black/[0.07]">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0 mr-4 md:mr-10">
          <img className="w-[70px] md:w-[80px]" src={logo} alt="logo" />
        </a>
        {/* Nav Links (FIXED) */}
        <ul className="hidden lg:flex items-center justify-center flex-1 list-none">
          <li>
            <a
              href="#"
              className="px-[18px] text-[14px] uppercase text-[#e06b3a] h-[68px] leading-[68px] hover:opacity-75"
            >
              Sale
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-[18px] text-[14px] uppercase text-[#1a1a1a] h-[68px] leading-[68px] hover:opacity-75"
            >
              Ready to Wear
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-[18px] text-[14px] uppercase text-[#1a1a1a] h-[68px] leading-[68px] hover:opacity-75"
            >
              Fabrics
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-[18px] text-[14px] uppercase text-[#1a1a1a] h-[68px] leading-[68px] hover:opacity-75"
            >
              Fragrances
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-bold px-[18px] text-[14px] uppercase text-[#1a1a1a] h-[68px] leading-[68px] hover:opacity-75"
            >
              Now Happening
            </a>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-2 ml-auto">
          {/* SAME icons */}
          <button className="p-2 rounded-full hover:bg-black/10">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 stroke-current fill-none stroke-[1.5]"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </button>

          <button className="p-2 rounded-full hover:bg-black/10">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 stroke-current fill-none stroke-[1.5]"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          <button className="p-2 rounded-full hover:bg-black/10">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 stroke-current fill-none stroke-[1.5]"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <button className="p-2 rounded-full hover:bg-black/10">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 stroke-current fill-none stroke-[1.5]"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>

          {/* Hamburger */}
          <button
            className="lg:hidden text-2xl ml-2"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${open ? "block" : "hidden"} bg-white border-b`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-[13px] uppercase">
          <li>
            <a href="#">Sale</a>
          </li>
          <li>
            <a href="#">Ready to Wear</a>
          </li>
          <li>
            <a href="#">Fabrics</a>
          </li>
          <li>
            <a href="#">Fragrances</a>
          </li>
          <li>
            <a href="#">Now Happening</a>
          </li>
        </ul>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex items-center justify-around px-2 py-2 lg:hidden">
        {/* Menu */}
        <button className="flex flex-col items-center gap-1 text-[#1a1a1a] min-w-[48px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <line x1="3" y1="6" x2="10" y2="6" />
            <circle cx="13.5" cy="6" r="1.5" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <span className="text-[10px] tracking-wide">Menu</span>
        </button>

        {/* Bag */}
        <button className="flex flex-col items-center gap-1 text-[#1a1a1a] min-w-[48px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <path d="M6 2 L4 22 L20 22 L18 2 Z" strokeLinejoin="round" />
            <path d="M9 2 C9 2 9 6 12 6 C15 6 15 2 15 2" />
          </svg>
          <span className="text-[10px] tracking-wide">Bag</span>
        </button>

        {/* Home */}
        <button className="flex flex-col items-center gap-1 text-[#1a1a1a] min-w-[48px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <path d="M3 12 L12 4 L21 12" strokeLinejoin="round" />
            <rect x="5" y="12" width="14" height="10" rx="1" />
            <rect x="9" y="16" width="6" height="6" />
          </svg>
          <span className="text-[10px] tracking-wide">Home</span>
        </button>

        {/* Search */}
        <button className="flex flex-col items-center gap-1 text-[#1a1a1a] min-w-[48px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
          <span className="text-[10px] tracking-wide">Search</span>
        </button>

        {/* Account */}
        <button className="flex flex-col items-center gap-1 text-[#1a1a1a] min-w-[48px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20 C4 16 8 13 12 13 C16 13 20 16 20 20" />
          </svg>
          <span className="text-[10px] tracking-wide">Account</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
