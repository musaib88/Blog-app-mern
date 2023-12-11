import { createSlice} from "@reduxjs/toolkit"; 



const initialState = {
  user:false,
  userName:""
  
}

export const userSlice=createSlice({
  name:'user',
  initialState,
  reducers:{
    setUser:(state,action)=>{
      state.user=true;
      state.userName=action.payload;
     


    },
    clearUser:(state)=>{
      state.user=false;
      state.userName="";
    }
  }
})


export const {setUser,clearUser}=userSlice.actions;
export default userSlice.reducer;




    