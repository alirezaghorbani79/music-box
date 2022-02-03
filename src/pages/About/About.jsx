import React from 'react'

import styles from '../../styles/Pages/About.module.scss'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>About the App</h2>
        <p>
          I love music, I decided to create a music player app with an
          attractive UI, using ReactJS library.
        </p>
      </div>
      <div className={styles.box}>
        <h2>About Me</h2>
        <p>
          Im Alireza, a fullstack web developer Experienced in Backend
          developement and currently engaged in frontend software developement
        </p>
      </div>
      <div className={styles.box}>
        <h2>Reach Me At:</h2>
        <div className={styles.contact}>
          <a href="https://github.com/alirezaghorbani79">Github</a>
          <a href="https://github.com/alirezaghorbani79">LinkedIn</a>
        </div>
        
      </div>
      
    </div>
  )
}

export default About
