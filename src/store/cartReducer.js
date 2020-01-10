function cartReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.includes(action.productid)
        ? state
        : state.concat(action.productid);
    case "REMOVE_FROM_CART":
      return state.splice(state.indexOf(action.productid), 1)
    default:
      return state;
  }
}
export default cartReducer;
