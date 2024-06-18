import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { context } from '../App';
import { comp, linkedin, github, gmail } from '../assets';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    const { isLight } = useContext(context);

    return (
        <div className={`relative z-10 ${isLight ? "bg-hero-pattern-light" : "bg-hero-pattern-dark"} bg-cover bg-no-repeat bg-center`} >
            <div className={`absolute inset-0 bg-gradient-to-b from-transparent from-60% ${isLight ? "to-white" : "to-black"} z-0`}></div>
            <section className={`relative shrink-0 w-full h-screen mx-auto ${styles.paddingX} pt-[120px] max-w-7xl mx-auto flex items-start justify-between z-10`}>
                <div className='flex flex-col md:flex-row justify-between items-center mt-5 gap-3'>
                    <div className='flex flex-col gap-3 md:gap-5'>
                        <h1 className={`${styles.heroHeadText} ${isLight ? "text-black-100" : "text-white-100"}`}>Hi, I am <span className="text-[#2548e3]">Vyshnavi.</span></h1>
                        <div className='flex gap-5 md:gap-7 justify-start items-center'>
                            <Link to="/resume" className={`${isLight ? "bg-black-200 text-white-100" : "bg-white-100 text-black-200"} hover:scale-105 text-xs md:text-lg font-semibold p-3 rounded-xl z-10`}>My Resume</Link>
                            <a href='https://www.linkedin.com/in/vyshnavi-basude' target='_blank' rel='noopener noreferrer' className='z-10'><img src={linkedin} alt="linkedin" className='w-7 md:w-10 hover:scale-105' /></a>
                            <a href='https://github.com/VyshnaviBasude' target='_blank' rel='noopener noreferrer' className='z-10'><img src={github} alt="github" className={`${isLight ? '' : "invert"} w-7 md:w-10 hover:scale-105`} /></a>
                            <a href='mailto:vyshbasudeusa@gmail.com' target='_blank' rel='noopener noreferrer' className='z-10'><img src={gmail} alt="gmail" className='w-7 md:w-10 hover:scale-105' /></a>
                        </div>
                        <p className={`${styles.heroSubText} ${isLight ? "text-black-200" : "text-white-100"} mt-2`}>I am a 
                            <span className='text-secondary-light'>
                                <Typewriter words={[' Full Stack Developer.', ' Software Engineer.', ' Front End Developer',' Back End Developer.',' Salesforce Developer.']} loop={0} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                            </span>
                        </p>
                    </div>
                    <img src={comp} alt="Working Girl" className='pointer-events-none z-10' />
                </div>
            </section>
        </div>
    )
}

export default Hero;
