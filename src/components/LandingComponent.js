import React, {useState} from "react";
import ReactPlayer from "react-player";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1600 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1600, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const videos=[
    {
        class: 5,
        src:'https://youtu.be/r_z5ruH2kR4',
        playing:false,
    },
    {
        class: 6,
        src:'https://youtu.be/4MqAuIhKipI',
        playing:false,
    },
    {
        class: 7,
        src:'https://youtu.be/Ap7jgZAe2MY',
        playing:false,
    },
    {
        class: 8,
        src:'https://youtu.be/Uqr3y-YBbMY',
        playing:false,
    },
    {
        class: 9,
        src:'https://youtu.be/7-6lOTTGJ6Q',
        playing:false,
    }
];


const LandingComponent= () =>{
    const [active , setActive]=useState(9);

    const btnNextDisable= !(active < videos[videos.length-1].class);
    const btnPreviousDisable=!(active> videos[0].class);

     return(
         <div className="container landing">
             <span className="primary-text">Concept Videos</span>
             <span> Select a number </span>
             <div className="carousel-container">
                 <div className="carousel-btn">
                     <div
                         className={`previous ${btnPreviousDisable ? 'disable' :'' }`}
                         onClick={()=>setActive(active-1)}
                         disabled={btnPreviousDisable}
                     >
                         <span>&#8249;</span>
                     </div>
                     <div
                         className={`next ${btnNextDisable ? 'disable' :''}`}
                         onClick={()=>setActive(active + 1)}
                         disabled={btnNextDisable}
                     >
                         <span>&#8249;</span>  </div>
                 </div>
                 <div className="carousel">
                     { videos.map((d,index)=>(
                             <div className={d.class===active ? `active class` : 'class'}>
                                 <ReactPlayer
                                     url={d.src}
                                     playing={d.playing}
                                     width={'90%'}
                                     height={'220px'}
                                     className="video-container"
                                     key={index}
                                 />
                             </div>
                         )
                     )}
                 </div>
             </div>
             <span className="primary-text">Live classes</span>
             <span> Select a number </span>

             <div className="classes-container">
                 {videos.map(d=>(
                     <div
                         className={d.class===active? 'active class': 'class'}
                         onClick={()=>setActive(d.class)}
                     >{d.class}</div>
                 ))}
             </div>
         </div>
     )
}

export default LandingComponent;
