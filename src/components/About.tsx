import { useContext } from 'react';
import { styles } from "../styles";
import { context } from "../App";
import { aboutMe, skills } from '../constants';
import Tilt from 'react-parallax-tilt';
import React from 'react';

interface SkillCardProps {
    title: string,
    icon: string,
}
const renderContent = (content: (string | { text: string, bold: boolean })[]) => {
    return content.map((item, index) => {
      if (typeof item === 'string') {
        return item.split('\n').map((str, i) => (
          <React.Fragment key={index + '-' + i}>
            {str}
            {i !== item.split('\n').length - 1 && <br />}
          </React.Fragment>
        ));
      } else if (item.bold) {
        return <strong key={index}>{item.text}</strong>;
      } else {
        return item.text;
      }
    });
  };


const SkillCard = ({ title, icon }: SkillCardProps) => {
    const { isLight } = useContext(context);
    return (
        <Tilt className={`${isLight ? "blood-blue-gradient" : "rose-sky-gradient"} w-60 p-1 bg-tertiary rounded-2xl flex flex-col items-center justify-center shadow-lg transition-transform transform hover:-translate-y-2`} glareColor={isLight ? '#FF7272' : '#A91079'} glareEnable={true} gyroscope={true} glareBorderRadius='20px' glareMaxOpacity={0.5} glarePosition='all' perspective={500} style={{ height: '300px', transformStyle: "preserve-3d" }}>
            <img src={icon} alt={title} className='w-40 h-30 object-contain' style={{ transform: "translateZ(100px)" }} />
            <h3 className={`${isLight ? "text-white" : "text-black"} text-lg font-bold text-center mt-4`} style={{ transform: "translateZ(50px)" }}>{title}</h3>
        </Tilt>
    );
}


const About = () => {
    const { isLight } = useContext(context);

    return (
        <div id="about" className={`mt-10 ${styles.paddingX} max-w-7xl mx-auto flex flex-col items-start justify-between`}>
             
             <p className={`${styles.sectionSubText} ${isLight ? "text-black-200" : "text-white-100"} mt-10 font-semibold`}>About Me</p>
      <h2 className={`${styles.sectionHeadText} ${isLight ? "text-black-200" : "text-white-100"} mb-10`}>Introduction.</h2>
      <div className={`${isLight ? "text-secondary-text-light" : "text-secondary-dark"} text-[17px] max-w-5xl leading-[30px] md:ml-3`}>
        <p dangerouslySetInnerHTML={{ __html: aboutMe.replace(/\n/g, '<br />') }} />
      </div>
    
            <p className={`mt-20 mb-5 sm:mb-0 invisible ${isLight ? "text-secondary-text-light" : "text-secondary-dark" } text-[17px] max-w-3xl leading-[30px] md:ml-3 italic`}>(Tilt your phone to see some magic)</p>
			<div className='mb-20 flex flex-wrap gap-10'>
				{skills.map((skill, index) => (
					<SkillCard key={index} title={skill.title} icon={skill.icon} />
				))}	
			</div>
        </div>
    )
}

export default About;