import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pfp from '../../assets/images/blankPFP.png'
import '../../Custom.css'

const ProfileCard = () => {
  const user = useSelector(state=>state.user.userData)
  
  return ( user?
    (<section 
    className='w-full md:flex justify-center p-9'>
      <container className='w-auto p-2 rounded-3xl bg-grad'>
      <div 
      className="profile-container text-grad w-auto md:flex gap-16 md:text-2xl p-4 py-8">
          {/*FOR IMAGE*/}
          <div className="p-1 m-1">
            <img 
            className="rounded-[50%] h-[6rem] w-[6rem] border-black border-2"
            src={pfp}
            alt="pfp"
            />
          </div>
          {/*FOR OTHER DETAILS*/}
          <div className="">
            <p className="text-grad">
            
              Name: {user.username} {(user.role==='admin' || user.role==='superAdmin') ? <span className=''>({user.role})</span>:null}
            </p>
            <p className="text-grad">
              College: {user.college}
            </p>
            <p className="text-grad">
              Email: {user.email}
            </p>
            <p className="text-grad">
              Phone: {user.phone}
            </p>
          </div>
        </div>
      </container>
    </section>):null
  )
};

export default ProfileCard;
