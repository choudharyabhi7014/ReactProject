export const addToCart = item => ({
  type: 'AddToCart',
  payload: item
});

export const removeFromCart = item => ({
  type: 'RemoveFromCart',
  payload: item
});

export const setSearch = (query) => {
  return ({
  type: 'SetSearch',
  payload: query
})};

export const login=()=>{
  return (
    {
      type :"Login",
      payload :''
    }
  )
}
export const logout=()=>{
  return (
    {
      type :"Logout",
    }
  )
}




