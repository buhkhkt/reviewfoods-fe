import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import IntroWelcome from '@/components/intro-welcome';
import { useFeedback } from '@/hooks/use-feedback';
import FeedbackList from '@/components/feedback-list';

const Home = () => {
    const { data: feedbacks, isLoading } = useFeedback();

    return (
        <Swiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            speed={900}
            pagination={{
                clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
        >
            <SwiperSlide>
                <IntroWelcome />
            </SwiperSlide>
            <SwiperSlide>
                <FeedbackList isLoading={isLoading} feedbacks={feedbacks} />
            </SwiperSlide>
        </Swiper>
    );
};

export default Home;
