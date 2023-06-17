import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { languageSelection } from 'redux/auth/auth-reducer';
import Icon from '../Icon/Icon';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-left: -5px;
  @media screen and (min-width: 768px) {
  .container {
    margin-left: 10px;
  }
}
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
`;
const IconStyled = styled(Icon)`
  pointer-events: none;
  cursor: pointer;
`;
const List = styled.ul`
  position: absolute;
  left: -70px;
  top: 20px;
  padding: 3px;
  font-size: 10px;
  text-transform: none;
  box-shadow: 0 0 5px #9b9faa;
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #ffffff;

  &:not(:last-child) {
    margin-bottom: 3px;
  }

  &:hover {
    background-color: #fc842d;
  }
`;


const LanguageBar = ({ big }) => {
  const lang = useSelector(state => state.auth.lang);
  const [currentLang, setCurrentLang] = useState(lang.lang);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('click', onClick);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('click', onClick);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const onClick = event => {
    if (event.target.name !== 'btn') {
      setIsShow(false);
    }
  };

  const onKeyDown = event => {
    if (event.code === 'Tab' || event.code === 'Escape') {
      setIsShow(false);
    }
  };

  const setLang = lang => {
    setCurrentLang(lang);
    dispatch(languageSelection(lang));
  };

  const showSelection = () => {
    setIsShow(state => !state);
  };

  const selectLanguage = event => {
    setLang(event.target.dataset.key);
    setIsShow(false);
  };

  return (
    <Container>
      <Button
        name="btn"
        type="button"
        onClick={showSelection}
      >
        <IconStyled
          icon={currentLang}
          width={big ? 48 : 24}
          height={big ? 32 : 16}
        />
      </Button>
      {isShow && (
        <List style={big && { top: 36 }}>
          <ListItem data-key="ua" onClick={selectLanguage}>
            <IconStyled
              icon="ua"
              width={big ? 48 : 24}
              height={big ? 32 : 16}
            />
            &nbsp;Українська
          </ListItem>
          <ListItem data-key="en" onClick={selectLanguage}>
            <IconStyled
              icon="en"
              width={big ? 48 : 24}
              height={big ? 32 : 16}
            />
            &nbsp;English
          </ListItem>
        </List>
      )}
    </Container>
  );
};

export default LanguageBar;