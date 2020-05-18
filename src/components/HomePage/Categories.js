import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, findCategory } from '../../store/category/actions';
import { setProduct } from '../../store/product/actions';

const selectCategories = (reduxState) => {
  console.log(reduxState);

  return reduxState.categories.list;
};
const selectCategory = (reduxState) => {
  return reduxState.categories.single;
};

export default function Categories({ chooseProduct }) {
  const categories = useSelector(selectCategories);
  const category = useSelector(selectCategory);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const getCategories = () => {
    dispatch(fetchCategories());
  };

  const getCategory = (id) => {
    dispatch(findCategory(id));
  };

  const getProduct = (product) => {
    dispatch(setProduct(product));
    chooseProduct(product);
  };

  return (
    <div className='Categories'>
      {categories && !category && (
        <>
          <h1>Categories</h1>
          <ul>
            {categories.map((c, i) => (
              <li onClick={(e) => getCategory(c.id)} key={i}>
                {c.name}
              </li>
            ))}
          </ul>
        </>
      )}
      {category && category.products && (
        <>
          <h1>
            <b className='link' onClick={(e) => getCategories()}>
              Categories:{' '}
            </b>
            <b>{category.name}</b>
          </h1>
          <ul>
            {category.products.map((p, i) => (
              <li onClick={(e) => getProduct(p)} key={i}>
                {p.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
