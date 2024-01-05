import {
  Container,
  Info,
  UserBlock,
  AvaImg,
  MenuBox,
  MenuButton,
  UserInfoContainer,
} from './UserMenu.styled';
import { ButtonsBlock } from './ButtonsBlock/ButtonsBlock';
import { ReactComponent as ArrowDown } from '../../../images/svgIcon/arrow-down.svg';
import { ReactComponent as MenuIcon } from '../../../images/svgIcon/menu.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import { logOut } from '../../../redux/Auth/auth-operations';
import React, { useCallback, useEffect, useRef, useState} from 'react';
import { ReactComponent as CloseIcon } from '../../../images/icons-linear/close-circle.svg';
import { ReactComponent as SettingIcon2 } from '../../../images/icons-linear/setting-2.svg';
import { ReactComponent as LogoutIcon } from '../../../images/icons-linear/logout.svg';
import { closeModalUserMenu, openModalUserMenu } from '../../../redux/Modal/modal-slice';
import { closeModalWeight, closeModalGoal } from '../../../redux/Modal/modal-slice';
import { useModal } from 'hooks/useModal';



export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName, userAvatarURL } = useAuth();
  const {isModalCloseUserMenu} = useModal();
  const userInfoBlock = useRef(null);
  const menuBox = useRef(null);
  const targetBlockRef = useRef(null);
  const weightBlockRef = useRef(null);
  const [isMenuBox, setIsMenuBox] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  // FOR USER MENU TOGGLE////////
  const toggleUserMenuDrop = () => {
    if(!isModalCloseUserMenu){
      dispatch(openModalUserMenu());
    } else {
      dispatch(closeModalUserMenu());
    }
  };
  // ///////////////////////////


  // FOR LOGOUT//////////////////
  const LogOut = () => {
    dispatch(closeModalUserMenu());
    setTimeout(() => {
      dispatch(logOut());
    },250)
  };
  // /////////////////////////////


  // FOR MOBILE MENU BOX//////////
  const toggleMenuBox = () => {
    if(isMenuBox){
      setIsMenuBox(false);
    } else {
      setIsMenuBox(true);
    }
  };
  const closeMenuBoxonBtnClick = () => {
    setIsMenuBox(false);
    dispatch(closeModalWeight());
    dispatch(closeModalGoal());
  };
  // ////////////////////////////


  // HANDLE KEY PRESS//////////////
  const handleKeyPress = useCallback(event => {
    if (event.key === 'Escape') {
      dispatch(closeModalUserMenu());
      setIsMenuBox(false);
    }
  },[dispatch]);
  // ///////////////////////////


  // TOGGLE FOR CLASS CHANGE////
  const toggleUserMenuDropCont = () => {
    return isModalCloseUserMenu ? 'show-info-container' : '';
  };
  const toggleUserMenuDropArrow = () => {
    return isModalCloseUserMenu ? 'arrow-svg-close' : '';
  };
  const toggleMenuBoxDropMenu = () => {
    return isMenuBox ? 'info-options-active' : '';
  };
  // //////////////////////////


  // BACKDROP CLICK///////////
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const handleBackgroundClick = useCallback(event => {
    if (userInfoBlock.current && !userInfoBlock.current.contains(event.target)) {
      dispatch(closeModalUserMenu());
    }
    if(windowWidth < 834){
      if(menuBox.current && !menuBox.current.contains(event.target)) {
        setIsMenuBox(false);
        dispatch(closeModalGoal());
        dispatch(closeModalWeight());
      }
    } 
  },[dispatch, windowWidth]); 
  // //////////////////////////

  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleBackgroundClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleBackgroundClick);
    };
  },[handleBackgroundClick, handleKeyPress]);



  return (
    <Container>
      <MenuBox className="menu-box" ref={menuBox}>
        <MenuButton onClick={toggleMenuBox}>
          <MenuIcon className="menu-icon" width={16} height={16} />
        </MenuButton>
        <div className={`dropdownList ${toggleMenuBoxDropMenu()}`}>
          <ButtonsBlock />
          <button type="button" className="close-button" onClick={closeMenuBoxonBtnClick}>
            <CloseIcon className="close-modal-icon" width={'16px'} />
          </button>
        </div>
      </MenuBox>

      <Info>
        <div className="mega-div">
          <ButtonsBlock targetBlockRef={targetBlockRef} weightBlockRef={weightBlockRef}/>
        </div>
        <UserBlock ref={userInfoBlock}>
          <p className="user-name">{userName}</p>
          <button className="user-menu-btn" type="button" onClick={toggleUserMenuDrop}>
            <div className="for-user-avater">
              <AvaImg src={userAvatarURL} alt="avatar" />
            </div>
            <ArrowDown className={`arrow-svg ${toggleUserMenuDropArrow()}`}/>
          </button>
          <UserInfoContainer className={toggleUserMenuDropCont()}>
            <ul className="list-user-menu">
              <li className="item-user-menu">
                <NavLink className="link-setting" to="/settings" onClick={toggleUserMenuDrop}>
                  <SettingIcon2 className="setting-icon" />
                  Setting
                </NavLink>
              </li>
              <li className="item-user-menu">
                <button className="button-link-logout" onClick={LogOut}>
                  <LogoutIcon className="logout-icon" />
                  Log out
                </button>
              </li>
            </ul>
          </UserInfoContainer>
        </UserBlock>
      </Info>
    </Container>
  );
};

