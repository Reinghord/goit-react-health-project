import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 13px 25px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffffff;
`;

export const Title = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  color: #212121;
  padding: 0;
  margin: 0 0 42px 0;
`;

export const CaloriesWrapper = styled.div`
  width: 279px;
  height: 62px;
  margin-bottom: 32px;
`;

export const Calories = styled.h1`
  margin: 0px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #264061;
`;

export const Kkal = styled.span`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19, 45px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #264061;
`;

export const Recommend = styled.div`
  border-top: 1px solid #e0e0e0;
  margin-bottom: 40px;
`;

export const Caption = styled.h3`
  margin: 20px 0;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
`;

export const ProductsList = styled.ul`
  margin: 0;
  padding: 0;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const ProductItem = styled.li`
  list-style: none;
`;

export const Product = styled.p`
  padding: 0;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #9b9faa;
`;

// export const CloseButton = styled.button`
//   display: none;
// `;

// @media screen and (max-width: 769px)  {
//     flex-direction: column;
//     justify-content: center;
//     gap: 24px;
//   }

//   @media screen and (max-width: 1281px) {
//     flex-wrap: wrap;
//     gap: 32px;
//   }

//   @media screen and (min-width: 1280px) {
//     justify-content: space-between;}
//  }
