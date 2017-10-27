import store from './store';

export const addDishes = (image, name, price, index) => {
   let oldList = store.getState().shopDishes;
   const newList = oldList.concat({
      id: oldList.length,
      image: image,
      name: name,
      price: price
   });
   store.setState({
      shopDishes: newList
   });

   console.log(newList);
};