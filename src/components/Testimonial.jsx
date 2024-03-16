// import { useEffect } from "react";
// import { useState } from "react";
// import Marquree from "./Marquree";
// import Marquee from "react-fast-marquee";


// const Testimonial = () => {
//     const [reviews ,setReviews] = useState([])

//     useEffect(()=>{
//         fetch('review.json')
//          .then(res=>res.json())
//          .then(data =>setReviews(data))
//     },[])
//     return (
//         <>
//             <div className="text-center mt-20">
//                 <h4 className="text-2xl text-red-400">Testimonial</h4>
//                 <h2 className="text-4xl font-semibold">What Customer Says</h2>
//                 <div className="text-1xl px-4 mt-3"> the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</div>
//             </div>
            
//             <Marquee className="mt-6 gap-4">
//                {
//                reviews.map(rev=><Marquree
//                key={rev._id}
//                rev={rev}
//                ></Marquree>)
              
//                }
//             </Marquee>
            
//         </>
//     );
// };

// export default Testimonial;
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Testmonial = () => {
  const [review, setReview] = useState([]);
  fetch("review.json")
    .then((res) => res.json())
    .then((data) => setReview(data));
  return (
    <>
    <div className="text-center mt-20">
                <h4 className="text-2xl text-red-400">Testimonial</h4>
                <h2 className="text-4xl font-semibold">What Customer Says</h2>
                 <div className="text-1xl px-4 mt-3"> the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</div>
             </div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper my-6"
      >
        {review.map((items) => (
          <SwiperSlide key={items._id}>
            <div className="text-center px-20 bg-red-100 py-16 items-center justify-center">
              <h3 className="text-semibold text-xl text-rose-400">
                {items.name}
              </h3>
              <p>{items.details}</p>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testmonial;