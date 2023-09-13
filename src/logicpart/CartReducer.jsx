import { combineReducers } from "redux";
import data from "../Datapart/Data";

const searachdata = [...data.Section4data, ...data.Section5data, ...data.Shopdata]
const initialState =
  [
    {
      id: 1,
      tag: "Hot",
      product: "images/product-1-1.jpg",
      title: "Snack",
      details: "seeds of change organic quinoa brown,& red rice",
      image: "images/star.png",
      rating: "(4.0)",
      sponser: "By",
      food: "Nestfood",
      price: "$28.85",
      del: "32.8",
      pic: "images/icon-cart.png",
      add: "Add"
    },


  ];
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'AddToCart':
      return [...state, action.payload]

    case 'RemoveFromCart':
      const updatedItems = state.filter(item => item.id !== action.payload);
      return updatedItems;

    default:
      return state;
  }
}



function searchBar(state = data.Section4data, action) {
  switch (action.type) {
    case 'SetSearch':
      const query = action.payload.toLowerCase();

      return searachdata.filter((data) => {
        if (query === '') { return data }
        else if (data.title.toLowerCase().includes(query)) {
          return data;
        }
      })
    default:
      return state;
  }
}


const initialStation = {
  access: false,

}


function Loginlogout(state = initialStation, action) {
  switch (action.type) {
    case 'Login':
      return { access: true }

    case 'Logout':
      return { access: false }
  }
  return state
}




export const combine = combineReducers({ cartReducer, searchBar, Loginlogout })