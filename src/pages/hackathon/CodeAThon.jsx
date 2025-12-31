import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../../Custom.css';
import CodeAthon from '../../assets/logo/codeAthon.png'
import Button from '../../components/Button'

const CodeAThon = () => {
  const navigate = useNavigate();
  const schedule = [
  {
    time: "8:00 – 9:00 AM",
    details: "Registration + Morning Refreshment",
  },
  {
    time: "9:00 – 9:30 AM",
    details: "Opening & Briefing",
  },
  {
    time: "9:30 – 2:00 PM",
    details: "Coding Phase 1",
  },
  {
    time: "2:00 – 2:30 PM",
    details: "Afternoon Refreshment",
  },
  {
    time: "2:30 – 4:00 PM",
    details: "Coding Phase 2",
  },
  {
    time: "4:30 – 5:00 PM",
    details: "Project Submission",
  },
  {
    time: "Next Day",
    details: "Presentation, Judging & Certificate Distribution",
  },
]
  const rules = [
  "Any violation of rules will result in disqualification.",
  "Latecomers will be disqualified.",
  "All participants must maintain a respectful and collaborative environment. Harassment, discrimination, or any form of misconduct will not be tolerated and will lead to immediate disqualification.",
  "The organizing team reserves the right to modify event dates, schedules, rules, or other details as needed. In the unlikely event of a cancellation, all participants will receive a full refund of their registration fees.",
  "The hackathon is open to all students of any college or university.",
  "Teams must consist of a minimum of 2 and maximum of 4 members.",
  "All team members must be officially registered for the hackathon before it commences.",
  "No changes to team members are allowed after the hackathon has officially started.",
  "Participants are not allowed to cancel their registration once submitted, except in the case of event cancellation by the organizers.",
  "All teams will be given 8 hours on the first day to build, deploy, and submit their project. The first 30 minutes will be reserved for the welcome speech, explanation of rules, judging criteria, submission process, and announcement of the theme/problem statement.",
  "Teams must start all development from scratch at the beginning of the event.",
  "Teams are required to work on one problem statement.",
  "All team members must be present for the duration of the event.",
  "Teams can use any tech stack they prefer (e.g., MERN Stack, MEAN Stack, MEVN Stack, Django Stack, etc.).",
  "Implement 2 to 4 backend functionalities.",
  "Projects without backend functionality will be accepted; however, no marks/points will be awarded for backend functionality.",
  "No pre-written code is allowed. Use of AI is strictly prohibited. Only open-source libraries approved by the organizers are permitted.",
  "All teams retain full ownership of what they build. However, organizers may showcase the projects for promotional purposes with due credit to the respective teams.",
  "Every participant must bring their own necessary technical equipment and have their own internet connection (like laptop, laptop charger etc.).",
  "Mentorship will be provided to teams during the event to guide them as needed.",
  "No use of internet is allowed at the time of ongoing event.",
  "Internet will be allowed only in the first and last hour of the hackathon for dependencies, setup, and GitHub push.",
  "Internet will be provided only if participants don’t have their own; otherwise, they must arrange it themselves.",
  "Teams must push their complete project on GitHub and have to host it.",
  "Any changes to the code or project after submission will result in disqualification.",
  "Teams must present their projects to the judges either on the same day after coding or on the following day, depending on the event schedule.",
  "Teams must submit an abstract of the project, project code files/snapshots, presentation file, GitHub repo of the project and working URL of the website.",
  "Teams must submit their project through e-mail, Google Forms, or any other platform specified by the organizers. Late submissions will not be accepted.",
  ];
  const rules_judging=[
    {
      heading:'Competition Rules',
      rules:rules,
    },
    {
      heading:'Judging Criteria',
      rules:["UI/UX (50%)","Functionality and Technical Complexity (30%)","Innovation (10%)","Presentation Skills (10%)"],
    }
  ]

  return (
  <div className="h-auto w-full reverseFade">
    {/* LOGO CREATED FROM DIV*/}
    {
    <div className=" h-auto w-full p-20 md:p-auto">
      <div className="h-[8rem] w-[8rem] md:sticky left-[40%]">
        {/*Rings*/}
        <div className="p-2 h-full w-full size border-8 border-[#5D00ff] rotate-45">
        <div className="absolute right-2 p-2 h-full w-full border-8 border-[#5D00ff]">
          <div className="absolute -right-2 bottom-2 p-2 h-full w-full border-b-8  border-l-8 border-[#5D00ff]">
          </div>
        </div>
      </div>
        <pre className='relative bottom-20 left-12 tracking-[10px] text-white font-bold  bg-[#000011] w-auto p-1'>CODE-A-THON</pre>
      </div>
    </div>
    }
    
    {/* LOGO PNG*/}
    <div className='pt-0 mt-0 h-[20rem] flex justify-center hidden'>
      <img src={CodeAthon} />
    </div>
    
    <div className=' flex justify-center'>
      <Button
      onClick={()=>{
        navigate('/register');
      }}
      >Register Now »</Button>
    </div>
    
    <section className="p-6 space-y-8 text-gray-300">
      {/* Event Overview */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-grad">1. Event Overview</h2>
        <p
        className='text-justify'
        >
          The Mini Hackathon is designed to challenge participants and test
          their technical skills, communication ability, and logical thinking.
          In this hackathon a central problem statement will be provided to all
          teams, and participants must identify sub-problems within it to build
          practical, innovative solutions. Each team will develop a working
          project, focusing on both frontend design and backend functionality,
          ensuring a complete and impactful prototype. The criteria on which the
          projects will be evaluated are given below under the Rules and Judging
          Criteria section.
        </p>
        <ul className="list-disc mt-3 ml-3 space-y-2">
          <li>
            <strong>Objective:</strong> To challenge participants to design and
            build a functional web site within a set time frame, while fostering
            teamwork, creativity, and technical skills.
          </li>
          
          <li>
            <strong>Team Size:</strong> 2–4 members per team.
          </li>
        </ul>
      </div>

      {/* Rules & Judging Criteria */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-grad">2. Rules &amp; Judging Criteria</h2>
       { rules_judging.map((rj, index) =>(
         <>
          <h3 className="text-xl mt-4 ml-2 font-semibold">{rj.heading}</h3>
          <ul className="list-disc ml-6 space-y-2">
            { (rj.rules).map((rule, i) => 
            <li
            className='my-3 text-justify'
            key={i}
            >{rule}</li>
            )
            }
          </ul>
        </>
        ))
       }
      </div>

      {/* Schedule */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-grad">3. Day-of-Event Schedule</h2>
        <table className="table-auto border-collapse border border-gray-400 w-full text-left">
          <tbody>
          { schedule.map((element, index) =>(
            <tr
            key={index}
            >
              <td className="border border-gray-400 p-2">{element.time}</td>
              <td className="border border-gray-400 p-2">
                {element.details}
              </td>
            </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </section>

    </div>
  )
}


export default CodeAThon;