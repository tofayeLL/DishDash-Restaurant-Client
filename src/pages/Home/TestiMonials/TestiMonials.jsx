import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



const TestiMonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data)
            })
    }, [])




    return (
        <section>

            <div>
                <SectionTitle
                    subheading={"---What Our Clients Say---"}
                    heading={"TESTIMONIALS"}
                >

                </SectionTitle>
            </div>




            <div>
                <>

                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">


                        <div>

                            {
                                reviews.map(review => <SwiperSlide key={review._id} className="space-y-4">
                                    <div className="flex flex-col justify-center items-center">
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={3}
                                            readOnly
                                        />
                                    </div>
                                    <div className=" text-center space-y-2">
                                        <p className="w-[70%] mx-auto">{review.details}</p>
                                        <h3 className="text-3xl text-amber-500">{review.name}</h3>
                                    </div>

                                </SwiperSlide>)
                            }
                        </div>
                    </Swiper>
                </>
            </div>

        </section>
    );
};

export default TestiMonials;