import createStore from 'redux-zero'
import {dishes} from './dishes'

const initialState = {
   dishes: dishes,
}

const store = createStore(initialState)
export default store