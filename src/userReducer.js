// 2. Create Slice - Actions, Reducers & Initial Values
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => { // state is like this in js or self in python
      state.user = action.payload; // payload is the actual value for the state
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;


// [var, setVar, clearVar] = useState(null) | action & reducer - Redux
// [var, setVar, clearVar] = useState(null) | action & reducer - Redux
// [var, setVar, clearVar] = useState(null) | action & reducer - Redux
// [var, setVar, clearVar] = useState(null) | action & reducer - Redux
// [var, setVar, clearVar] = useState(null) | action & reducer - Redux
// [var, setVar, clearVar] = useState(null) | action & reducer - Redux
// [var, setVar, clearVar] = useState(null) | action & reducer - Redux
// effect -> update the var with setVar
// access the value via var --> currentVar