import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesAsync,
  getCocktailsAsync,
} from "../../redux/actions/actions";
import Item from "../Item/Item";
import Categories from "../Categories/Categories";

const Main = () => {
  const dispatch = useDispatch();

  const { data, categories, category } = useSelector((state) => state.main);
  const { isLoading, error } = useSelector((state) => state.loader);
  //   используется для получения параметров из строки запроса URL в
  //   веб-браузере. Он создает новый объект URLSearchParams,
  //   который предоставляет методы для доступа к параметрам.
  const searchParams = new URLSearchParams(window.location.search);
  const foundParams = searchParams.get("category");
  console.log(isLoading);
  // console.log(data);

  useEffect(() => {
    Promise.all([
      dispatch(getCocktailsAsync("Ordinary_Drink")),
      dispatch(getCategoriesAsync()),
    ]);
  }, [dispatch]);

  const items = data?.map((item) => <Item key={item.idDrink} item={item} />);

  const getCocktailsByCategoryUI = (e) => {
    dispatch(getCocktailsAsync(e.target.value));
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("category", e.target.value);
    window.history.pushState(
      { path: e.target.value },
      "",
      currentUrl.toString()
    );
  };

  if (isLoading) return <h2>LOADING...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <section>
      <h2>MAIN</h2>
      {/* {isLoading && <h2>LOADING...</h2>}
      {error && <h2>{error}</h2>} */}
      <Categories
        categories={categories}
        getCocktailsByCategoryUI={getCocktailsByCategoryUI}
        category={category}
      />
      <div className="wrap">{items}</div>
    </section>
  );
};

export default Main;
