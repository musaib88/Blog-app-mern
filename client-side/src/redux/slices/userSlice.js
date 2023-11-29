import { createSlice} from "@reduxjs/toolkit";



const initialState = {
  user: false,
  
};

export const userSlice=createSlice({
  name:'user',
  initialState,
  reducers:{
    setUser:(state)=>{
      state.user=true;

    },
    clearUser:(state)=>{
      state.user=false
    }
  }
})


export const {setUser,clearUser}=userSlice.actions;
export default userSlice.reducer;




    