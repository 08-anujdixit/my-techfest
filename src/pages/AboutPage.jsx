import React,{useState} from 'react';
import '../Custom.css';

const AboutPage = () => {
  const [showQuery,setShowQuery] = useState(null)
  
  const terms_and_conditions =[
    {
      k: 1,
      heading: 'Purpose of the Event',
      disc: "TechFest 4.0 aims to inspire innovation, foster skill development, and showcase talent in science and technology. Participation is open to students currently enrolled in any college.",
    },
    {
      k: 2,
      heading: 'Registration',
      disc: "The deadline for registration is February 1, 2025. Participants may edit their registration details by contacting the registration team, but cancellations are not permitted once registration is confirmed.",
    },
    {
      k: 3,
      heading: 'Participation Rules',
      disc: "Participants must maintain decorum and discipline throughout the event. Event-specific rules will be provided and must be adhered to by all participants. Participants may register for multiple events, provided there are no timing or scheduling conflicts",
    },
    {
      k: 4,
      heading: 'Fees and Payments',
      disc: "The registration fee is non-refundable once an admit card has been issued. Payments can be made via UPI and will be verified by your given upi id.",
    },
    {
      k: 5,
      heading: 'Event Modifications and Cancellations',
      disc: "The organizing team reserves the right to modify event dates, schedules, or other details as needed. In the unlikely event of a cancellation, all participants will receive a full refund of their registration fees.",
    },
    {
      k: 6,
      heading: 'Liability Disclaimer',
      disc: "The organizers shall not be held liable for any unforeseen issues, including technical problems, delays, or cancellations, that may impact the event.",
    },
    {
      k: 7,
      heading: 'Intellectual Property',
      disc: "Participants retain full rights to any projects, ideas, or submissions made during the event. The organizers do not claim any ownership or rights over participants' intellectual property.",
    },
    {
      k: 8,
      heading: 'Contact Information',
      disc: "For any questions regarding these Terms and Conditions, please refer to the Contact Us Section on our website's About Us page.",
    },
  ]
  
  const queries=[
    {
      query:'Who can participate?',
      ans:'Anyone with a passion for tech can participate — students from any college, developers, and designers are all welcome.'
    },
    {
      query:'Who do I contact for queries?',
      ans:'You can reach out to us at techfest.npgc@gmail.com or DM us on Instagram or LinkedIn @techfest5.0, We’re happy to help!'
    },
  ]
  
  return (
  <container className='reverseFade' >
    <h1
    id="aboutus"
    className='text-6xl text-center text-grad'>
      ABOUT US
    </h1>
    <section className="my-8 ">
        <div className=" my-2 w-[100%] flex-wrap">
            <p className="text-gray-300 w-auto px-5 text-justify "><span className="text-grad font-extrabold  font-mono">National Post Graduate College</span>, established in 2005, stands as a beacon of academic excellence and innovation. With a serene and inclusive campus, the college is dedicated to nurturing talent and fostering growth in every student. The Computer Science department, a cornerstone of the institution, embraces the latest technological advancements to deliver a robust, industry-oriented education. The college equips students with the skills and confidence to excel in their chosen fields by emphasizing research, internships, and hands-on learning. Complemented by a vibrant array of cultural, sports, and extracurricular opportunities, the college shapes well-rounded individuals prepared to make meaningful contributions to society.
            </p>
        </div>
      </section>
    
    {/* SECTION FOR CODE OF CUNDUCT */}
    <section id="coc" className="aboutpage custom-hover">
        <h2 className="mb-2">
          Code of Conduct
        </h2>
        <div className="overflow-auto">
        <ul>
          {
            terms_and_conditions.map((tnC) =>(
              <>
                <li
                key={tnC.k}
                className="text-xl my-4 text-grad">
                 {tnC.k}. {tnC.heading}
                </li>
                <li className="text-sm pl-6 text-justify">
                  {tnC.disc}
                </li>
             </>
            ))
          }
           </ul>
        </div>
    </section>
    
    {/* SECTION FOR SPONSORS */}
    <section id="sponsors" className="aboutpage">
      Core Members
    </section>
    
    {/* SECTION FOR SPONSORS */}
    <section id="sponsors" className="aboutpage">
      Sponsors
    </section>
    
    {/* SECTION FOR QUERIES */}
    <section id="query" className="aboutpage">
      <h1 className="mb-2">
        Queries
      </h1>
      {
      queries.map((q, index) => (
        <div className="border-[1px] border-[#aaa] bg-transparent-blur p-2 my-4">
          <button
          id={index}
          className="text-start text-lg text-grad w-[90%]"
          onClick={()=>{
            setShowQuery((prev)=> showQuery===index?null:index);
          }}
          >
            {q.query}
          </button>
          {showQuery===index &&
            (<div 
          id={`query-about-${index}`}
          className="bg-transparent-blur m-2">
            <p className={`text-sm text-justify p-4`}>
            {q.ans}
            </p>
          </div>)
          }
      </div>
        
      ))
      }
    </section>
    
    {/* SECTION FOR CONTACTING */}
    <section id="contactus" className="aboutpage">
      Contact Us
      <p className="text-lg my-3">
        <strong className='text-grad'>Email Address: </strong>
        <p>techfest.npgc@gmail.com</p>
      </p>
      <p className="text-lg my-3">
        <strong className='text-grad'>Operational Address: </strong>
        <p>National Post Graduate College, Rana Pratap Marg, Hazratganj, Lucknow, Uttar Pradesh, India</p>
      </p>
      <p className="text-lg my-3">
        <strong className='text-grad'>Sutdent Coordinators: </strong>
        <p>contact 1</p>
        <p>contact 2</p>
      </p>
    </section>
    
  </container>
  );
};


export default AboutPage;