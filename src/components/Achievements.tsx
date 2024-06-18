import React, { useContext } from 'react';
import { context } from '../App';
import { achievements } from '../constants';
import { styles } from '../styles';

const AchievementCard = ({ title, icon, link }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex justify-center">
            <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full">
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 relative">
                    <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </div>
                    <img src={icon} alt={title} className="w-full h-40 object-contain"/>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center">{title}</h3>
                    </div>
                </div>
            </a>
        </div>
    );
}

const Achievements = () => {
    const { isLight } = useContext(context);

    return (
        <div id="acheivements" className={`py-20 ${isLight ? "bg-white" : "bg-gray-900"} transition-colors duration-500`}>
            <div className="container mx-auto px-4">
                <h2 className={`${styles.sectionHeadText} ${isLight ? "text-black-100" : "text-white-100"} mb-16`}>Achievements.</h2>
                <div className="flex flex-wrap justify-center -m-4">
                    {achievements.map((achievement, index) => (
                        <AchievementCard 
                            key={index} 
                            title={achievement.title} 
                            icon={achievement.icon} 
                            link={achievement.link} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Achievements;
