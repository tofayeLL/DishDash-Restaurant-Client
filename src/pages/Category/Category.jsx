// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay,  Pagination } from 'swiper/modules';


import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle
            subheading={"---From 11:00am to 10:00pm---"}
            heading={"ORDER ONLINE"}
            >

            </SectionTitle>
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={14}
                    centeredSlides={true}

                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}

                    pagination={{
                        clickable: true,
                    }}

                     modules={[Autoplay, Pagination]}
                    className="mySwiper "
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h1 className='text-4xl uppercase text-center text-base-100  translate-y-[-200%] '>salad</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h1 className='text-4xl uppercase text-center text-base-100  translate-y-[-200%] '>soup</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h1 className='text-4xl uppercase text-center text-base-100  translate-y-[-200%] '>pizzas</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h1 className='text-4xl uppercase text-center text-base-100  translate-y-[-200%] '>desert</h1>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h1 className='text-4xl uppercase text-center text-base-100  translate-y-[-200%] '>salad</h1>

                    </SwiperSlide>
                   
                   
                </Swiper>
            </>


        </div>
    );
};

export default Category;