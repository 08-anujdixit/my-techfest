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
    details: "Registration",
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
  
  const hackathonRules = [
  "Any violation of rules will result in immediate disqualification.",

  "Latecomers will be disqualified.",

  "All participants must maintain a respectful and collaborative environment. Harassment, discrimination, or any form of misconduct will lead to immediate disqualification.",

  "The organizing team reserves the right to modify event dates, schedules, rules, or other details as required. In case of event cancellation, a full refund of the registration fee will be provided.",

  "The hackathon is open to students from any college or university.",

  "Teams must consist of a minimum of 2 and a maximum of 4 members.",

  "All team members must be officially registered before the hackathon begins.",

  "No changes to team members are allowed after the hackathon has officially started.",

  "Participants cannot cancel their registration once submitted, except in the case of event cancellation by the organizers.",

  "Teams will be given a total of 8 hours to build, deploy, and submit their project. The first 30 minutes will be reserved for the welcome session, rules explanation, judging criteria, submission process, and announcement of the problem statement.",

  "All development must start from scratch at the beginning of the event.",

  "Teams are required to work on only one problem statement.",

  "All team members must be present for the entire duration of the event.",

  "Teams may use any preferred technology stack such as MERN, MEAN, MEVN, Django, etc.",

  "Teams are encouraged to implement 2 to 4 backend functionalities.",

  "Mentorship will be provided during the event to guide teams when required.",

  "Projects without backend functionality will be accepted; however, no marks will be awarded for backend implementation.",

  "Use of pre-written code and AI-based code generation tools is strictly prohibited. Only approved open-source libraries may be used.",

  "Teams retain full ownership of their projects. Organizers may showcase the projects for promotional purposes with proper credit.",

  "Participants must bring their own technical equipment such as laptops, chargers, and required accessories.",

  "Internet access is allowed throughout the event for documentation, package installation, debugging, and deployment.",

  "Internet will be provided only if participants do not have their own; otherwise, they must arrange it themselves.",

  "Teams must push their complete project to GitHub and deploy the project.",

  "Final evaluation will be based on the GitHub repository state at the submission deadline.",

  "The submission timestamp will be considered as the GitHub push time, not the local commit time.",

  "Any changes made to the project after submission will result in disqualification.",

  "Teams must present their projects to the judges either on the same day after coding or on the following day, depending on the event schedule.",

  "Teams must submit the project abstract, source code or snapshots, final GitHub push screenshot, presentation file, GitHub repository link, and a working deployment URL.",

  "Project submissions must be made via email, Google Forms, or any other platform specified by the organizers. Late submissions will not be accepted."
];
  
  const rules_judging=[
    {
      heading:'Competition Rules',
      rules: hackathonRules,
    },
    {
      heading:'Judging Criteria',
      rules:["UI/UX (50%)","Functionality and Technical Complexity (30%)","Innovation (10%)","Presentation Skills (10%)"],
    }
  ]

  return (
    <div className="h-auto w-full">
      {/* LOGO PNG*/}
      <div className='pt-0 mt-0 h-[20rem] flex justify-center '>
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
            The Hackathon is designed to challenge participants and test
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
         { 
           rules_judging.map((rj, index) =>(
             <>
                <h3 className="text-xl mt-4 ml-2 font-semibold">{rj.heading}</h3>
                <ul className="list-disc ml-6 space-y-2">
                  { 
                    (rj.rules).map((rule, i) => 
                      <li
                      className='my-3 text-justify'
                      key={i}
                      >{rule}</li>)
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
            { 
              schedule.map((element, index) =>(
                <tr
                key={index}
                >
                  <td className="border border-gray-400 p-2 w-[40%] md:w-auto">{element.time}</td>
                  <td className="border border-gray-400 p-2 w-auto">
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