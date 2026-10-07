import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import "../Custom.css";
import { Link, useNavigate } from "react-router-dom";

const Activate = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  //calling for visibility effect
  useEffect(() => {
    setTimeout(() => {
      setVisible(!visible);
    }, 800);
  }, []);

  return (
    <>
      <div
        className={`h-[85vh] md:h-[94vh] w-full  ${visible ? "" : "hidden"} flex justify-center items-center`}
      >
        <Logo animate={`popUp`} />
      </div>
      <main className={`${visible ? "hidden" : ""} w-full h-[100%]`}>
        <div
          className="h-[100%] w-full py-10 md:py-2
        "
        >
          <h1
            className="font-bold text-[62px] text-grad text-center md:text-[6rem] reverseFade w-full
          "
          >
            TechFest 6.0
          </h1>
          <p className="text-xl md:text-3xl text-grad text-center reverseFade mb-[18px] uppercase font-semibold">
            Technology Driven
          </p>
          <p className="text-lg md:text-2xl text-grad text-center reverseFade my-2">
            ( 21<sup className="text-grad">st</sup>, 22
            <sup className="text-grad">nd</sup> &amp; 23
            <sup className="text-grad">rd</sup> January 2026 )
          </p>
          <div className="mt-5 w-[100%] flex justify-center">
            <button
              onClick={() => {
                setTimeout(() => {
                  navigate("/home");
                }, 200);
              }}
            >
              <Logo />
            </button>
          </div>
        </div>

        <div className="h-[100%] pb-20 text-center">
          <h1
            className="text-xl text-grad text-center md:text-2xl reverseFade 
          "
          >
            Presented by
          </h1>

          <p
            className="text-[15px] md:text-3xl text-grad text-center reverseFade 
          "
          >
            Department of Computer Science
          </p>

          <p className="text-[15px] md:text-3xl text-grad text-center reverseFade">
            National P.G. College
          </p>
          <p className="text-[10px] md:text-3xl text-grad text-center reverseFade">
            Lucknow
          </p>
        </div>
      </main>
    </>
  );
};

export default Activate;
