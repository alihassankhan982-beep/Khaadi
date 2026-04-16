const Header = () => {
  return (
    <div>
      <nav className="bg-white flex items-center px-8 h-[68px] border-b border-black/[0.07]">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-0 no-underline shrink-0 mr-10"
        >
          <img className="w-[80px]" src="./src/assets/logo.png" alt="" />
        </a>

        {/* Nav Links */}
        <ul className="flex items-center gap-0 flex-1 list-none">
          <li>
            <a
              href="#"
              className="block px-[18px] text-[13px] font-normal tracking-[0.08em] uppercase no-underline text-[#e06b3a] h-[68px] leading-[68px] relative transition-opacity duration-180 hover:opacity-75 whitespace-nowrap"
            >
              Sale
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-[18px] text-[13px] font-normal tracking-[0.08em] uppercase no-underline text-[#1a1a1a] h-[68px] leading-[68px] relative transition-opacity duration-180 hover:opacity-75 whitespace-nowrap"
            >
              New In
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-[18px] text-[13px] font-normal tracking-[0.08em] uppercase no-underline text-[#c8a84b] h-[68px] leading-[68px] relative transition-opacity duration-180 hover:opacity-75 whitespace-nowrap"
            >
              Festive Edit
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-[18px] text-[13px] font-normal tracking-[0.08em] uppercase no-underline text-[#1a1a1a] h-[68px] leading-[68px] relative transition-opacity duration-180 hover:opacity-75 whitespace-nowrap"
            >
              Ready to Wear
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-[18px] text-[13px] font-normal tracking-[0.08em] uppercase no-underline text-[#1a1a1a] h-[68px] leading-[68px] relative transition-opacity duration-180 hover:opacity-75 whitespace-nowrap"
            >
              Fabrics
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-[18px] text-[13px] font-normal tracking-[0.08em] uppercase no-underline text-[#1a1a1a] h-[68px] leading-[68px] relative transition-opacity duration-180 hover:opacity-75 whitespace-nowrap"
            >
              Fragrances
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-[18px] text-[13px] font-normal tracking-[0.08em] uppercase no-underline text-[#1a1a1a] h-[68px] leading-[68px] relative transition-opacity duration-180 hover:opacity-75 whitespace-nowrap"
            >
              Now Happening
            </a>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-2 ml-4">
          <button
            aria-label="Search"
            className="bg-transparent border-none cursor-pointer p-2 flex items-center justify-center text-[#1a1a1a] rounded-full transition-colors duration-160 hover:bg-black/6"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 stroke-current fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </button>

          <button
            aria-label="Wishlist"
            className="bg-transparent border-none cursor-pointer p-2 flex items-center justify-center text-[#1a1a1a] rounded-full transition-colors duration-160 hover:bg-black/6"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 stroke-current fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          <button
            aria-label="Account"
            className="bg-transparent border-none cursor-pointer p-2 flex items-center justify-center text-[#1a1a1a] rounded-full transition-colors duration-160 hover:bg-black/6"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 stroke-current fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <button
            aria-label="Shopping bag"
            className="bg-transparent border-none cursor-pointer p-2 flex items-center justify-center text-[#1a1a1a] rounded-full transition-colors duration-160 hover:bg-black/6"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 stroke-current fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
