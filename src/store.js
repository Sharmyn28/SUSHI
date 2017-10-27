import createStore from 'redux-zero'
import {dishes, selectedFood} from './dishes'

const initialState = {
   dishes: dishes,
   shopDishes:[],
   selectedFood: 0
}

const store = createStore(initialState)
export default store