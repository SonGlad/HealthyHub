import { Section } from 'components/Section/Section';
// import { ReactComponent as BubbleIcon } from '../../../../images/icons-linear/bubble.svg';
import {ReactComponent as Bubble1Icon} from '../../../../images/icons-linear/bubble_1.svg';
import {ReactComponent as Bubble2Icon} from '../../../../images/icons-linear/bubble_2.svg';
import {ReactComponent as Bubble3Icon} from '../../../../images/icons-linear/bubble_3.svg';
import { ReactComponent as BottleIcon } from '../../../../images/icons-linear/milk.svg';
import { Container } from './DailyGoal.styled';
import { useData } from "../../../../hooks/useUserData";



export const DailyGoal = () => {
  const {dailyCaloriesLimit, userDailyWaterLimit} = useData();


  return (
    <Section>
      <Container>
        <h2>Daily goal</h2>
        <ul>
          <li>
            {/* <BubbleIcon className='slide-out-top' alt="Bubbles" width={80} height={80}/> */}
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
          <li>
            <BottleIcon className='bottle-svg' alt="Bottle" width={80} height={80}/>
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
