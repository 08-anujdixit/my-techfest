import React, { useEffect, useState } from "react";
import "../index.css";
import "../Custom.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

export default function Navbar_new() {
  const navigate = useNavigate();
  const location = useLocation();

  const [toggleMenu, setToggleMenu] = useState(false);

  const navBar = [
    {
      name: "Home",
      slug: "/home",
      active: true,
    },
    {
      name: "Brochure",
      slug: "/brochure/Techfest 5.0 Brochure.pdf",
      active: true,
    },
    {
      name: "Registration",
      slug: "/register",
      active: true,
    },
    {
      name: "Events",
      slug: "/events",
      active: true,
    },
    {
      name: "Hackathon",
      slug: "/codeathon",
      active: true,
    },
    {
      name: "About Us",
      slug: "/about",
      active: true,
    },
    {
      name: "Contact Us",
      slug: "/about/#contactus",
      active: true,
    },
    {
      name: "FAQ",
      slug: "/about/#query",
      active: true,
    },
  ];

  // Close menu whenever route changes
  useEffect(() => {
    setToggleMenu(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest("#navbar-container")) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleNavigation = (item) => {
    setToggleMenu(false);

    if (item.name === "Brochure") {
      // BROCHURE DOWNLOAD CURRENTLY DISABLED
      return;
    }

    navigate(item.slug);
  };

  return (
    <header
      id="navbar-container"
      className="
        sticky top-0 z-[1100]
        w-full
        px-2 sm:px-3 md:px-5
        pt-2
      "
    >
      {/* NAVBAR */}
      <div
        className="
          relative
          flex items-center justify-between
          w-full
          min-h-[3.7rem] md:min-h-[4.5rem]
          px-3 sm:px-4 md:px-6

          bg-[#050b18]/90
          backdrop-blur-xl

          border border-[#3871ff]/40
          hover:border-[#3871ff]/80

          rounded-xl

          shadow-[0_0_20px_rgba(56,113,255,0.08)]

          transition-all duration-300
        "
      >
        {/* BLUE TOP ACCENT */}
        <div
          className="
            absolute
            top-0
            left-[10%]
            right-[10%]
            h-[1px]

            bg-gradient-to-r
            from-transparent
            via-[#3871ff]
            to-transparent

            opacity-80
          "
        />

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setToggleMenu(false)}
          className="
            flex items-center
            relative
            z-10
          "
        >
          <Logo
            h="
              h-[2.3rem]
              sm:h-[2.7rem]
              md:h-[3.5rem]
            "
          />
        </Link>

        {/* TECHFEST LABEL */}
        <div
          className="
            hidden
            lg:flex
            absolute
            left-1/2
            -translate-x-1/2

            items-center
            gap-2

            text-xs
            tracking-[0.35em]
            uppercase
            text-blue-300/70
            font-mono
          "
        >
          <span className="h-[1px] w-6 bg-blue-500/50" />

          TECHFEST 6.0

          <span className="h-[1px] w-6 bg-blue-500/50" />
        </div>

        {/* HAMBURGER */}
        <button
          type="button"
          aria-label={
            toggleMenu ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={toggleMenu}
          onClick={() => setToggleMenu((prev) => !prev)}
          className={`
            relative
            z-20

            flex items-center justify-center
            shrink-0

            w-10 h-10
            sm:w-11 sm:h-11
            md:w-12 md:h-12

            text-blue-100
            text-2xl
            sm:text-3xl

            rounded-lg

            border border-transparent

            hover:border-[#3871ff]/50
            hover:bg-[#3871ff]/10
            hover:text-[#5c8dff]

            active:scale-95

            transition-all duration-200

            ${
              toggleMenu
                ? "bg-[#3871ff]/10 border-[#3871ff]/50 text-[#5c8dff]"
                : ""
            }
          `}
        >
          {toggleMenu ? <RxCross2 /> : <HiOutlineMenu />}
        </button>

        {/* MENU */}
        <div
          // className={`
          //   absolute

          //   top-[calc(100%+0.75rem)]

          //   /* MOBILE */
          //   left-1/2
          //   -translate-x-1/2
          //   w-[92vw]

          //   /* TABLET / DESKTOP */
          //   sm:left-auto
          //   sm:right-3
          //   sm:translate-x-0
          //   sm:w-[18rem]

          //   md:right-4
          //   md:w-[21rem]

          //   p-3 sm:p-3.5

          //   bg-[#050b18]/98
          //   backdrop-blur-2xl

          //   border
          //   border-[#3871ff]/40

          //   rounded-xl

          //   shadow-[0_15px_50px_rgba(0,0,0,0.55)]
          //   shadow-[0_0_30px_rgba(56,113,255,0.12)]

          //   transition-all duration-300 ease-out

          //   origin-top

          //   ${
          //     toggleMenu
          //       ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
          //       : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          //   }
          // `}
          className={`
  absolute
  top-[calc(100%+0.75rem)]

  /* MOBILE */
  left-1/2
  -translate-x-1/2
  w-[92vw]

  /* TABLET / DESKTOP */
  sm:left-auto
  sm:right-3
  sm:translate-x-0
  sm:w-[18rem]
  md:right-4
  md:w-[21rem]

  p-3 sm:p-3.5

  /* SOLID MOBILE BACKGROUND */
  bg-[#050b18]

  /* Glass effect only on larger screens */
  sm:bg-[#050b18]/95
  sm:backdrop-blur-2xl

  border
  border-[#3871ff]/50

  rounded-xl

  shadow-[0_15px_50px_rgba(0,0,0,0.75)]
  shadow-[0_0_30px_rgba(56,113,255,0.15)]

  transition-all duration-300 ease-out

  origin-top

  ${
    toggleMenu
      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
  }
`}
        >
          {/* MENU HEADER */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-2

              pb-3
              mb-2

              border-b
              border-[#3871ff]/20

              text-[10px]
              sm:text-xs

              tracking-[0.3em]
              uppercase

              text-blue-400/70
              font-mono
            "
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3871ff]" />

            TECHFEST 6.0

            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3871ff]" />
          </div>

          {/* NAVIGATION */}
          <nav className="flex flex-col items-center gap-1">
            {navBar.map((item) =>
              item.active ? (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavigation(item)}
                  className="
                    group
                    relative

                    w-full
                    flex items-center
                    justify-center

                    px-4
                    py-3
                    sm:py-3.5

                    text-center

                    text-gray-200
                    hover:text-white

                    text-sm
                    sm:text-base
                    md:text-lg

                    font-semibold

                    rounded-lg

                    border
                    border-transparent

                    hover:border-[#3871ff]/30
                    hover:bg-[#3871ff]/10

                    active:scale-[0.98]

                    transition-all duration-200
                  "
                >
                  {/* LEFT BLUE INDICATOR */}
                  <span
                    className="
                      absolute
                      left-2

                      w-1
                      h-1

                      rounded-full

                      bg-[#3871ff]

                      opacity-0
                      scale-0

                      shadow-[0_0_8px_#3871ff]

                      group-hover:opacity-100
                      group-hover:scale-100

                      transition-all duration-200
                    "
                  />

                  <span
                    className="
                      transition-all duration-200
                      group-hover:translate-x-1
                    "
                  >
                    {item.name}
                  </span>

                  {/* RIGHT ARROW */}
                  <span
                    className="
                      absolute
                      right-3

                      text-blue-400

                      opacity-0
                      -translate-x-2

                      group-hover:opacity-100
                      group-hover:translate-x-0

                      transition-all duration-200
                    "
                  >
                    →
                  </span>
                </button>
              ) : null
            )}
          </nav>

          {/* MENU FOOTER */}
        <div
  className="
    mt-3
    pt-3
    px-2

    border-t
    border-[#3871ff]/30

    text-center

    text-[10px]
    sm:text-[11px]

    tracking-[0.18em]
    uppercase

    text-blue-200/80
    font-mono

    drop-shadow-[0_0_6px_rgba(56,113,255,0.25)]
  "
>
  <span className="text-[#5c8dff]">INNOVATE</span>
  <span className="mx-1.5 text-blue-500/50">•</span>
  <span className="text-blue-200/80">CREATE</span>
  <span className="mx-1.5 text-blue-500/50">•</span>
  <span className="text-[#5c8dff]">TRANSFORM</span>
</div>
        </div>
      </div>
    </header>
  );
}