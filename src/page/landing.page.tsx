import { LOGO, BOX_GOLD, CALENDAR, RIGHT_COIN, LEFT_COIN, FOWARD_ICON } from 'assets/assets';
import { Spacer, Wheel } from 'component';
import { animateH, animateO } from 'utils/animation';
import { motion } from 'framer-motion';
import styles from './landingPage.module.css';

export const LandingPage = () => {
  return (
    <motion.div className={styles.maincontainer} initial="initial" animate="animate">
      <div className={styles.landingPage} />
      <div className={styles.stars} />
      <div className={styles.container}>
        <header>
          <img src={LOGO} alt="logo_icon" />
          <div className={styles.calendarContainer}>
            <img src={CALENDAR} alt="calendar_icon" />
            <div>
              <h2>Day 1</h2>
              <h4>of 5</h4>
            </div>
          </div>
        </header>
        <Spacer height={20} />
        <section className={styles.section}>
          <motion.div variants={animateH(1)} className={styles.textContainer}>
            <h1>
              Unlock to <br />
              <span>Power your dreams!</span>
            </h1>
          </motion.div>
          <Spacer height={15} />
          <motion.div variants={animateH(1, 1.2)} className={styles.textContainer}>
            <p>
              Stand a chance to win <br />
              <span>N3,000,000 </span>everyday for the next 5 days
            </p>
          </motion.div>

          <Spacer height={15} />
          <motion.div className={styles.glassBox} variants={animateO(0.4, 2.2)}>
            <h3>🚀 How To Play</h3>
            <ol>
              <li>Guess the right combination of numbers</li>
              <li>
                Win <span>N3,000,000 </span> instantly
              </li>
            </ol>
            <p>Sounds unbelievable? Well, guess right & see for yourself!</p>
            <div className={styles.darkGlassBox}>
              <h4>💡</h4>
              <p>
                Think well before you guess. You have only 2 attempts per day and even after you wi, you can come back
                the next day to try for another jackpot!
              </p>
            </div>
          </motion.div>
          <Spacer height={15} />
          <motion.button variants={animateO(0.4, 2.4)}>
            Play The Game
            <img src={FOWARD_ICON} alt="forwardIcon" />
          </motion.button>
        </section>
        <div className={styles.wheelContainer}>
          <img src={BOX_GOLD} alt="box-gold" />
          <Wheel />
          <div className={styles.coinContainer}>
            <img src={LEFT_COIN} alt="coin" />
            <img src={RIGHT_COIN} alt="coin" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
