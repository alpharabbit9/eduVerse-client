// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                console.log(data);
            });
    }, []);

    return (
        <div className='mt-12 mb-12 bg-[#F5F2F0] px-4 py-10 md:p-20'>
            <p className='text-blue-600 font-bold text-xl md:text-3xl mt-5 mb-3 md:mt-10'>
                Learn how you want, where you want
            </p>
            <h3 className='text-2xl md:text-5xl font-bold text-gray-800 mb-5 md:mb-10'>
                Tens of thousands of reviews written <br className='hidden md:block' /> by our users help you pick
            </h3>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    reviews.map((review, idx) => (
                        <SwiperSlide key={idx}>
                            <div className='p-6 md:p-12 bg-white h-auto min-h-[200px] rounded-3xl shadow'>
                                <div className='flex items-center gap-3'>
                                    <img className='w-12 h-12 object-cover rounded-full' src={review.image} alt={review.name} />
                                    <div>
                                        <h6 className='font-bold text-lg text-gray-800'>
                                            {review.name}
                                        </h6>
                                        <p className='text-gray-600 text-sm'>
                                            {review.title}
                                        </p>
                                    </div>
                                </div>
                                <div className='mt-4 text-gray-700 text-sm'>
                                    <p>{review.feedback}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Review;
