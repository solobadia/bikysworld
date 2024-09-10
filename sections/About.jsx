'use client';

import { motion } from 'framer-motion';
import {TypingText} from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer} from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative `}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Bikys World" textStyles="text-center" />
      <motion.p
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className='font-extrabold text-white'>Aenean</span> sit amet porta risus. Donec a mauris a ipsum cursus hendrerit et sed neque. In vehicula posuere elit nec vehicula. Nunc posuere turpis diam, varius dictum justo gravida ut. Aliquam sem purus, feugiat in quam <span className='font-extrabold text-white'>tempor vitae nulla</span> of today, using only <span className='font-extrabold text-white'>Nunc</span> ellentesque tellus eros, tempor vitae nulla quis, molestie facilisis purus. Aliquam erat volutpat. <span className='font-extrabold text-white'>odio</span> discover more by scrolling down

      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)} 
        src="./arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      >

      </motion.img>
    </motion.div>

  </section>
);

export default About;
