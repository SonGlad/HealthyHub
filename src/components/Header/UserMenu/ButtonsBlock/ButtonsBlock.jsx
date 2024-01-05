import {
  InfoOptions,
  InfoBlockTarget,
  InfoBlockWeight,
  IconContainer,
  TextContainer,
  InfoBlockName,
  InfoBlockText,
  WeightKg,
} from './ButtonsBlock.styled';
import { TargetDrop } from './TargetDrop/TargetDrop';
import { WeightDrop } from './WeightDrop/WeightDrop';
import { ReactComponent as CloseIcon } from '../../../../images/icons-linear/close-circle.svg';
import { ReactComponent as EditIcon} from '../../../../images/images/headreImg/edit-2.svg';
import { ReactComponent as ArrowIcon} from '../../../../images/images/headreImg/arrow-down.svg'; 
import WaightImage from '../../../../images/images/headreImg/Waight_image.png';
import muscleIcon from '../../../../images/icons-emoji/Gain muscle.png';
import looseFatIconGirl from '../../../../images/icons-emoji/Lose fat image girl.png';
import looseFatIconMen from '../../../../images/icons-emoji/Lose fat image men.png';
import MaintakeIconGirl from '../../../../images/icons-emoji/Maintake image girl.png';
import MaintakeIconMen from '../../../../images/icons-emoji/Maintake image men.png';
import { useCallback, useEffect, forwardRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../../hooks/useAuth';
import { useModal } from '../../../../hooks/useModal';
import { openModalGoal, closeModalGoal, openModalWeight, closeModalWeight } from '../../../../redux/Modal/modal-slice';



export const ButtonsBlock = forwardRef(({targetBlockRef, weightBlockRef}, ref) => {
  const dispatch = useDispatch();
  const { isModalShowGoal, isModalShowWeight } = useModal();
  const { userGoal, userWeight, userGender } = useAuth();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  // FOR GOAL DROPDOWN TOGGLE//////////
  const toggleShowGoalDrop = () => {
    if(!isModalShowGoal){
      if(isModalShowWeight){
        dispatch(closeModalWeight());
      }
      dispatch(openModalGoal());
    } else {
      dispatch(closeModalGoal());
    }
  };
  // //////////////////////////////////


  // FOR WEIGHT DROPDOWN TOGGLE////////
  const toggleShowWeightDrop = () => {
    if(!isModalShowWeight){
      if(isModalShowGoal){
        dispatch(closeModalGoal());
      }
      dispatch(openModalWeight());
    } else {
      dispatch(closeModalWeight());
    }
  };
  // /////////////////////////////////


  //CLOSE BTN IN DROPDOWN//////////// 
  const showGoalDropBtnClose = () => {
    dispatch(closeModalGoal());
  };
  const showWeightDropBtnClose = () => {
    dispatch(closeModalWeight());
  };
  // ////////////////////////////////


  // TOGGLE FOR CLASS CHANGE////////
  const toggleGoalDrop = () => {
    return (isModalShowGoal ? 'show-target-selection' : '');
  };
  const toggleArrowDrop = () => {
    return (isModalShowGoal ? 'show-arrow-top' : '')
  };
  const toggleWeightDrop = () => {
    return (isModalShowWeight ? 'show-weight-selection' : '');
  };
  // ///////////////////////////////


  // HANDLE KEY PRESS///////////////
  const handleKeyPress = useCallback(event => {
    if (event.key === 'Escape') {
      dispatch(closeModalGoal());
      dispatch(closeModalWeight());
    }
  },[dispatch]);
  // ///////////////////////////////


  // BACKDROP CLICK///////////
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const handleBackDropClick = useCallback(event => {
    if (windowWidth >= 834){
      if (targetBlockRef && targetBlockRef.current && !targetBlockRef.current.contains(event.target)) {
        dispatch(closeModalGoal());
      }
      if (weightBlockRef && weightBlockRef.current && !weightBlockRef.current.contains(event.target)) {
        dispatch(closeModalWeight());
      }  
    }
  },[dispatch, targetBlockRef, weightBlockRef, windowWidth]); 
  // //////////////////////////


  useEffect(() => {
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleBackDropClick );

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleBackDropClick );
    };
  },[handleBackDropClick, handleKeyPress]);



  // CAPITALIZE & SWITCH IMAGE////////////
  function capitalizeWords(str) {
    if (!str) {
      return str;
    }
    return str.replace(/\b\w/g, match => match.toUpperCase());
  };
  const inputString = userGoal;
  const result = capitalizeWords(inputString);

  const getGoalImage = (userGoal, userGender) => {
    if (userGoal === 'gain muscle') {
      return muscleIcon;
    } else if (userGoal === 'maintain' && userGender === 'male') {
      return MaintakeIconMen;
    } else if (userGoal === 'maintain' && userGender === 'female') {
      return MaintakeIconGirl;
    } else if (userGoal === 'lose fat' && userGender === 'male') {
      return looseFatIconMen;
    } else if (userGoal === 'lose fat' && userGender === 'female') {
      return looseFatIconGirl;
    } else {
      return muscleIcon;
    }
  };
  // ///////////////////////////////////////


  return (
    <InfoOptions>
      <InfoBlockTarget onClick={toggleShowGoalDrop} ref={targetBlockRef}>
        <IconContainer>
          <img src={getGoalImage(userGoal, userGender)} alt="goal icon" width={28}/>
        </IconContainer>
        <TextContainer className="goal-text-cont">
          <InfoBlockName className='goal-text'>Goal</InfoBlockName>
          <InfoBlockText className='goal-text'>
            {result}
            <ArrowIcon className={`arrow-svg ${toggleArrowDrop()}`}/>
          </InfoBlockText>
        </TextContainer>
      </InfoBlockTarget>
      <div className={`target-dropdown ${toggleGoalDrop()}`}>
        <TargetDrop />
        <button className="target-close-btn" type="button" onClick={showGoalDropBtnClose}>
          <CloseIcon className="close-target-icon" width={'16px'} />
        </button>
      </div>

      <InfoBlockWeight onClick={toggleShowWeightDrop} ref={weightBlockRef}>
        <IconContainer>
          <img src={WaightImage} alt="weight" width={28} />
        </IconContainer>
        <TextContainer className='weight-text-cont'>
          <InfoBlockName className='weight-text'>Weight</InfoBlockName>
          <InfoBlockText className='weight-text'>
            {userWeight}
            <WeightKg>kg</WeightKg>
            <EditIcon className='edit-svg'/>
          </InfoBlockText>
        </TextContainer>
      </InfoBlockWeight>
      <div className={`weight-dropdown ${toggleWeightDrop()}`}>
        <button className="weight-close-btn" type="button" onClick={showWeightDropBtnClose}>
          <CloseIcon className="close-weight-icon" width={'16px'} />
        </button>
        <WeightDrop />
      </div>
    </InfoOptions>
  );
});

