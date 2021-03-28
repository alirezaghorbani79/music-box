import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.scss';
import styles from '../../styles/Sliders/Slider.module.scss'

import gImage from '../../assets/images/genres/0.png'

const Slider = () => {

    return (
        <Swiper className={styles.swiperContainer} slidesPerView='auto' spaceBetween={25} initialSlide={0} centeredSlidesBounds >
            <SwiperSlide className={styles.swiperSlide}><img src={gImage} alt='adf'></img></SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}><img src={gImage} alt='adf'></img></SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}><img src={gImage} alt='adf'></img></SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}><img src={gImage} alt='adf'></img></SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}><img src={gImage} alt='adf'></img></SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}><img src={gImage} alt='adf'></img></SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}><img src={gImage} alt='adf'></img></SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}><img src={gImage} alt='adf'></img></SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}><img src={gImage} alt='adf'></img></SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}><img src={gImage} alt='adf'></img></SwiperSlide>
            
            
        </Swiper>
    )
}

export default Slider