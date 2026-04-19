import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white flex items-center px-4 md:px-8 h-[68px] border-b border-black/[0.07]">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0 mr-4 md:mr-10">
          <img
            className="w-[70px] md:w-[80px]"
            src="./src/assets/logo.png"
            alt=""
          />
        </a>

        {/* Nav Links (FIXED) */}
        <ul className="hidden lg:flex items-center justify-center flex-1 list-none">
          <li>
            <a
              href="#"
              className="px-[18px] text-[13px] uppercase text-[#e06b3a] h-[68px] leading-[68px] hover:opacity-75"
            >
              Sale
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-[18px] text-[13px] uppercase text-[#1a1a1a] h-[68px] leading-[68px] hover:opacity-75"
            >
              Ready to Wear
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-[18px] text-[13px] uppercase text-[#1a1a1a] h-[68px] leading-[68px] hover:opacity-75"
            >
              Fabrics
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-[18px] text-[13px] uppercase text-[#1a1a1a] h-[68px] leading-[68px] hover:opacity-75"
            >
              Fragrances
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-bold px-[18px] text-[13px] uppercase text-[#1a1a1a] h-[68px] leading-[68px] hover:opacity-75"
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
    </div>
  );
};

export default Header;
