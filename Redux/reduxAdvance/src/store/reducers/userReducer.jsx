import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users : [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
  ],
}

export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers : {
        
    },
})

export default userSlice.reducer ;