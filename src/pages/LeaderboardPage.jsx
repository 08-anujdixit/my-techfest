import React from 'react';
import '../Custom.css';

const LeaderboardPage = () => {
  
  const leaderboardSec=[
    {
      secName : 'Renaissance Expo',
      slug : '#expo'
    },
    {
      secName : 'Code-A-Thon',
      slug : '#hackathon'
    },
    {
      secName : 'Tech Treasure Hunt',
      slug : '#hunt'
    },
    {
      secName : 'Thumbnail Making',
      slug : '#thumbnail'
    },
    {
      secName : 'Character Designing',
      slug : '#character'
    },
    {
      secName : 'Brain & Code',
      slug : '#braincode'
    },
    {
      secName : 'Logo Designing',
      slug : '#logodesign'
    },
    
  ]
  
  return (
    <container
    className='reverseFade text-center'
    >
      <h1 className='text-4xl text-center text-grad'>
        LEADERBOARD
      </h1>
      <div className='bg-grad h-auto rounded-xl p-[1px] m-5'>
        <div className='h-full w-full rounded-xl bg-[#000011] p-4'>
        { /* THERE WILL BE DIFFERENT SECTION FOR DIFFERENT EVENTS */
          leaderboardSec.map((lbSec, index) => (
            <section 
            id={lbSec.slug}
            className="my-5 px-1 py-4 bg-transparent-blur border-[1px] border-gray-400">
              <h3 className='text-xl text-grad'>
                {lbSec.secName}
              </h3>
              <div className="text-xl text-white">
                <div>First</div>
                <div>Second</div>
                <div>Third</div>
              </div>
            </section>
          ))
          
        }
        </div>
      </div>
    </container>
  );
};


export default LeaderboardPage;