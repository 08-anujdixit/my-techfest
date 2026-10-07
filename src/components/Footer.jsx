import React, { useState } from "react";
import "../index.css";
import "../Custom.css";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo";

const Footer = () => {
  const [download, setDownload] = useState({
    status: false,
    fade: "reverseFade",
  });

  const quickLinks = [
    {
      name: "Register Now",
      slug: "/register",
      active: true,
    },
    {
      name: "Brochure",
      slug: "",
      active: true,
    },
    {
      name: "Events",
      slug: "/events",
      active: true,
    },
    {
      name: "Code of Conduct",
      slug: "/about/#coc",
      active: true,
    },
    {
      name: "Contact Us",
      slug: "/about/#contactus",
      active: true,
    },
    {
      name: "Privacy and Policy",
      slug: "/about/#privacy-policy",
      active: true,
    },
    {
      name: "Refund Policy",
      slug: "/about/#refund-policy",
      active: true,
    },
    {
      name: "Have Any Queries",
      slug: "/about/#query",
      active: true,
    },
    {
      name: "Sponsors",
      slug: "/about/#sponsors",
      active: true,
    },
  ];

  const socialMediaAcc = [
    {
      title: "Facebook",
      active: true,
      icon: <FaFacebook />,
      slug: "https://www.facebook.com/share/1Av6JwqyF3/",
    },
    {
      title: "WhatsApp",
      active: true,
      icon: <FaWhatsapp />,
      slug: "https://chat.whatsapp.com/EbkmDTXP84ZKZ6DJyvdyc0",
    },
    {
      title: "Instagram",
      active: true,
      icon: <FaInstagram />,
      slug: "https://www.instagram.com/techfest5.0?igsh=cm9hZ2VnaDJlZmU4",
    },
    {
      title: "LinkedIn",
      active: true,
      icon: <FaLinkedin />,
      slug: "https://www.linkedin.com/company/techfest5-0/",
    },
    {
      title: "YouTube",
      active: true,
      icon: <FaYoutube />,
      slug: "https://youtube.com/@npgccomputerscience?si=JvZrymg4dLUGdQkv",
    },
  ];

  return (
    // <>
    //   <footer className='h-auto py-4 bg-gray-900 w-full relative z-[500] bottom-0'>
    //     <div className='flex items-center px-4 md:px-6 pb-2'>
    //       <Link
    //       to='/'
    //       >
    //         <Logo
    //           h="h-[2.5rem] md:h-[4rem]"
    //         />
    //       </Link>
    //       <p className='w-auto font-bold text-grad py-1 text-xl md:text-4xl'>Quick Links</p>
    //     </div>

    //     <div className={`w-full h-[4rem] fixed top-[6rem] flex justify-center items-center transition-all ${download.status?download.fade:"hidden"}`}>
    //       <div className="p-2 inline bg-gray-200 rounded-3xl">
    //         <span className="text-grad font-extrabold text-sm">
    //           Download started!
    //         </span>
    //       </div>
    //     </div>

    //     <div className='md:flex md:justify-center md:items-center w-auto h-auto px-2'>
    //       <ul
    //       className='my-0 grid grid-cols-3 gap-y-0 w-full' >
    //         {
    //           quickLinks?.map((l) =>(
    //             l.active ? (<li
    //             key={l.name}
    //             className='text-[0.8rem] my-1
    //               md:text-[1.5rem] text-center
    //               '
    //             >
    //               <a
    //                 href={l.name=='Brochure'?'/brochure/Techfest 5.0 Brochure.pdf':l.slug}
    //                 download={l.name=='Brochure'?true:false}
    //                 onClick={l.name=='Brochure'?
    //                 (e)=>{
    //                   setTimeout(()=>{
    //                     setDownload((p)=>({
    //                       ...p,
    //                       status:!status,
    //                     }));
    //                   }, 500 );
    //                   setTimeout(()=>{
    //                     setDownload((p)=>({
    //                     ...p,
    //                     fade: 'customFade',
    //                   }));
    //                   },1000);
    //                   setDownload((p)=>({
    //                     status:!status,
    //                     fade: 'reverseFade'
    //                   }));
    //                 }:null}
    //                 className="text-gray-400 hover-grad"
    //               >{l.name}</a>
    //             </li>) : null
    //           ))
    //         }
    //       </ul>
    //     </div>

    //     <div className=' my-3 p-2 flex text-xl md:text-3xl justify-around md:justify-evenly'>
    //       {
    //         socialMediaAcc?.map((sma,i) =>(
    //           sma.active ? (
    //             <Link
    //             className={`text-gray-200 rounded-[50%] bg-grad p-[0.9px]`}
    //             to={sma.slug}
    //             target="_blank"
    //             >
    //               <div className="bg-[#000011] rounded-[50%] p-3">
    //                 {sma.icon}
    //               </div>
    //             </Link>
    //           ):null
    //         ))
    //       }
    //     </div>

    //     <div className='flex justify-center h-[20%] items-center'>
    //       <p
    //       className='text-grad md:text-2xl font-bold'
    //       >&copy; TechFest 6.0 — All Rights Reserved.</p>
    //     </div>

    //   </footer>
    // </>

    <>
      <footer className="relative w-full overflow-hidden bg-[#000416] border-t border-blue-800/50">
        {/* Subtle tech grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(0,140,255,0.6) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,140,255,0.6) 1px, transparent 1px)
      `,
            backgroundSize: "35px 35px",
          }}
        />

        {/* Blue ambient glow */}
        <div
          className="
      absolute
      -top-20
      left-1/2
      -translate-x-1/2
      w-[300px]
      md:w-[500px]
      h-[100px]
      md:h-[160px]
      bg-blue-600/10
      blur-[70px]
      md:blur-[100px]
      rounded-full
      pointer-events-none
    "
        />

        {/* Download notification */}
        <div
          className={`
      fixed
      top-20
      left-0
      w-full
      flex
      justify-center
      z-[1000]
      ${download.status ? download.fade : "hidden"}
    `}
        >
          <div
            className="
        px-4
        py-2
        rounded-full
        bg-[#05051c]/95
        border
        border-blue-400/30
        backdrop-blur-md
      "
          >
            <span className="text-blue-400 text-xs font-bold">
              Download started!
            </span>
          </div>
        </div>

        <div
          className="
      relative
      z-10
      max-w-7xl
      mx-auto
      px-4
      sm:px-6
      lg:px-10
      py-5
      md:py-8
      lg:py-9
    "
        >
          {/* ================= TOP ================= */}

          <div
            className="
        flex
        flex-col
        sm:flex-row
        items-center
        justify-between
        gap-5
        md:gap-8
      "
          >
            {/* Logo + Brand */}

            <Link
              to="/"
              className="
          flex
          items-center
          gap-3
          md:gap-4
          shrink-0
        "
            >
              <Logo
                h="
            h-[2.5rem]
            sm:h-[3rem]
            md:h-[4rem]
            lg:h-[4.5rem]
          "
              />

              <div
                className="
            border-l
            border-blue-500/30
            pl-3
            md:pl-4
          "
              >
                <p
                  className="
              text-blue-400
              text-[8px]
              sm:text-[9px]
              md:text-xs
              tracking-[0.2em]
              md:tracking-[0.3em]
              uppercase
            "
                >
                  National PG College
                </p>

                <h2
                  className="
              text-white
              text-lg
              sm:text-xl
              md:text-2xl
              lg:text-3xl
              font-bold
              leading-tight
            "
                >
                  TechFest <span className="text-blue-500">6.0</span>
                </h2>

                <p
                  className="
              hidden
              md:block
              text-gray-500
              text-xs
              lg:text-sm
              mt-1
            "
                >
                  Technology Driven.
                </p>
              </div>
            </Link>

            {/* ================= QUICK LINKS ================= */}

            <ul
              className="
          flex
          flex-wrap
          justify-center
          items-center
          gap-x-5
          gap-y-2
          md:gap-x-7
          lg:gap-x-9
          text-xs
          sm:text-sm
          md:text-base
        "
            >
              {quickLinks?.map((l) =>
                l.active ? (
                  <li key={l.name}>
                    <a
                      href={
                        l.name === "Brochure"
                          ? "/brochure/Techfest 5.0 Brochure.pdf"
                          : l.slug
                      }
                      download={l.name === "Brochure" ? true : false}
                      onClick={
                        l.name === "Brochure"
                          ? () => {
                              setTimeout(() => {
                                setDownload((p) => ({
                                  ...p,
                                  status: !status,
                                }));
                              }, 500);

                              setTimeout(() => {
                                setDownload((p) => ({
                                  ...p,
                                  fade: "customFade",
                                }));
                              }, 1000);

                              setDownload((p) => ({
                                status: !status,
                                fade: "reverseFade",
                              }));
                            }
                          : null
                      }
                      className="
                  text-gray-500
                  hover:text-blue-400
                  transition-colors
                  duration-300
                "
                    >
                      {l.name}
                    </a>
                  </li>
                ) : null,
              )}
            </ul>

            {/* ================= SOCIALS ================= */}

            <div
              className="
          flex
          items-center
          gap-2
          md:gap-3
          lg:gap-4
        "
            >
              {socialMediaAcc?.map((sma, i) =>
                sma.active ? (
                  <Link
                    key={i}
                    to={sma.slug}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                w-8
                h-8
                sm:w-9
                sm:h-9
                md:w-10
                md:h-10
                flex
                items-center
                justify-center
                rounded-full
                border
                border-blue-500/25
                bg-[#02021a]
                text-gray-400
                hover:text-blue-400
                hover:border-blue-400/60
                hover:shadow-[0_0_15px_rgba(0,140,255,0.22)]
                transition-all
                duration-300
              "
                  >
                    {sma.icon}
                  </Link>
                ) : null,
              )}
            </div>
          </div>

          {/* ================= BOTTOM ================= */}

          <div
            className="
        mt-4
        md:mt-7
        pt-3
        md:pt-5
        border-t
        border-blue-500/10
        flex
        flex-col
        sm:flex-row
        justify-between
        items-center
        gap-1
        md:gap-2
        text-center
      "
          >
            <p
              className="
          text-gray-600
          text-[9px]
          sm:text-[10px]
          md:text-xs
        "
            >
              © TechFest 6.0 — All Rights Reserved.
            </p>

            <p
              className="
          text-blue-500/50
          text-[8px]
          sm:text-[9px]
          md:text-[10px]
          tracking-[0.2em]
          uppercase
        "
            >
              Technology Driven
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
