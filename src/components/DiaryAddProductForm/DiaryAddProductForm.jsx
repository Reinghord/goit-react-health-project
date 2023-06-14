<<<<<<< Updated upstream
function CalculatorСalorieForm() {
  return <div>CalculatorСalorieForm</div>;
=======
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { dayInfo, postProduct } from '../../redux/day/day-operations';
import productSearch from '../../utils/productsSearch';
import * as css from './DiaryAddProductForm.styled.js';

function DiaryAddProductForm() {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [weight, setWeight] = useState('');
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [productId, setIdProduct] = useState('');
  const date = '2023-06-14';


  useEffect(() => {
    dispatch(dayInfo({date}))
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      date,
      productId,
      weight,
    };

    dispatch(postProduct(body));
    dispatch(dayInfo({date}))

    setProductName('');
    setWeight('');
    setSuggestedProducts([]);
  };

  const handleProductNameChange = async (e) => {
    const query = e.target.value;
    setProductName(query);
    const suggestions = await productSearch(query);
    console.log(suggestions);
    setSuggestedProducts(suggestions);
  };

  const handleProductSelect = async (product) => {
    setProductName(product.title.ua);
    productSearch(product.title.ua);
    const test =  await productSearch(product.title.ua);
    setIdProduct(test[0]._id);
    setSuggestedProducts([]);
  };

  return (
    <div>
      <css.Form action="" onSubmit={onSubmit}>
        <css.InputProdName
          type="text"
          placeholder="Enter product name"
          value={productName || ''}
          onChange={handleProductNameChange}
        />
        {suggestedProducts.length > 0 && (
          <css.SuggestionsList>
            {suggestedProducts.map((product) => (
              <css.SuggestionItem
                key={product.id}
                onClick={() => handleProductSelect(product)}
              >
                {product.title.ua}
              </css.SuggestionItem>
            ))}
          </css.SuggestionsList>
        )}
        <css.InputGrams
          type="text"
          placeholder="Grams"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <css.Button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            style={{ width: '14px', height: '14px' }}
          >
            <path
              fill="#fff"
              d="M31.36 18.194h-13.166v13.166h-4.389v-13.166h-13.166v-4.389h13.166v-13.166h4.389v13.166h13.166v4.389z"
            />
          </svg>
        </css.Button>
      </css.Form>
    </div>
  );
>>>>>>> Stashed changes
}

export default CalculatorСalorieForm;
