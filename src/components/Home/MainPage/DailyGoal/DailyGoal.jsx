import { Section } from 'components/Section/Section';
import { ReactComponent as BubbleIcon } from '../../../../images/icons-linear/bubble.svg';
import {ReactComponent as Bubble1Icon} from '../../../../images/icons-linear/bubble_1.svg';
import {ReactComponent as Bubble2Icon} from '../../../../images/icons-linear/bubble_2.svg';
import {ReactComponent as Bubble3Icon} from '../../../../images/icons-linear/bubble_3.svg';
import { ReactComponent as BottleIcon } from '../../../../images/icons-linear/milk.svg';
import { Container } from './DailyGoal.styled';
import { useState, useEffect, useCallback} from 'react';
import { useData } from "../../../../hooks/useUserData";



export const DailyGoal = () => {
  const {dailyCaloriesLimit, userDailyWaterLimit} = useData();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleDropsCont, setIsVisibleDropsCont] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);

    if (windowWidth < 834) {
      setIsVisibleDropsCont(false);
      setIsVisible(false)
    } else {
      setIsVisibleDropsCont(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  },[windowWidth]);

  
  if(windowWidth >= 834){
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[handleResize]);



  return (
    <Section>
      <Container>
        <h2>Daily goal</h2>
        <ul>
          <li>
            <BubbleIcon className='buble-svg' alt="Bubbles" width={80} height={80}/>
            <div className='bubble-div'>
              <Bubble1Icon className='buble-1' alt="Bubbles" width={80} height={80}/>
              <Bubble2Icon className='buble-2' alt="Bubbles" width={80} height={80}/>
              <Bubble3Icon className='buble-3' alt="Bubbles" width={80} height={80}/>
            </div>
            <div>
              <h3>Calories</h3>
              <p>{dailyCaloriesLimit}</p>
            </div>
          </li>
          <li className='li-for-bottle'>
            <BottleIcon className='bottle-svg' alt="Bottle" width={80} height={80}/>
            {isVisibleDropsCont && (
              <div className='drops-container'>
                <svg className='quadratic-poly-bezier-curve-svg1' width="100%" height="100%" viewBox="0 0 400 400">
                  <path id="t_path" stroke="" fill="none" d="M199,78 Q184,21 140,32 T90,132" />      
                  <rect y="-6" width="12" height="12" rx="12" ry="12" stroke="#B6C3FF" strokeWidth="2" fill="#B6C3FF">
                    <animateMotion begin="0s" dur="2s" repeatCount="indefinite" rotate="auto" fill="freeze" restart="whenNotActive">
                      <mpath href="#t_path" />
                      <animateTransform attributeName="transform" type="rotate" from="0" to="180" repeatCount="1" dur="2s" fill="freeze" />
                    </animateMotion>
                  </rect>
                </svg>
                {isVisible && (
                  <svg className='quadratic-poly-bezier-curve-svg2' width="100%" height="100%" viewBox="0 0 400 400">
                    <path id="t_path2" stroke="" fill="none" d="M199,78 Q224,26 262,35 T305,132" />      
                    <rect  y="-6" width="12" height="12" rx="12" ry="12" stroke="#B6C3FF" strokeWidth="2" fill="#B6C3FF">
                      <animateMotion begin="0s" dur="2s" repeatCount="indefinite" rotate="auto" fill="freeze" restart="whenNotActive">
                        <mpath href="#t_path2" />
                        <animateTransform attributeName="transform" type="rotate" from="0" to="180" repeatCount="1" dur="2s" fill="freeze" />
                      </animateMotion>
                    </rect>
                  </svg>
                )}
                  <div className='fall-parameters'>
                    <div className='droplet'></div>
                    <div className='droplet-parameters'>
                      <div className='circle'></div>
                    </div>
                  </div>
                  
                  <div className='fall-parameters second'>
                    <div className='droplet'></div>
                    <div className='droplet-parameters'>
                      <div className='circle'></div>
                    </div>
                  </div>
              </div>
            )}
            <div>
              <h3>Water</h3>
              <p>
                {userDailyWaterLimit}<span>ml</span>
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </Section>
  );
};
