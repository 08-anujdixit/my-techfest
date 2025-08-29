export const navBar=[
    {
      name:"Home",
      slug:"/home",
      active:true,
    },
    {
      name:"About",
      slug:"/about",
      active:true,
    },
    {
      name:"Events",
      slug:"/events",
      active:true,
    },
    {
      name:"Registration",
      slug:"/register",
      active:true,
    },
    {
      name: "Login",
      slug:"/login",
      active: !userStatus,
    },
    {
      name: "Logout",
      slug:"/logout",
      active: userStatus,
    }
    ]
    
export const quickLinks =[
    {
      name:"Code of Conduct",
      slug:"/code-of-conduct",
      active:true,
    },
    {
      name:"Have Any Queries",
      slug:"/queries",
      active:true,
    },
    {
      name:"Contact Us",
      slug:"/contact-us",
      active:true,
    },
    { 
      name:"Leader Board",
      slug:"/leader-board",
      active:true,
    },
    {
      name:"Our Team",
      slug:"/our-team",
      active:true,
    },
    {
      name:"Events",
      slug:"/events",
      active:true,
    },
    {
      name:"Sponsors",
      slug:"/sponsors",
      active:true,
    },
    {
      name:"Register Now",
      slug:"/register",
      active:true,
    },
  ]
  
export const socialMediaAcc = [
  {
    title: 'Instagram',
    active:true,
    icon: <FaInstagram />,
    slug:"/",
  },
  {
    title: 'Facebook',
    active:true,
    icon: <FaFacebook />,
    slug:"/",
  },
  {
    title: 'XTwiteter',
    active:true,
    icon: <FaXTwitter />,
    slug:"/",
  },
  {
    title: 'LinkedIn',
    active:true,
    icon: <FaLinkedin />,
    slug:"/",
  },
]

export const events=[
    { name:'Hackathon',
      slug: 'event-detail',
      description:'The Mini Hackathon is designed to challenge participants and test their technical skills, communication ability, and logical thinking.'
    },
    {name:'Expo',
      slug: 'event-detail'},
    {name:'IT Quiz',
      slug: 'event-detail'},
    {name:'Hackathon',
      slug: 'event-detail'},
    {name:'Expo',
      slug: 'event-detail'},
    {name:'IT Quiz',
      slug: 'event-detail'},
  ]