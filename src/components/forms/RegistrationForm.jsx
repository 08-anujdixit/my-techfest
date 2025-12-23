import React,{useState, useEffect} from 'react';
import '../../Custom.css';
import Button from '../../components/Button';
import { MdOutlineDoneOutline } from "react-icons/md";
import { register } from "../../services/registrationService.js";

const RegistrationForm = () => {
  const events=[
    {name:'Select Event', status:false},
    {name:'Renaissance Expo', status:true},
    {name:'CODE-A-THON', status:true},
    {name:'Tech Treasure Hunt', status:true},
    {name:'Thumbnail Making', status:true},
    {name:'Character Desinging', status:true},
    {name:'Brain & Code', status:true},
    {name:'Logo Desinging', status:true},
  ]
  
  const [regBtn,setRegBtn]=useState(false)
  const [member,setMember]=useState([]);
  const [teamName,setTeamName]=useState("");
  const [formData,setFormData]= useState({
    name:"",
    phone:"",
    college:"",
    email:"",
    event:"",
    membercount:null,
    terms_and_conditions:null,
  });
  const [response,setResponse]= useState({
    message:'Please Wait for a moment!',
    success:false,
  });
  
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
        }
    }
    return (!validEmail);
  }
 
  const handleSubmit= async (data,e)=>{
    if ((formData.membercount>1 && member.length<(formData.membercount)-1)){
      setResponse({
        message:`Members list is empty! Please add them by pressing 'Add Members' Button.`,
        success:false,
      });
    }
    else if((formData.event !== 'CODE-A-THON' && formData.event !== 'Renaissance Expo' && formData.event !== 'Tech Treasure Hunt') && (member.length || formData.membercount || teamName)){
      setResponse({
        message:`This event does not require team details. Kindly remove the team information or refill the form to proceed.`,
        success:false,
      });
      setFormData((prev)=>({
          ...prev,
          membercount:null,
        }));
      setTeamName(null);
      setMember([]);
    }
    else if((formData.membercount!=null) && (formData.membercount) != member.length+1){
      setResponse({
        message:`You entered a team size of ${formData.membercount}, but entered ${Number(formData.membercount)+1} member names. Please update the member list by pressing 'Add Members' button to match the selected team size.`,
        success:false,
      });
    }
    //check if email is valid or not
    else if (validateEmail(formData.email)){
      setResponse({
        message:"Please enter a valid email address.\nEmail must start with a letter and contain “@” and “.”",
        success:false,
      });
    }
    else{
      try {
        const res = await register(data);
        setResponse(res);
      } catch (error) {
        console.log(error);
      }finally{
        setFormData({
          name:"",
          phone:"",
          college:"",
          email:"",
          event:"",
          membercount:null,
          terms_and_conditions:null,
        });
        setTeamName(null);
        setMember([]);
        e.target.reset();
      }
    }
    setTimeout(()=>{
      setRegBtn((p)=>!p);
      setResponse((prev)=>({
        ...prev,
        message:'Please Wait for a moment!',
      }));
    }, 5000);
  }
  
  return (
    <container className='w-auto h-auto flex justify-center my-10'>
      {/*MESSAGE RESPONSE BOX*/
        regBtn & (response?.success || response?.success==false) ?
          <div className="absolute h-[100%] w-full z-[1000] left-0 flex justify-center items-center bg-amber-10">
            <div className="bg-grad h-[50%] w-80 p-[1px] rounded-lg text-center">
              <div className="bg-[#001] h-full w-full rounded-lg">
                <div className="h-full flex justify-center items-center">
                  <p className="text-white text-xl text-center text-justify p-10">
                    {response?.message}
                  </p>
                </div>
              </div>
            </div>
          </div>:null
      }
      <div className={`bg-grad w-[90%] flex justify-center p-[0.8px] rounded-lg
      ${regBtn?'opacity-50':''} `}>
        <form
        id='regForm'
        onSubmit={(e)=>{
          e.preventDefault();
          setRegBtn((p)=>!p);
          handleSubmit({formData, teamName, member,},e);
        }}
        className='bg-[#000011] w-full h-full rounded-lg p-5 md:flex md:flex-wrap md:justify-around md:items-start'>

          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%]
          '>
            <label className="text-grad">
              Choose Event to Enroll
            </label>
            <select
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
          
          {
            formData.event === 'CODE-A-THON' || formData.event === 'Renaissance Expo' || formData.event === 'Tech Treasure Hunt' ? (
              <>
              <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%]
            '>
              <input
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
                  required
                  onChange={(e)=>{
                    if(e.target.value>4 || (e.target.value<2 && formData.event=="CODE-A-THON")){
                      e.target.value=null
                    }
                    else{
                      handleChange(e);
                    }
                  }}
                  name='membercount'
                  type='number'
                  placeholder="Number of Members"
                  className="w-full bg-transparent-blur text-gray-50 p-2"
                  />
                </div>
              </>
            ) : null
          }
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%]
          '>
            <input
            required
            onChange={handleChange}
            name='name'
            type='text'
            placeholder="Participant's Name"
            className="w-full bg-transparent-blur text-gray-50 p-2"
            />
          </div>
          
          {
            ((formData.event === 'CODE-A-THON' || formData.event === 'Renaissance Expo' || formData.event === 'Tech Treasure Hunt') && formData.membercount > 0 && formData.membercount < 5 && formData.membercount != 1 )?(<div
            className="my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%]"
            >
              <label className='text-grad'>
                Enter other member's details
              </label>
              { /*———— TEAM MEMBERS ————*/
                Array.from(
                {length: formData.membercount - 1 }).map((_, i) => (
                    <input
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
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%]
          '>
            <input
            required
            onChange={handleChange}
            name='phone'
            type='number'
            placeholder='Contact'
            value={formData.phone}
            className="w-full bg-transparent-blur text-gray-50 p-2"/>
          </div>
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 flex gap-2 items-center md:w-[30%]
          '>
            <input
            required
            onChange={handleChange}
            name='email'
            type='text'
            placeholder='Email'
            value={formData.email}
            className="w-full bg-transparent-blur text-gray-50 p-2"/>
          </div>
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%]
          '>
            <input
            required
            onChange={handleChange}
            name='college'
            type='text'
            placeholder='College/School'
            rows="4"
            className="w-full bg-transparent-blur text-gray-50 p-2"/>
          </div>
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%] text-center
          '>
            <div className="bg-transparent-blur flex justify-between items-center p-4">
              <label
              className="w-auto text-gray-50 text-sm">
              I agree to all terms and conditions.
              </label>
              <input
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