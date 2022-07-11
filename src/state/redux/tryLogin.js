const initialState = null;

const redirect = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS_LOGIN":
      return action.newstate;
    default : return state;
  }
};

export default redirect;
