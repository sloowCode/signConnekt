
const initState= {
    profiles :[
        {id: '1' , name: 'Kwame' , location: 'Greater-Accra ' , img: '/images/boy.jpg'   },
        {id: '2' , name: 'Laser' , location: 'Eastern-Region ' , img: '/images/is.jpg'  },
        {id: '3' , name: 'Lilly' , location: 'Volta-Region ' , img: '/images/lilly.jpg'  },
        {id: '4' , name: 'Simon' , location: 'Ashanti-Region' , img: '/images/down.jpg'  },
        {id: '5' , name: 'Garry' , location: 'Western-Region ' , img: '/images/os.jpg'},
        {id: '6' , name: 'Eric' , location: 'Greater-Accra ' , img: '/images/erico.jpg'  },
        {id: '7' , name: 'Janet' , location: 'Central-Region ' , img: '/images/smile.jpg'  },
        {id: '8' , name: 'Kwaku' , location: 'Oti-Region ' , img:'/images/kwaku.jpg'   }
    ]
};

const profileReducer = (state = initState ,action)=>{
   
    return state
};

export default profileReducer;