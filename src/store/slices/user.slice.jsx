import { createSlice } from '@reduxjs/toolkit';

// Actions: 
// 1. Create the action in the slice
// 2. Export the action 
// 3. Import in the component where is to be used 
// 4. Import and execute useDispach
// 5. Dispach the action 

export const usersSlice = createSlice({
		name: 'user',
    initialState: "",
    reducers: {
        changeName: (_state, action) => {
          return action.payload
        }
    }
})

export const { changeName } = usersSlice.actions;

export default usersSlice.reducer;