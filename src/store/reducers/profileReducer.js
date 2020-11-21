
const initState= {
    profiles :[
        {id: '1' , name: 'Kwame' , location: 'Greater-Accra ' , img: '/images/boy.jpg'   },
        {id: '2' , name: 'Laser' , location: 'Eastern-Region ' , img: '/images/hear.jpg'  },
        {id: '3' , name: 'Bernard' , location: 'Volta-Region ' , img: '/images/eye.jpg'  },
        {id: '4' , name: 'Simon' , location: 'Ashanti-Region' , img: '/images/sign.jpg'  },
        {id: '5' , name: 'Garry' , location: 'Western-Region ' , img: '/images/signL.jpg'},
        {id: '6' , name: 'Josephine' , location: 'Greater-Accra ' , img: '/images/sss.jpeg'  },
        {id: '7' , name: 'Joseph' , location: 'Central-Region ' , img: '/images/smile.jpg'  },
        {id: '8' , name: 'Nakwa' , location: 'Oti-Region ' , img:'/images/es.png'   }
    ]
};

const profileReducer = (state = initState ,action)=>{
   
    return state
};

export default profileReducer;