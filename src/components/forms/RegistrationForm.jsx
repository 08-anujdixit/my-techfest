import React,{useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import '../../Custom.css';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import tflogo from '../../assets/images/Tflogo.jpg'
import { MdOutlineDoneOutline } from "react-icons/md";
import { register } from "../../services/registrationService.js";
//QR CODES FOR TRANSACTIONS
import rs50 from '../../assets/qrImages/Rs50qr.jpg'
import rs100 from '../../assets/qrImages/Rs100qr.jpg'
import rs200 from '../../assets/qrImages/Rs200qr.jpg'
import rs600 from '../../assets/qrImages/Rs600qr.jpg'

const returnQR=(eName, events)=>{
  for (let i=0; i<events.length; i++){
    if(eName === (events[i]).name){
      return ((events[i]).qr);
    }
  }
  return tflogo;
}

const RegistrationForm = () => {
  const navigate = useNavigate();
  const events=[
    {name:'Choose Event to Enroll', status:false, fee: 0.0, qr: null },
    {name:'Expo Renaissance', status:true, fee: 200.00, qr: rs200 },
    {name:'CODE-A-THON', status:true, fee: 600.00, qr: rs600 },
    {name:'Last Protocol', status:true, fee: 100, qr: rs100 },
    {name:'Pixel Perfect', status:true, fee: 50.00, qr: rs50},
    {name:'Future Forge', status:true, fee: 50.00, qr: rs50},
    {name:'IT Quize', status:true, fee: 100.00, qr: rs100},
    {name:'Brand Blitz', status:true, fee: 50.00, qr: rs50},
  ];
  const techRoles = [
  { role:'Choose a role', status: false },
  { role: "Software Engineer", status: true },
  { role: "Artificial Intelligence Engineer", status: true },
  { role: "Ethical Hacker", status: true },
  { role: "Cybersecurity Analyst", status: true },
  { role: "Data Scientist", status: true },
  { role: "Cloud Architect", status: true },
  { role: "Network Engineer", status: true },
  { role: "Robotics Engineer", status: true },
  { role: "UI/UX Designer", status: true },
  { role: "Blockchain Developer", status: true },
  { role: "DevOps Engineer", status: true },
  { role: "Game Developer", status: true },
  { role: "Space Technology Engineer", status: true },
  { role: "Tech Entrepreneur", status: true },
  { role: "Digital Ethics & Policy Expert", status: true }
];
  const [fee,setFee]=useState(null);
  const [regBtn,setRegBtn]=useState(false);
  const [loader,setLoader]=useState(false);
  const [show,setShow] = useState(false);
  const [member,setMember]=useState([]);
  const [teamName,setTeamName]=useState("");
  const [formData,setFormData]= useState({
    name:"",
    phone:"",
    studentID:"",
    college:"",
    email:"",
    transactionId:"",
    event:"",
    raftDebateRole:"",
    membercount:null,
    terms_and_conditions:null,
  });
  const [response,setResponse]= useState({
    message:'Please Wait for a moment!',
    success:false,
  });
  
  //UPDATING THE FORM DATA FOR SUBMISSION
  const handleChange = (e) => {
    const { name, value, tagName, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        tagName === "SELECT" || type === "select-one"
          ? value // keep dropdown value as it is
          : value.trim(), // trim only for text inputs
    }));
  }

  //EMAIL VALIDATION FUNCTION
  function validateEmail(email) {
    let validEmail = 1;
    if (!email.includes('@') || !email.includes('.')) {
        validEmail = 0;
    } else {
        const at_index = email.indexOf('@');
        const dot_index = email.lastIndexOf('.');
        if (!/^[A-Za-z]/.test(email[0])) {
            validEmail = 0;
        } else if (at_index > dot_index) {
            validEmail = 0;
        } else if (at_index === 0 || dot_index === email.length - 1) {
            validEmail = 0;
        }else if(at_index === dot_index - 1){
          validEmail = 0;
        }
    }
    return (!validEmail);
  }
 
  const handleSubmit= async (data,e)=>{
    if ((formData.membercount>1 && member.length<(formData.membercount)-1)){
      setLoader(false);
      setResponse({
        message:`Members list is empty! Please add them by pressing 'Add Members' Button.`,
        success:false,
      });
    }
    else if((formData.event !== 'CODE-A-THON' && formData.event !== 'Expo Renaissance' && formData.event !== 'IT Quize') && (member.length || formData.membercount || teamName)){
      setLoader(false);
      setResponse({
        message:`Team details are applicable only for team-based events. Please remove the team information or select an appropriate event to continue.`,
        success:false,
      });
      setFormData((prev)=>({
          ...prev,
          membercount:null,
        }));
      setTeamName(null);
      setMember([]);
    }
    else if (!formData.event || formData.event === "Select Event") {
      setLoader(false);
      setResponse({
        message: "Please select an event to proceed.",
        success: false,
      });
    }
    else if(formData.event!=='Last Protocol' && formData.raftDebateRole){
      setLoader(false);
      setResponse({
        message:`Raft Debate role selection is applicable only for the Raft Debate event. Please remove the role information or reselect the appropriate event to continue.`,
        success:false,
      });
      setFormData((prev)=>({
        ...prev,
        raftDebateRole:"",
      }));
    }
    else if((formData.membercount!=null) && (formData.membercount) != member.length+1){
      setLoader(false);
      setResponse({
        message:`You entered a team size of ${formData.membercount}, but entered ${Number(formData.membercount)+1} member names. Please update the member list by pressing 'Add Members' button to match the selected team size.`,
        success:false,
      });
    }
    //check if email is valid or not
    else if (validateEmail(formData.email)){
      setLoader(false);
      setResponse({
        message:`Please enter a valid email address (the correct format is abc@pqr.xyz). Email must start with a letter and contain “@” and “.”`,
        success:false,
      });
    }
    else if (!/^\d{10}$/.test(formData.phone.trim()))
    {
      setLoader(false);
      setResponse({
        message:"Please enter a valid 10 digit phone number.",
        success:false,
      });
    }
    else{
      try {
        const res = await register(data);
        setLoader((p)=>!p);
        setResponse(res);
      } catch (error) {
        console.log(error);
      }finally{
        setFormData({
          name:"",
          phone:"",
          studentID:"",
          college:"",
          email:"",
          transactionId:"",
          event:"",
          raftDebateRole:"",
          membercount:null,
          terms_and_conditions:null,
        });
        setTeamName(null);
        setMember([]);
        e.target.reset();
        setTimeout(()=>{
          setRegBtn((p)=>!p);
          setResponse((prev)=>({
            ...prev,
            message:'Please Wait for a moment!',
          }));
          setTimeout(()=>{
            window.location.reload();
          }, 500);
        }, 5000);
      }
    }
    setTimeout(()=>{
      setRegBtn(false);
      setLoader(false);
      setResponse((prev)=>({
        ...prev,
        message:'Please Wait for a moment!',
      }));
    }, 5000);
  }
  
  //TO STOP THE SCROLLING WHILE DISPLAYING ANY MESSAGES
  useEffect(()=>{
    if (regBtn || show) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = '';
    }
    for (let i = 0; i < events.length; i++) {
      if (events[i].name === formData.event) {
         setFee(events[i].fee);
        break;
      }
    }
  },[regBtn, show]);
  
  return (
    <container className='w-auto h-auto flex justify-center my-10'>
      {/*MESSAGE RESPONSE BOX*/
        regBtn && (response?.success || response?.success==false) ?
          <div
          id='response-message'
          className="fixed h-full w-full z-[1500] top-0 flex justify-center items-center bg-transparent-blur">
            <div className="bg-grad h-[50%] w-80 md:w-[60%] p-[1px] rounded-lg text-center">
              <div className="bg-[#001] h-full w-full rounded-lg">
                <div className="h-full flex justify-center items-center">
                  <p className="text-white text-xl text-center text-justify p-10">
                    {loader?<Loader/>:null}
                    {response?.message}
                    {response.success?(
                      <>
                        <br/>
                        <div className='mt-5 text-center'>
                        <p className="text-white text-xl text-center font-bold inline">Thank you for registering! </p> &#128522;</div>
                      </>
                    ):null}
                  </p>
                </div>
              </div>
            </div>
          </div>:null
      }
      
      {/*QR CODE FOR TRANSACTION*/
        <div
        id="qrcode"
    className={`w-full h-full p-[2rem] rounded-xl fixed top-0 z-[1000] flex justify-center items-center ${show?'bg-transparent-blur':'hidden'}
    `}
    >
      <div
      className="bg-transparent-blur border-[1px] border-gray-400 p-[1rem] w-auto md:w-[50%] text-white reverseFade"
      >
        <button
          className='w-full text-end text-2xl text-white mb-4'
          onClick={()=>{
            setShow((p)=>!p);
          }}
        >X</button>
        {formData.event?
          (<>
        <div className="text-white font-bold flex justify-between w-auto">
          <p>
            Registration fee
          </p>
          <p>
           INR {fee}
          </p>
        </div>
        <hr className='w-auto'/>
        <div className="text-white rounded-xl w-full h-auto md:flex md:justify-center">
          <img src={returnQR(formData.event, events)} className="my-4 w-[100%] h-[100%] md:h-[50%] md:w-[50%] ">
          </img>
        </div>
          </>
          ):(<p className='p-2'>Please select an event to view the QR and the registration fee.</p>)
        }
      </div>
    </div>
      }
      
      <div className={`bg-grad w-[90%] flex justify-center p-[0.8px] rounded-lg
      ${regBtn?'opacity-50':''} `}>
        <form
        id='regForm'
        onSubmit={(e)=>{
          e.preventDefault();
          setRegBtn((p)=>!p);
          setLoader((p)=>!p);
          handleSubmit({formData, teamName, member,},e);
        }}
        className='bg-[#000011] w-full h-full rounded-lg p-5 md:flex md:flex-wrap md:justify-around md:items-start'>

          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%]
          '>
            
            <select
            disabled={regBtn}
            required
            className="w-full bg-transparent-blur text-gray-50 p-2 "
            name='event'
            onChange={handleChange}
            >
              {
                events.map((event, index) =>(
                  <option 
                  disabled={!event.status}
                  selected={!event.status}
                  >
                    {event.name}
                  </option>
                ))
              }
            </select>
          </div>

          { formData.event==='Last Protocol'?
            (
              <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%]
          '>
            <select
            disabled={regBtn}
            required
            className="w-full bg-transparent-blur text-gray-50 p-2 "
            name='raftDebateRole'
            onChange={handleChange}
            >
              {
                techRoles.map((tr, i) =>(
                  <option 
                  disabled={!tr.status}
                  selected={!tr.status && i===0}
                  >
                    {tr.role}
                  </option>
                ))
              }
            </select>
          </div>):null
          }
          
          {
            (formData.event === 'CODE-A-THON' || formData.event === 'Expo Renaissance' || formData.event ==='IT Quize') ? (
              <>
              <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%]
            '>
              <input
              disabled={regBtn}
              required
              onChange={(e)=>{
                setTeamName(e.target.value)
              }}
              name='teamName'
              type='text'
              placeholder="Team Name"
              className="w-full bg-transparent-blur text-gray-50 p-2"
              />
            </div>
            
            <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%]
                '>
                  <input
                  disabled={regBtn}
                  required
                  onChange={(e)=>{
                    if(e.target.value>4 || (e.target.value<2 && formData.event==="CODE-A-THON")){
                      e.target.value=null;
                    }
                    else if(formData.event==='IT Quize'){
                      e.target.value=2;
                    }
                    handleChange(e);
                  }}
                  name='membercount'
                  type='number'
                  placeholder="Number of Members (1-4)"
                  className="w-full bg-transparent-blur text-gray-50 p-2"
                  />
                </div>
              </>
            ) : null
          }
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%]
          '>
            <input
            disabled={regBtn}
            required
            onChange={handleChange}
            name='name'
            type='text'
            placeholder="Participant's Name"
            className="w-full bg-transparent-blur text-gray-50 p-2"
            />
          </div>
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%]
          '>
            <input
            disabled={regBtn}
            required
            maxLength={10}
            pattern ="[0-9]{10}"
            inputMode = 'numeric'
            onChange={handleChange}
            name='phone'
            type='tel'
            placeholder='Contact Number'
            value={formData.phone}
            className="w-full bg-transparent-blur text-gray-50 p-2"/>
          </div>
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 flex gap-2 items-center md:w-[30%]
          '>
            <input
            disabled={regBtn}
            required
            onChange={handleChange}
            name='email'
            type='text'
            placeholder='Email'
            value={formData.email}
            className="w-full bg-transparent-blur text-gray-50 p-2"/>
          </div>
          
          {
            ((formData.event === 'CODE-A-THON' || formData.event === 'Expo Renaissance' || formData.event ==='IT Quize' ) && formData.membercount > 0 && formData.membercount < 5 && formData.membercount != 1 && formData.membercount != null )?(<div
            className="my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[100%] md:mx-6"
            >
              <label className='text-grad'>
                Enter other member's details
              </label>
              { /*———— TEAM MEMBERS ————*/
                Array.from(
                {length: formData.membercount - 1 }).map((_, i) => (
                    <input
                      disabled={regBtn}
                      required
                      key={i}
                      id={`member${i}`}
                      name={`member${i}`}
                      type="text"
                      placeholder={`Member ${i + 1} Name`}
                      className="w-full bg-transparent-blur text-gray-50 p-2 my-2"
                    />
                    ))
              }
            <Button
            css='mt-2 w-auto'
            type='button'
            onClick={(e)=>{
              e.preventDefault();
              const memberarray=[]
              for (let i = 0; i < formData.membercount- 1; i++) {
                let id = document.getElementById(`member${i}`);
                if((id.value.trim()).length>0) memberarray.push(id.value)
              }
              setMember(memberarray);
              setRegBtn((p)=>!p)
              setResponse((prev)=>({
                ...prev,
                message:"Members added successfully!",
              }))
              
              setTimeout(()=>{
                setRegBtn((p)=>!p);
                setResponse((prev)=>({
                  ...prev,
                  message:'Please Wait for a moment!',
                }))
              }, 2000);
            }}
            >Add Members</Button>
             </div>) : null
          }
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 flex gap-2 items-center md:w-[30%]
          '>
            <input
            disabled={regBtn}
            required
            onChange={handleChange}
            name='studentID'
            type='text'
            placeholder='Student ID'
            value={formData.studentID}
            className="w-full bg-transparent-blur text-gray-50 p-2"/>
          </div>
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%]
          '>
            <input
            disabled={regBtn}
            required
            onChange={handleChange}
            name='college'
            type='text'
            placeholder='College/School'
            rows="4"
            className="w-full bg-transparent-blur text-gray-50 p-2"/>
          </div>
          
          <div className='my-5 p-3 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%] flex gap-4 justify-center items-center
          '>
            <input
            disabled={regBtn}
            required
            onChange={handleChange}
            name='transactionId'
            type='text'
            placeholder='Transaction Number'
            rows="4"
            className="w-full bg-transparent-blur text-gray-50 p-2"/>
            
            <Button
            css='m-0 h-auto'
            btnCss='p-0 md:text-[12px]'
            type='button'
            onClick={(e)=>{
              e.preventDefault();
              !show?setShow((prev)=>!prev):null;
            }}
            >QR</Button>
          </div>
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%] text-center
          '>
            <div className="bg-transparent-blur flex justify-between items-center gap-2 p-2">
              <label
              className="w-auto text-gray-50 text-sm">
              I agree to all rules and regulations for the event.
              </label>
              <input
              disabled={regBtn}
              required
              onChange={handleChange}
              name='terms_and_conditions'
              type='checkbox'
              className='w-auto h-[20px] accent-[#FF1F6A]'
              />
            </div>
          </div>
          
          <div className="w-full text-center">
            <Button
            disabled={regBtn}
            type='submit'
            css={`${regBtn?'opacity-25':''}`}
            >
              Submit  »
            </Button>
          </div>
        </form>
      </div>
    </container>
  );
};

export default RegistrationForm;