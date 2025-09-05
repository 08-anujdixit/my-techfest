import React,{useEffect,useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { getUserInfo } from '../../services/userService.js'
import pfp from '../../assets/images/blankPFP.png'
import '../../Custom.css'

const ProfileCard =  () => {
  const [user,setUser] = useState({});
  
  const getUser = async () =>{
    try {
      const userData = await getUserInfo();
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  }
  getUser();
  
  
  return ( 
    user ? (<section 
    className='w-full flex bg-gray-900 justify-center p-9'>
    
      <container className='bg-grad p-[0.7px] rounded-xl w-[100%] h-auto'>
      
      <div 
      className="profile-container w-auto h-[100%] md:flex gap-16 md:text-2xl p-4 py-8">
          {/*FOR IMAGE*/}
          <div className="p-1 my-2 ">
            <img 
            className="rounded-[50%] h-[6rem] w-[6rem] border-gray-400 border-2 md:h-[8rem] md:w-[8rem]"
            src={pfp}
            alt="pfp"
            />
          </div>
          {/*FOR OTHER DETAILS*/}
          <div className="">
            <p className="text-white">
            
              Name: {user.username} {(user.role==='admin' || user.role==='superAdmin') ? <span className=''>({user.role})</span>:null}
            </p>
            <p className="text-white">
              College: {user.college}
            </p>
            <p className="text-white">
              Email: {user.email}
            </p>
            <p className="text-white">
              Phone: {user.phone}
            </p>
          </div>
        </div>
      </container>
    </section>):null
  )
};

export default ProfileCard;
