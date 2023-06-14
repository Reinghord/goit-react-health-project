import {
  StyledButton,
  Title,
  ProductsList,
  Calories,
  Caption,
  Kkal,
  ProductItem,
  Product,
  CaloriesWrapper,
  Recommend,
} from './recommendations.styled';

function Recommendations() {
  return (
    <div>
      <Title>Your recommended daily calorie intake is</Title>
      <CaloriesWrapper>
        <Calories>
          2800<Kkal>kkal</Kkal>
        </Calories>
      </CaloriesWrapper>
      <Recommend>
        <Caption>Foods you should not eat</Caption>
        <ProductsList>
          <ProductItem>
            <Product>1. Flour products</Product>
          </ProductItem>
          <ProductItem>
            <Product>2. Milk</Product>
          </ProductItem>
          <ProductItem>
            <Product>3. Red meat</Product>
          </ProductItem>
          <ProductItem>
            <Product>4. Smoked meats</Product>
          </ProductItem>
        </ProductsList>
      </Recommend>
      <StyledButton>Start losing weight</StyledButton>
    </div>
  );
}

export default Recommendations;
