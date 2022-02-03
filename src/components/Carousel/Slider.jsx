import { Children, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import Icon from '../Icon/IconBtn'

import { ReactComponent as Next } from '../../assets/svg/next.svg'
import { ReactComponent as Previous } from '../../assets/svg/previous.svg'

import 'swiper/swiper.scss'
import styles from '../../styles/Carousel/Slider.module.scss'

const Slider = ({ children, title }) => {
  const sliderRef = useRef()

  const slideNextHandler = () => {
    sliderRef.current.swiper.slideNext()
  }

  const slidePrevHandler = () => {
    sliderRef.current.swiper.slidePrev()
  }

  const slides = Children.map(children, (child, index) => (
    <SwiperSlide className={styles.swiperSlide} key={index}>
      {child}
    </SwiperSlide>
  ))

  return (
    <>
      <div className={styles.header}>
        <h2>{title}</h2>

        <div className={styles.iconContainer}>
          <Icon src={Previous} size={25} fill="white" onClick={slidePrevHandler} />
          <Icon src={Next} size={25} fill="white" onClick={slideNextHandler} />
        </div>
      </div>
      <div>
        <Swiper
          ref={sliderRef}
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
