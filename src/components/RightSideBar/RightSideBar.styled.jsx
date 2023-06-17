import styled from 'styled-components';


export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  padding: 40px 20px 12px 20px;

  @media screen and (max-width: 320px) {
    width: 100%;
  }
  
  @media screen and (min-width: 321px) and (max-width: 767px) {
    flex-direction: column;
    padding: 40px 32px 40px 32px;
    align-items: center;
  }
  
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-direction: row;
    justify-content: center;
    padding: 91px 87px ;
    margin-top: 110px
  }

  @media screen and (min-width: 1280px) {
    width: 40%; // изменено на проценты
    min-height: 100vh;
    margin-left: 20%; 
    align-items: flex-start;
  }
`;


export const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 60px;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 60px;
    margin-right: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 0;
   &:not(:last-child) {
      margin-right: 97px;
    }
  }

  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-right: 97px;
    }
    margin-bottom: 60px;
    width: 288px;
    height: 178px;

    &:last-child {
      margin-bottom: 60px;
      margin-right: 0;
    }
  }
`;
export const ListTitle = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
  text-align: start;
  margin-bottom: 30px;
  
`;


export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-position: inside;
  margin: 0;
  padding: 0;
  min-width: 270px;
  max-width: 400px;
  max-height: 180px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background: #264061;
  }

  padding-right: 0;
  margin-right: 0;
`;



export const Item = styled.li`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const PreContent = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  color: #9b9faa;
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  
  }
`;

export const Title = styled.div`
  width: 180px;
  @media screen and (min-width: 768px) {
    width: 182px;
  }
`;

export const Content = styled.div`
display: flex;
    justify-content: flex-end;
  width: 88px;
`;
