import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, findCategory } from '../../store/category/actions';
import { setProduct } from '../../store/product/actions';

const selectCategories = (reduxState) => {
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
    <div className='PopularSearches'>
      <h1 onClick={(e) => getCategories()}>Categories</h1>
      <ul>
        {categories &&
          categories.map((c, i) => (
            <li onClick={(e) => getCategory(c.id)} key={i}>
              {c.name}
            </li>
          ))}
        {category && (
          <>
            <h2>{category.name}</h2>
            {category.products.map((p, i) => (
              <li onClick={(e) => getProduct(p)} key={i}>
                {p.name}
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}
