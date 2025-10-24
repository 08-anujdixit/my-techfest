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
    phone:null,
    college:"",
    email:"",
    event:"",
    membercount:null,
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
 
  const handleSubmit= async (data)=>{
    try {
      const res = await register(data);
      setResponse(res);
    } catch (error) {
      console.log(error);
    }finally{
      setFormData({});
      setTeamName(null);
      setMember([]);
      setTimeout(()=>{
        setRegBtn((p)=>!p);
      }, 3000);
    }
  }
  
  return (
    <container className='w-auto h-auto flex justify-center my-10'>
      {/*MESSAGE RESPONSE BOX*/
        regBtn & (response?.success || response?.success==false) ?
          <div className="absolute h-[60%] w-full z-[1000] left-0 flex justify-center items-center">
            <div className="bg-grad h-[40%] w-80 p-[1px] rounded-lg">
              <div className="bg-[#001] h-full w-full rounded-lg flex justify-center items-center">
                <p className="text-white text-xl text-center text-justify p-10">
                  {response?.message}
                </p>
              </div>
            </div>
          </div>:null
      }
      <div className={`bg-grad w-[90%] flex justify-center p-[0.8px] rounded-lg
      ${regBtn?'opacity-50':''} `}>
        <form 
        onSubmit={(e)=>{
          e.preventDefault();
          setRegBtn((p)=>!p);
          handleSubmit({formData, teamName, member,});
          e.target.reset();
        }}
        className='bg-[#000011] w-full h-full rounded-lg p-5 md:flex md:flex-wrap md: justify-around'>
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
              <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400
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
            
            <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400
                '>
                  <input
                  required
                  onChange={(e)=>{
                    if(e.target.value>4){
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
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400
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
            (formData.membercount > 0 && formData.membercount < 5 && formData.membercount != 1 )?(<div
            className="my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400"
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
            css='mt-2'
            type='button'
            onClick={(e)=>{
              e.preventDefault();
              const memberarray=[]
              for (let i = 0; i < formData.membercount- 1; i++) {
                let id = document.getElementById(`member${i}`);
                if((id.value.trim()).length>0) memberarray.push(id.value)
              }
              setMember(memberarray);
            }}
            >Add Members</Button>
             </div>) : null
          }
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400
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
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 flex gap-2 items-center
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
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400
          '>
            <input
            onChange={handleChange}
            name='college'
            type='text'
            placeholder='College/School'
            rows="4"
            className="w-full bg-transparent-blur text-gray-50 p-2"/>
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