import React, { useState } from "react";
import "../Custom.css";

//SPONSORS
import idp from "../assets/sponsors/idp.png";
// import imps from "../assets/sponsors/imps.png";
// import itv from "../assets/sponsors/it-vedant.png";

const AboutPage = () => {
  const [showQuery, setShowQuery] = useState(null);

  const sponsors = [idp];
  const terms_and_conditions = [
    {
      k: 1,
      heading: "Purpose of the Event",
      disc: "TechFest 6.0 is designed to inspire innovation, encourage skill development, and provide a platform for students to showcase their talent in science, technology, and emerging fields. We invite and encourage school and college students to participate, explore their potential, and turn their ideas into action.The event brings together young minds to learn, build, compete, and innovate in a collaborative and challenging environment, celebrating creativity, technical skills, and the spirit of innovation.",
    },
    {
      k: 2,
      heading: "Registration",
      // disc: "The deadline for registration is in February, 2026. Participants may edit their registration details by contacting the registration team, but cancellations are not permitted once registration is confirmed.",
      disc: "Registrations for TechFest 6.0 will open soon. Stay tuned and get ready to innovate, compete, and create!",
    },
    {
      k: 3,
      heading: "Participation Rules",
      disc: "Participants must maintain decorum and discipline throughout the event. Event-specific rules will be provided and must be adhered to by all participants. Participants may register for multiple events, provided there are no timing or scheduling conflicts",
    },
    {
      k: 4,
      heading: "Fees and Payments",
      disc: "The registration fee is non-refundable once an admit card has been issued. Payments can be made via UPI and will be verified by your given upi id.",
    },
    {
      k: 5,
      heading: "Event Modifications and Cancellations",
      disc: "The organizing team reserves the right to modify event dates, schedules, or other details as needed. In the unlikely event of a cancellation, all participants will receive a full refund of their registration fees.",
    },
    {
      k: 6,
      heading: "Liability Disclaimer",
      disc: "The organizers of TechFest 6.0 shall not be held responsible for any unforeseen circumstances that may affect the event, including technical issues, delays, changes in schedule, or cancellation. The organizers reserve the right to make necessary changes to the event arrangements when required.",
    },
    {
      k: 7,
      heading: "Intellectual Property",
      disc: "Participants retain full ownership and rights to their projects, ideas, designs, code, and other original submissions created or presented during TechFest 6.0. The organizers do not claim ownership of participants’ intellectual property. Participants are responsible for ensuring that their submissions do not infringe upon the intellectual property rights of any third party.",
    },
    {
      k: 8,
      heading: "Contact Information",
      disc: "For any questions regarding these Terms and Conditions, please refer to the Contact Us Section on our website's About Us page.",
    },
  ];

  const privacy_policy = [
    {
      k: 1,
      heading: "Information We Collect",
      disc: "Personal Information: During registration, we collect your name, email address, phone number, college name, and college ID. Additionally, we may verify your identity using your Aadhaar card.",
    },
    {
      k: 2,
      heading: "Use of Collected Information",
      disc: "We use the collected information solely for processing your registration for the event. We do not use your data for promotional purposes.",
    },
    {
      k: 3,
      heading: "Data Sharing",
      disc: "We respect the privacy of all participants. Personal information collected during TechFest 6.0 will not be sold or shared with unauthorized third parties. Information may be shared with authorized personnel or service providers only when necessary for registration, payment verification, event management, or as required by applicable law.",
    },
    {
      k: 4,
      heading: "Data Protection",
      disc: "We take reasonable measures to protect participants’ personal information from unauthorized access, misuse, alteration, or disclosure. Access to participant data is limited to authorized personnel involved in organizing and managing TechFest 6.0. Participants are expected to provide accurate information during registration, and reasonable precautions will be taken to maintain the confidentiality and security of the information provided.",
    },
    {
      k: 5,
      heading: "Cookies and Sessions",
      disc: "We use session-based technologies to save participants' IDs temporarily during the registration process.",
    },
    {
      k: 6,
      heading: "User Rights",
      disc: "Participants can access, update, or request deletion of their personal information by contacting us through the details provided on our Contact Us page. Support is available via email and phone.",
    },
    {
      k: 7,
      heading: "Data Retention",
      disc: "We retain participants' data for a maximum of three months after the event.",
    },
    {
      k: 8,
      heading: "Changes to This Privacy Policy",
      disc: "We reserve the right to update this Privacy Policy at any time. Participants will be notified of any changes through email and updates on our website.",
    },
    {
      k: 9,
      heading: "Contact Information",
      disc: "If you have any questions about this Privacy Policy, please contact us via email or phone. Contact details are provided on the Contact Us page.",
    },
  ];

  const refund_policy = [
    {
      k: 1,
      heading: "Refund Eligibility",
      disc: "Refunds will be provided under the following conditions:-",
      conditions: [
        {
          heading: "Event Cancellation:",
          disc: "If the event is cancelled by the organizers, participants will be eligible for a full refund.",
        },
        {
          heading: "Refunds Not Allowed:",
          disc: "Refund requests will not be processed once the participant has received the admit card.",
        },
      ],
    },
    {
      k: 2,
      heading: "Refund Process",
      disc: "Participants wishing to request a refund must follow these steps:-",
      conditions: [
        {
          heading: "How to Request:",
          disc: "Refund requests should be submitted via email or phone.",
        },
        {
          heading: "Required Information:",
          disc: "Participants need to provide the following details for a refund request Transaction ID, Participant Name, Contact Details",
        },
        {
          heading: "Refund Processing Time:",
          disc: "Refund requests will be processed within 7-8 working days and credited to the participant’s bank account.",
        },
      ],
    },
    {
      k: 3,
      heading: "Cancellation Rules",
      disc: "Participants wishing to request a refund must follow these steps:-",
      conditions: [
        {
          heading: "Cancellation by Participant:",
          disc: "Participants are not allowed to cancel their registration once submitted, except in the case of event cancellation by the organizers.",
        },
        {
          heading: "Exceptions:",
          disc: "There are no exceptions for cancellations, including medical emergencies.",
        },
      ],
    },
    {
      k: 4,
      heading: "Mode of Refund",
      disc: "Refunds will be processed using the original payment method, which may include:-",
      conditions: [
        {
          heading: "Razorpay:",
          disc: "If used for payment.",
        },
        {
          heading: "UPI:",
          disc: "If the payment was made via UPI.",
        },
      ],
    },
    {
      k: 5,
      heading: "Event Cancellation by Organizers",
      disc: "",
      conditions: [
        {
          heading: "In Case of Cancellation or Rescheduling:",
          disc: "If Techfest 6.0 is cancelled or rescheduled by the organizers, all participants will be eligible for a full refund.",
        },
        {
          heading: "Full Refund Assurance:",
          disc: "A full refund will be credited if the event is cancelled by the organizers.",
        },
      ],
    },
  ];

  const queries = [
    {
      query: "Who can participate?",
      ans: "TechFest 6.0 welcomes students from schools, colleges, and universities who are passionate about technology, innovation, creativity, and problem-solving. Participants can take part in events according to the eligibility and team-size requirements of each event.",
    },
    {
      query: "Who do I contact for more queries?",
      ans: "For any questions or assistance regarding TechFest 6.0, please refer to the Contact Us section for the official contact details of the organizing team and event coordinators. We’ll be happy to help!",
    },
    {
      query: "What should I bring?",
      ans: "Please bring your registration confirmation, valid ID card, and any other documents specified for your event. Participants should also carry any personal equipment or accessories required for their respective event. Specific requirements, if any, will be communicated by the organizing team.",
    },
  ];

  return (
    <container className="">
      <h1
        id="aboutus"
        className="text-5xl md:text-6xl text-center text-grad font-bold tracking-wide mt-2"
      >
        About Us
      </h1>
      <section className="my-8 ">
        <div className=" my-2 w-[100%] flex-wrap">
          {/* <p className="text-gray-300 w-auto px-5 text-justify "><a href="https://www.npgc.in/" target="_blank"><span className="text-grad font-extrabold font-mono">National Post Graduate College</span></a>, established in 2005, stands as a beacon of academic excellence and innovation. With a serene and inclusive campus, the college is dedicated to nurturing talent and fostering growth in every student. The Computer Science department, a cornerstone of the institution, embraces the latest technological advancements to deliver a robust, industry-oriented education. The college equips students with the skills and confidence to excel in their chosen fields by emphasizing research, internships, and hands-on learning. Complemented by a vibrant array of cultural, sports, and extracurricular opportunities, the college shapes well-rounded individuals prepared to make meaningful contributions to society.
            </p> */}
          <p className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-justify text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-gray-300 font-medium text-justify">
            <a
              href="https://www.npgc.in/"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <span className="text-blue-500 font-bold ">
                National Post Graduate College
              </span>
            </a>
            , established in 2005, stands as a beacon of academic excellence and
            innovation. With a serene and inclusive campus, the college is
            dedicated to nurturing talent and fostering growth in every student.
            The Computer Science department, a cornerstone of the institution,
            embraces the latest technological advancements to deliver a robust,
            industry-oriented education. The college equips students with the
            skills and confidence to excel in their chosen fields by emphasizing
            research, internships, and hands-on learning. Complemented by a
            vibrant array of cultural, sports, and extracurricular
            opportunities, the college shapes well-rounded individuals prepared
            to make meaningful contributions to society.
          </p>
        </div>
      </section>

      {/* SECTION FOR CODE OF CUNDUCT */}
      {
        <section id="coc" className="aboutpage ">
          <h2 className="mb-2 font-bold">Code of Conduct</h2>
          <div className="overflow-auto">
            <ul>
              {terms_and_conditions.map((tnC) => (
                <>
                  <li key={tnC.k} className="text-xl my-4 text-grad">
                    {tnC.k}. {tnC.heading}
                  </li>
                  <li className="text-sm pl-6 text-justify">{tnC.disc}</li>
                </>
              ))}
            </ul>
          </div>
        </section>
      }

      {/* SECTION FOR PRIVACY AND POLICY */}
      {
        <section id="privacy-policy" className="aboutpage">
          <h2 className="mb-2 font-bold">Privacy Policy</h2>
          <p className="text-gray-300 w-auto text-justify text-sm">
            This Privacy Policy explains how{" "}
            <a href="/">
              <span className="text-grad font-extrabold  font-mono">
                Techfest 6.0
              </span>
            </a>
            , organized by National Post Graduate College, Lucknow, collects,
            uses, and protects your information.
          </p>
          <div className="overflow-auto">
            <ul>
              {privacy_policy.map((pnp) => (
                <>
                  <li key={pnp.k} className="text-xl my-4 text-grad">
                    {pnp.k}. {pnp.heading}
                  </li>
                  <li className="text-sm pl-6 text-justify">{pnp.disc}</li>
                </>
              ))}
            </ul>
          </div>
        </section>
      }

      {/* SECTION FOR REFUND POLICY */}
      {
        <section id="refund-policy" className="aboutpage">
          <h2 className="mb-2 font-bold">Refund and Cancellation Policy</h2>
          <p className="text-gray-300 w-auto text-justify text-sm">
            We want to ensure a smooth and transparent process for all
            participants of{" "}
            <a href="/">
              <span className="text-grad font-extrabold  font-mono">
                Techfest 6.0
              </span>
            </a>
            . Below is our Refund and Cancellation Policy:
          </p>
          <div className="overflow-auto">
            <ul>
              {refund_policy.map((rp) => (
                <>
                  <li key={rp.k} className="text-xl my-4 text-grad">
                    {rp.k}. {rp.heading}
                  </li>
                  <li className="text-sm pl-6 text-justify">
                    {rp.disc}
                    <ul>
                      {rp.conditions?.map((co, index) => (
                        <>
                          <li key={index} className="text-xl my-4 text-grad">
                            {String.fromCharCode(index + 97)}) {co.heading}
                          </li>
                          <li className="text-sm pl-6 text-justify">
                            {co.disc}
                          </li>
                        </>
                      ))}
                    </ul>
                  </li>
                </>
              ))}
            </ul>
          </div>
          <p className="text-gray-300 w-auto text-justify text-sm my-10">
            We hope this policy helps clarify any questions you may have. Thank
            you for participating in{" "}
            <a href="/">
              <span className="text-grad font-extrabold  font-mono">
                Techfest 6.0
              </span>
            </a>{" "}
            !
          </p>
        </section>
      }

      {/* SECTION FOR SPONSORS */}
      {
        <section id="sponsors" className="aboutpage">
          <h2 className="mb-0 font-bold">Our Esteemed Sponsors</h2>
          <div className="bg-transparent-blur text-[16px] text-justify p-4 my-4 font-bold border-[1px] border-[#aaa] md:flex justify-around">
            {sponsors.map((sp, i) => (
              <img
                className="my-2 w-[100%] md:w-[15%] rounded border-[1px] border-black-700"
                src={sp}
                id={i}
              ></img>
            ))}
          </div>
        </section>
      }

      {/* SECTION FOR QUERIES */}
      {
        <section id="query" className="aboutpage">
          <h2 className="mb-2 font-bold">Queries</h2>
          {queries.map((q, index) => (
            <div className="border-[1px] border-[#aaa] bg-transparent-blur p-2 my-4 font-bold">
              <button
                id={index}
                className="text-start text-lg text-grad w-[90%]"
                onClick={() => {
                  setShowQuery((prev) => (showQuery === index ? null : index));
                }}
              >
                {q.query}
              </button>
              {showQuery === index && (
                <div
                  id={`query-about-${index}`}
                  className="bg-transparent-blur m-2"
                >
                  <p className={`text-sm text-justify p-4`}>{q.ans}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      }

      {/* SECTION FOR CONTACTING */}
      {
        <section id="contactus" className="aboutpage">
          <h2 class="mb-2 font-bold">Contact Us</h2>
          <p className="text-lg my-3">
            <strong className="text-grad">Email Address: </strong>
            <a className="block" href="mailto:techfest5.0@gmail.com">
              techfest6.0npgc@gmail.com
            </a>
          </p>
          <p className="text-lg my-3">
            <strong className="text-grad">Operational Address: </strong>
            <a
              className="block"
              href="geo:26.8500,80.9490?q=National+PG+College"
            >
              National Post Graduate College, 2 Rana Pratap Marg, Hazratganj,
              Lucknow, Uttar Pradesh, India
            </a>
          </p>
          <p className="text-lg my-3">
            <strong className="text-grad">Sutdent Coordinators: </strong>
            <a className="block" href="tel:+919140184684">
              +91 9140184684
            </a>
            <a className="block" href="tel:+919695130642">
              +91 9695130642
            </a>
          </p>
        </section>
      }
    </container>
  );
};

export default AboutPage;
