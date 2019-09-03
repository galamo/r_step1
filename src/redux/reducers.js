import ACTIONS from "./actions.config";

const initialState = {
  loading: false,
  countries: [],
  error: null
};

export default function root(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload.c,
        loading: true
      };
    // case ADD_TODO_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: null,
    //     todos: [...state.todos, action.payload]
    //   };
    // case ADD_TODO_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload.error
    //   };
    default:
      return state;
  }
}
