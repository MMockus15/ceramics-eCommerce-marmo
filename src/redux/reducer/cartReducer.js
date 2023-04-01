const initialState = {
	items: [],
	total: 0,
	quantity: 0
  };
  
  const cartReducer = (state = initialState, action) => {
	switch (action.type) {
	  case "ADD_TO_CART":
		const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
		if (itemIndex >= 0) {
		  const updatedItems = [...state.items];
		  updatedItems[itemIndex].quantity++;
		  return {
			...state,
			items: updatedItems,
			quantity: state.quantity + 1,
			total: state.total + action.payload.price
		  };
		} else {
		  const newItem = {
			...action.payload,
			quantity: 1
		  };
		  return {
			...state,
			items: [...state.items, newItem],
			quantity: state.quantity + 1,
			total: state.total + action.payload.price
		  };
		}
	  case "REMOVE_FROM_CART":
		const itemToRemove = state.items.find(item => item.id === action.payload);
		if (itemToRemove.quantity > 1) {
		  const updatedItems = [...state.items];
		  const itemIndex = state.items.findIndex(item => item.id === action.payload);
		  updatedItems[itemIndex].quantity--;
		  return {
			...state,
			items: updatedItems,
			quantity: state.quantity - 1,
			total: state.total - itemToRemove.price
		  };
		} else {
		  return {
			...state,
			items: state.items.filter(item => item.id !== action.payload),
			quantity: state.quantity - 1,
			total: state.total - itemToRemove.price
		  };
		}
	  case "ADD_PRODUCT_TO_CART":
		const productToAdd = action.payload;
		const existingItemIndex = state.items.findIndex(item => item.id === productToAdd.id);
		if (existingItemIndex >= 0) {
		  const updatedItems = [...state.items];
		  updatedItems[existingItemIndex].quantity++;
		  return {
			...state,
			items: updatedItems,
			quantity: state.quantity + 1,
			total: state.total + productToAdd.price
		  };
		} else {
		  const newItem = {
			...productToAdd,
			quantity: 1
		  };
		  return {
			...state,
			items: [...state.items, newItem],
			quantity: state.quantity + 1,
			total: state.total + productToAdd.price
		  };
		}
	  default:
		return state;
	}
  };
  
  export default cartReducer;
  
  