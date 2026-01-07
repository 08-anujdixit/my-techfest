import React, {useEffect, useState} from 'react';
import '../Custom.css'


const EventRules = ({event})=>{
  const [showRules, setShowRules] = useState(true);
  const [rules, setRules] = useState([]);
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
  const expoRenaissanceRules = [
  "The event showcases advancements in robotics, software, artificial intelligence, and machine learning models.",
  "Project dimensions (if it is a physical model) and a brief description (within 20 words) must be provided.",
  "Mini-projects are not allowed.",
  "A team can have a maximum of 4 members.",
  "Participants must bring their own laptops for project presentations and explanations.",
  "All participants and visitors must pre-register online or on-site before entering the expo.",
  "Booths must be set up within the allotted time frame before the expo begins.",
  "All electrical equipment and setups must comply with safety standards.",
  "Participants must maintain cleanliness in and around their booth area.",
  "Presentations or demonstrations must be limited to the designated area to avoid overcrowding.",
  "All displayed projects must be original and developed by the participants.",
  "Plagiarized content is strictly prohibited and may lead to disqualification.",
  "All materials presented must be appropriate and must not include offensive or sensitive content.",
  "Participants must bring valid identity proof (Aadhaar Card and College ID Card) for verification.",
  "Latecomers will be disqualified.",
  "All participants and visitors must behave professionally and respectfully.",
  "Any form of disrespectful behavior will result in immediate disqualification.",
  "Participants must strictly adhere to the presentation timings scheduled by the organizers.",
  "Participants are responsible for the safety of their personal belongings.",
  "Evaluation criteria include innovation, presentation, technical complexity, and relevance."
];
  const raftDebateRules = [
  "Participants are placed in a critical tech-apocalypse scenario where limited resources allow only one individual to survive.",
  "Each participant must select a tech professional role during online registration.",
  "Participants must justify why their selected role deserves survival.",
  "The event consists of a single Main Round followed by a Rebuttal Round.",

  // Main Round
  "In the Main Round, each participant will be given 1 minute and 30 seconds to present their argument.",
  "A warning bell will ring 15 seconds before the allotted time ends.",
  "Exceeding the time limit may result in negative marking.",

  // Rebuttal Round
  "In the Rebuttal Round, each participant will be given 1 minute for cross-questioning.",
  "Participants may counter or challenge arguments presented by other speakers.",
  "Rebuttals must be relevant, respectful, and logical.",
  "Use of foul or inappropriate language will lead to immediate disqualification.",

  // Role Allotment
  "Tech professional roles are allotted on a First Come First Serve (FCFS) basis.",
  "Participants registering earlier will get priority in role selection.",
  "Once selected, a role cannot be changed or repeated.",

  // General Rules
  "No props, notes, or electronic devices are allowed during the event.",
  "Only individual participation is permitted.",
  "All content must be original and technology-oriented.",

  // Judging Criteria
  "Judgment will be based on originality of content.",
  "Fluency and confidence will be considered during evaluation.",
  "Presentation style will be assessed.",
  "Clarity of thought and expression will be evaluated.",
  "Effectiveness of rebuttals will contribute to scoring.",
  "Overall impression will play a key role in final judgment."
];
  const itQuizRules = [
  // Team Rules
  "Each team must consist of exactly 2 members.",
  "Once registered, team composition cannot be changed on the event day.",
  "Latecomers will be disqualified.",

  // Prohibited Items
  "Use of mobile phones, smartwatches, calculators, or any electronic gadgets during the quiz is strictly prohibited.",

  // Round 1 – CBT
  "Round 1 will be a Computer-Based Test (CBT) covering MCQs from Computer Science fundamentals, logical reasoning, and technology awareness.",
  "Any form of malpractice during the CBT will result in immediate disqualification.",
  "Top qualifying teams from Round 1 will advance to the on-stage round.",

  // Round 2 – On-Stage Quiz
  "Round 2 will include multiple segments such as Quick Fire, Visual, Audio/Video, and Buzzer rounds.",
  "Teams must press the buzzer only after the quizmaster finishes reading the question; early buzzing may result in penalties.",
  "Once the buzzer is pressed, the team must answer immediately—no discussion time is allowed.",
  "Wrong answers in specific rounds may carry negative marking, as announced by the quizmaster.",
  "In case of a tie, a sudden-death buzzer tie-breaker round will be conducted.",

  // Audience & Conduct
  "Audience members are strictly prohibited from prompting, signaling, or assisting participants in any manner.",
  "Any form of misconduct, argument, or disturbance may lead to disqualification.",
  "Teams must maintain discipline, decorum, and show respect toward volunteers and organizers.",

  // Equipment & Responsibility
  "Replacement of any damaged equipment (buzzers, microphones, systems) due to negligence will be the responsibility of the concerned team.",

  // Certification & Authority
  "Certificates will be issued only to teams that complete their participation in the event.",
  "Decisions taken by the quizmaster and the judging panel shall be final and binding.",
  "The organizing committee reserves the right to modify rules if required; any changes will be announced before the round begins.",

  // Event Cancellation
  "In case of low participation, the organizers reserve the right to cancel the event, and all registration fees will be fully refunded."
];
  const logoDesigningRules = [
  "Solo participation is allowed for this event.",
  "Latecomers shall be disqualified.",
  "Participants must design their logos entirely from scratch.",
  "Use of pre-made templates, downloaded logos, or clipart from sources such as Canva stock is strictly prohibited.",
  "Participants are allowed to use shapes, fonts, colors, and icons available within design tools like Canva or Adobe Illustrator.",
  "Internet usage is permitted only for downloading fonts or icons, not for complete logo designs.",
  "The time limit for designing the logo is strictly 45 minutes.",
  "The final logo must be submitted in either .png or .jpg format.",
  "The file must be named in the following format: ParticipantName_Logo.png",
  "Participants must bring a valid Aadhaar Card and College ID Card for verification.",
  "Any form of disrespectful or inappropriate behavior will result in immediate disqualification.",
  "Participants are responsible for the safety of their personal belongings.",
  "The decision of the judges will be final and binding on all participants.",
  "Evaluation criteria include creativity, originality, relevance, simplicity, aesthetics, and overall impact."
];
  const characterDesigningRules = [
  "Only traditional hand-drawn artwork is allowed.",
  "Digital art, AI-generated designs, or pre-made assets are strictly prohibited.",
  "Any form of copying or plagiarism will result in immediate disqualification.",
  "Solo participation is allowed.",
  "Participants will have 2 hours to design both a protagonist and an antagonist based on the given theme.",
  "The theme will be revealed on the spot and must be strictly followed.",
  "Latecomers will be disqualified.",
  "Artwork must be created only on the A3 sheet provided by the organizers.",
  "Participants must write their name or ID only on the back of the sheet.",
  "Participants may bring their own drawing materials.",
  "Participants are responsible for their personal belongings and any damage caused to venue property or materials.",
  "Any misbehavior, disrespect towards volunteers or judges, or disruptive conduct will lead to disqualification.",
  "Evaluation criteria include creativity, relevance, character personality and storytelling, visual appeal and detailing, and presentation.",
  "Judges’ decisions will be final and binding."
];
  const thumbnailMakingRules = [
  "Solo participation is allowed.",
  "Use of AI-generated images is strictly prohibited; participants may use images sourced from Google.",
  "PicsArt or Canva must be used for thumbnail designing.",
  "If a participant uses a mobile phone for editing, no extra time will be provided.",
  "Computer systems will be provided by the college.",
  "Participants will be given exactly one hour to design the thumbnail.",
  "After the time limit, the thumbnail printout will be sent for judgment.",
  "Latecomers will be disqualified.",
  "Participants will be responsible for any damage or loss occurring in the lab.",
  "Any form of misbehavior or disrespect towards organizers or volunteers will result in disqualification.",
  "Plagiarism is strictly prohibited and may lead to immediate disqualification.",
  "The decision of the judges will be final and binding on all participants.",
  "All participants must bring valid identity proof (Aadhaar Card and College ID Card) for verification.",
  "Evaluation criteria include creativity, originality, humor, innovation, and overall presentation."
];
  const events=[
    {name:'Expo Renaissance', r: expoRenaissanceRules },
    {name:'CODE-A-THON', r: hackathonRules },
    {name:'Last Protocol', r:raftDebateRules },
    {name:'Pixel Perfect', r: thumbnailMakingRules },
    {name:'Future Forge', r: characterDesigningRules },
    {name:'IT Quiz', r: itQuizRules },
    {name:'Brand Blitz', r: logoDesigningRules },
  ];
  
  
  useEffect(()=>{
    for(let i=0; i<events.length; i++){
    if(event===events[i].name){
      setRules(events[i].r);
      break;
    }
  }
  },)
  
  
  return(
    <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[100%] text-center
      '>
      <button
        className="text-xl text-gray-200 font-bold  p-2 mb-2 bg-transparent-blur w-full"
        onClick={(e)=>{
        e.preventDefault();
        setShowRules((prev)=>!prev);
        }}
        >Rules and Regulations » </button>
      <div className="flex justify-between items-center mt-2">
          { showRules?
            <ul className="list-disc text-gray-300">
              { showRules && event ?
                (rules).map((rule, i) =>
                  <li
                    className='ml-6 text-left'
                    key={i}
                    >{rule}</li>
                ) : <p className="text-gray-300"> Please select an event to view all rules and regulations.</p>
              }
            </ul> : null
          }
      </div>
    </div>
  );
}

export default EventRules;