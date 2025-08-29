import React,{useState, useEffect} from 'react';
import '../../Custom.css';
import Button from '../../components/Button';
import { MdOutlineDoneOutline } from "react-icons/md";

const RegistrationForm = () => {
  const events=[
    {name:'Select Event', status:false},
    {name:'Expo', status:true},
    {name:'Code-a-thon', status:true},
    {name:'Hunt', status:true},
    {name:'MUN', status:true},
  ]
  
  const [member,setMember]=useState([])
  const handleMember = (e) => {
  const { value } = e.target;
  setMember((prev) => ( [...(prev.members || []), value]
  ));
};
 
  const [teamName,setTeamName]=useState("")
  
  const [formData,setFormData]= useState({
    name:"",
    phone:null,
    college:"",
    email:"",
    event:"",
  })
  const handleChange = (e) => {
    const { name, value, tagName, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        tagName === "SELECT" || type === "select-one"
          ? value // keep dropdown value as it is
          : value.trim(), // trim only for text inputs
    }));
  };
  
  
  const handleSubmit=(data)=>{
    alert(`Form submitted\n${data}`)
  }
  
  return (
    <container className='w-auto h-auto flex justify-center my-10'>
      {  /* PREVIEW FOR TEAM REGISTRATION */
      formData.event === 'Code-a-thon' || formData.event === 'Expo' ? (
      <div className='fixed left-5 z-10 w-[50%] h-[40%] bg-black rounded-2xl p-4 border-[1px] border-gray-400 hidden'>
        <div>
          <span className='text-grad text-xl font-extrabold font-serif'>Team</span>
          <h1 className='text-white text-xl font-extrabold font-serif'>{teamName}
          </h1>
        </div>
        
        <div className='mt-5'>
          <span className='text-grad text-xl font-extrabold font-serif'>Team Members</span>
          <h1 className='text-white text-xl font-extrabold font-serif'>{formData.name}
          </h1>
          {
            member.map((mem) =>(
              <h1 className='text-white text-xl font-extrabold font-serif'>{mem}
              </h1>
            ))
          }
        </div>
      </div>):null
      }
      
      <div className='bg-grad w-[90%] flex justify-center p-[0.8px] rounded-lg'>
        <form 
        onSubmit={(e)=>{
          e.preventDefault();
          handleSubmit(member);
        }}
        className='bg-black w-full h-full rounded-lg p-5 md:flex md:flex-wrap md: justify-around'>
        
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400 md:w-[30%]
          '>
            <label className="text-grad">
              Choose Event to Enroll
            </label>
            <select 
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
            formData.event === 'Code-a-thon' || formData.event === 'Expo' ? (
              <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400
            '>
              <input
              onChange={(e)=>{
                setTeamName(e.target.value)
              }}
              name='teamName'
              type='text'
              placeholder="Team Name"
              className="w-full bg-transparent-blur text-gray-50 p-2"
              />
            </div>) : null
          }
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400
          '>
            <input
            onChange={handleChange}
            name='name'
            type='text'
            placeholder="Participant's Name"
            className="w-full bg-transparent-blur text-gray-50 p-2"
            />
          </div>
          
          {
            formData.event === 'Code-a-thon' || formData.event === 'Expo' ? (
                <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400
                '>
                  <input
                  onChange={handleMember}
                  name='mname'
                  type='text'
                  placeholder="Add Members Name"
                  className="w-full bg-transparent-blur text-gray-50 p-2"
                  />
                  
                </div>
              ) : null
          }
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400
          '>
            <input
            onChange={handleChange}
            name='phone'
            type='number'
            placeholder='Contact'
            value={formData.phone}
            className="w-full bg-transparent-blur text-gray-50 p-2"/>
          </div>
          
          <div className='my-5 px-3 py-4 bg-transparent-blur border-[1px] border-gray-400
          '>
            <input
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
            type='submit'
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