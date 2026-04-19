const Footer = () => {
  return (
    <div className="font-sans">
      {/* Footer Info Bar */}
      <div className="bg-[#fdf6f0] border-t border-b border-[#ede8e2] grid grid-cols-1 sm:grid-cols-3 px-4 sm:px-6 md:px-12 py-5">
        <div className="flex items-center gap-4 px-4 sm:px-6 py-3 sm:py-2 border-b sm:border-b-0 sm:border-r border-[#e5ddd5] sm:first:pl-0 last:border-b-0 sm:last:border-r-0">
          <div className="w-[50px] h-[50px] border-[1.5px] border-dashed border-[#d4a89a] rounded-full flex items-center justify-center shrink-0 p-3">
            <svg
              viewBox="0 0 24 24"
              className="w-[22px] h-[22px] stroke-[#c9745f] fill-none stroke-[1.5]"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="1" y="3" width="15" height="13" rx="1" />
              <path d="M16 8h4l3 3v5h-7V8z" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <strong className="block text-[13px] font-bold tracking-[0.07em] uppercase text-[#1a1a1a] mb-[3px]">
              Shipping Charges
            </strong>
            <span className="text-[13px] text-[#666]">
              Starting from Rs. 130
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 px-4 sm:px-6 py-3 sm:py-2 border-b sm:border-b-0 sm:border-r border-[#e5ddd5] last:border-b-0 sm:last:border-r-0">
          <div className="w-[50px] h-[50px] border-[1.5px] border-dashed border-[#d4a89a] rounded-full flex items-center justify-center shrink-0 p-3">
            <svg
              viewBox="0 0 24 24"
              className="w-[22px] h-[22px] stroke-[#c9745f] fill-none stroke-[1.5]"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <div className="flex flex-col">
            <strong className="block text-[13px] font-bold tracking-[0.07em] uppercase text-[#1a1a1a] mb-[3px]">
              Track Your Order
            </strong>
            <span className="text-[13px] text-[#666]">
              Check status of your order.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 px-4 sm:px-6 py-3 sm:py-2 last:border-r-0">
          <div className="w-[50px] h-[50px] border-[1.5px] border-dashed border-[#d4a89a] rounded-full flex items-center justify-center shrink-0 p-3">
            <svg
              viewBox="0 0 24 24"
              className="w-[22px] h-[22px] stroke-[#c9745f] fill-none stroke-[1.5]"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="flex flex-col">
            <strong className="block text-[13px] font-bold tracking-[0.07em] uppercase text-[#1a1a1a] mb-[3px]">
              Find Stores
            </strong>
            <span className="text-[13px] text-[#666]">
              Stores countrywide across Pakistan, UK, UAE, US.
            </span>
          </div>
        </div>
      </div>

      {/* Help Bar */}
      <div className="bg-white px-4 sm:px-6 md:px-12 py-[22px] flex items-center justify-between border-b border-[#ede8e2] gap-4">
        <h2 className="text-[18px] sm:text-[22px] font-bold tracking-[0.04em] text-[#1a1a1a] uppercase whitespace-nowrap">
          Need Help?
        </h2>
        <a
          href="#"
          className="flex items-center gap-[10px] sm:gap-[12px] no-underline text-[#1a1a1a] text-[14px] sm:text-[18px] font-medium tracking-[0.05em] uppercase"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 sm:w-9 sm:h-9 fill-none stroke-black stroke-[1.2]"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <text
              x="6"
              y="11.5"
              fontSize="5"
              fontWeight="bold"
              fill="black"
              strokeWidth="0"
              className="font-sans"
            >
              FAQ
            </text>
          </svg>
          FAQs
        </a>
      </div>

      {/* Main Footer Links */}
      <div className="bg-white px-4 sm:px-6 md:px-12 pt-10 sm:pt-12 pb-8 sm:pb-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
        {/* Help Column */}
        <div>
          <h3 className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#1a1a1a] mb-[22px]">
            Help
          </h3>
          <ul className="list-none p-0 m-0">
            {[
              "Frequently Asked Questions",
              "Terms & Conditions",
              "Privacy Policy",
              "Disclaimer",
            ].map((item) => (
              <li key={item} className="mb-[14px]">
                <a
                  href="#"
                  className="text-[14px] text-[#444] no-underline hover:text-[#1a1a1a] transition-colors duration-[0.16s]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* More from Khaadi Column */}
        <div>
          <h3 className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#1a1a1a] mb-[22px]">
            More from Khaadi
          </h3>
          <ul className="list-none p-0 m-0">
            {["About Us", "Blogs", "Cloth Care"].map((item) => (
              <li key={item} className="mb-[14px]">
                <a
                  href="#"
                  className="text-[14px] text-[#444] no-underline hover:text-[#1a1a1a] transition-colors duration-[0.16s]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials + Newsletter Column */}
        <div className="sm:col-span-2 md:col-span-1">
          <h3 className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#1a1a1a] mb-[22px]">
            Our Socials
          </h3>
          <div className="flex gap-[10px] mb-7 flex-wrap">
            {/* TikTok */}
            <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center shrink-0 bg-black">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
              </svg>
            </div>
            {/* YouTube */}
            <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center shrink-0 bg-[#FF0000]">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path
                  fill="white"
                  d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"
                />
                <polygon
                  fill="#FF0000"
                  points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                />
              </svg>
            </div>
            {/* Facebook */}
            <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center shrink-0 bg-[#1877F2]">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
            {/* Instagram */}
            <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center shrink-0 bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  fill="url(#igGrad)"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4.5"
                  stroke="#fff"
                  strokeWidth="1.8"
                  fill="none"
                />
                <circle cx="17.2" cy="6.8" r="1.1" fill="#fff" />
                <defs>
                  <radialGradient id="igGrad" cx="30%" cy="107%" r="120%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="10%" stopColor="#fdf497" />
                    <stop offset="50%" stopColor="#fd5949" />
                    <stop offset="68%" stopColor="#d6249f" />
                    <stop offset="100%" stopColor="#285AEB" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#1a1a1a] mb-3">
            Get the Latest News
          </div>
          <div className="flex items-center border-b border-[#1a1a1a] pb-[6px] gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 min-w-0 border-none outline-none text-[14px] text-[#888] bg-transparent py-1"
            />
            <button
              type="button"
              className="bg-[#1a1a1a] text-white border-none rounded-[20px] px-[14px] sm:px-[18px] py-2 text-[11px] font-bold tracking-[0.12em] uppercase cursor-pointer whitespace-nowrap hover:opacity-75 transition-opacity duration-[0.16s]"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-white px-4 sm:px-6 md:px-12 py-[22px] grid grid-cols-1 sm:grid-cols-3 items-center gap-6 border-t border-[#ede8e2]">
        {/* Payment Methods */}
        <div className="flex flex-col gap-[10px]">
          <span className="text-[12px] text-[#555] tracking-[0.04em]">
            100% Safe Checkout
          </span>
          <div className="flex items-center gap-3">
            <svg width="44" height="28" viewBox="0 0 44 28" fill="none">
              <rect
                width="44"
                height="28"
                rx="4"
                fill="white"
                stroke="#eee"
                strokeWidth="1"
              />
              <circle cx="17" cy="14" r="8" fill="#EB001B" />
              <circle cx="27" cy="14" r="8" fill="#F79E1B" />
              <path
                d="M22 7.54a8 8 0 0 1 0 12.92A8 8 0 0 1 22 7.54z"
                fill="#FF5F00"
              />
            </svg>
            <span className="text-[20px] font-extrabold text-[#1a1f71] tracking-[0.01em] italic">
              VISA
            </span>
          </div>
        </div>

        {/* Security Badge */}
        <div className="flex flex-col gap-1 items-start sm:items-center">
          <span className="text-[12px] text-[#555] mb-[6px]">Secured by</span>
          <div className="inline-flex items-center gap-2 border-[1.5px] border-[#5ba73f] rounded-[4px] px-[12px] sm:px-[14px] py-[7px] text-[11px] text-[#5ba73f] font-bold tracking-[0.04em]">
            <svg
              viewBox="0 0 24 24"
              className="w-[18px] h-[18px] stroke-[#5ba73f] fill-none stroke-2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            GoDaddy — Verified &amp; Secured
          </div>
        </div>

        {/* Logo + Copyright */}
        <div className="flex items-center gap-[20px] sm:gap-[30px]">
          <div className="flex items-center gap-[6px] shrink-0">
            <img
              className="w-[44px] sm:w-[50.58px]"
              src="./src/assets/logo.svg"
              alt="Logo"
            />
          </div>
          <p className="text-[11px] text-[#888] leading-[1.6] m-0">
            Copyright &copy; 2026 Weaves Corporation Limited.
            <br />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
