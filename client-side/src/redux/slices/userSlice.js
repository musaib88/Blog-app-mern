import { createSlice} from "@reduxjs/toolkit"; 



const initialState = {
  user:false,
  userData:{}
  
  
}

export const userSlice=createSlice({
  name:'user',
  initialState,
  reducers:{
    setUser:(state,action)=>{
      state.user=true;
      state.userData=action.payload;
     


    },
    clearUser:(state)=>{
      state.user=false;
      state.userData={};
    }
  }
})


export const {setUser,clearUser}=userSlice.actions;
export default userSlice.reducer;




    