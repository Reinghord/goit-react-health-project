import Navigation from 'components/Navigation';
// import UserInfo from 'components/UserInfo';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import {
  StyledHeader,
  Nav,
  LogoImg,
  LogoSlim,
  LogoMom,
  NavigationList,
  NavigationItem,
  NavItem,
  ButtonClose,
  ButtonBurger,
  Wrapper,
  StyledSvgBurger,
  StyledSvgClose,
  StyledLogo,
  StyledSlimMom,
  // StyledNavigation,
  // StyledUserInfo,
  StyledLogoMob,
  NavElemnt,
  StyledNavLinkSupport,
  // StyledUse,
} from './Header.styled';
import logoImg from 'images/header/logo-img.svg';
import logoSlim from 'images/header/logo-slim.svg';
import logoMom from 'images/header/logo-mom.svg';
import sprite from 'images/header/symbol-defs.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ThemeSwitcher } from 'components/styles/ThemeSwitcher';
import LanguageBar from 'components/LanguageBar/LanguageBar';
// import { BsDisplay } from 'react-icons/bs';

function Header() {
  const [isOpen, setOpen] = useState(false);
  const isUserLogin = useSelector(getIsLoggedIn);
  const lang = useSelector(state => state.auth.lang);
  const openHandler = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <StyledHeader>
        <Nav />
        <StyledLogo>
          <StyledNavLinkSupport to="/calculator">
            <LogoImg src={logoImg} alt="logo" />
            <StyledSlimMom>
              <LogoSlim src={logoSlim} alt="logo" />
              <LogoMom src={logoMom} alt="logo" />
            </StyledSlimMom>
          </StyledNavLinkSupport>
        </StyledLogo>
        <StyledLogoMob>
          <StyledNavLinkSupport to="/calculator">
            {' '}
            <LogoImg src={logoImg} alt="logo" />
            {isUserLogin && (
              <StyledSlimMom>
                <LogoSlim src={logoSlim} alt="logo" />
                <LogoMom src={logoMom} alt="logo" />
              </StyledSlimMom>
            )}
          </StyledNavLinkSupport>
        </StyledLogoMob>
        <NavElemnt />
        {/* <StyledNavigation> */}
        <Navigation />
        {/* </StyledNavigation> */}

        {isUserLogin && (
          <div>
            {isOpen ? (
              <ButtonClose onClick={openHandler}>
                <StyledSvgClose>
                  <use href={sprite + '#icon-close'}></use>
                </StyledSvgClose>
              </ButtonClose>
            ) : (
              <ButtonBurger onClick={openHandler}>
                <StyledSvgBurger>
                  <use href={sprite + '#icon-burger'}></use>
                </StyledSvgBurger>
              </ButtonBurger>
            )}
          </div>
        )}
        {isOpen && (
          <Wrapper>
            <NavigationList>
              <NavigationItem>
                <ThemeSwitcher />
              </NavigationItem>
              <NavigationItem>
                <LanguageBar />
              </NavigationItem>
              <NavigationItem>
                <NavLink to="diary">{lang.diary}</NavLink>
              </NavigationItem>
              <NavigationItem>
                <NavItem to="calculator">{lang.calculator}</NavItem>
              </NavigationItem>
            </NavigationList>
          </Wrapper>
        )}
      </StyledHeader>
      {/* {isOpen && (
        <StyledUserInfo>
          <UserInfo />
        </StyledUserInfo>
      )} */}
    </>
  );
}

export default Header;
