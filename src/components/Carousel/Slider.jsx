import { Children } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.scss'
import styles from '../../styles/Carousel/Slider.module.scss'

const Slider = ({ children, title }) => {
  const slides = Children.map(children, (child, index) => (
    <SwiperSlide className={styles.swiperSlide} key={index}>
      {child}
    </SwiperSlide>
  ))

  return (
    <>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <div>
        <Swiper
          className={styles.swiperContainer}
          slidesPerView="auto"
          spaceBetween={25}
          initialSlide={0}
          centeredSlidesBounds
        >
          {slides}
        </Swiper>
      </div>
    </>
  )
}

export default Slider
