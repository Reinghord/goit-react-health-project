import { useSelector, useDispatch } from 'react-redux';
import * as css from './DiaryProductListItem.styled';
import { deleteProduct } from 'redux/day/day-operations';

function DiaryProductListItem() {
  const eatenProducts = useSelector(state => state.day.eatenProducts);
  const dayId = useSelector(state => state.day.id);
  const dispatch = useDispatch();

  const handleDeleteFood = eatenProductId => {
    const body = {
      dayId: dayId,
      eatenProductId: eatenProductId,
    };
    dispatch(deleteProduct(body));
    console.log(body);
  };

  // console.log(eatenProducts);
  return (
    <>
      {eatenProducts.map(eaten => (
        <css.ListItem key={eaten.id}>
          <css.PName>{eaten.title}</css.PName>{' '}
          <css.PGrame>{eaten.weight} g</css.PGrame>{' '}
          <css.PKcal>{eaten.kcal} kcal</css.PKcal>{' '}
          <css.Button onClick={() => handleDeleteFood(eaten.id)} type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="none"
            >
              <path stroke="#9B9FAA" strokeWidth="2" d="m1 1 12 12M1 13 13 1" />
            </svg>
          </css.Button>
        </css.ListItem>
      ))}
    </>
  );
}

export default DiaryProductListItem;
