import { createSlice } from '@reduxjs/toolkit'

//Необходимые стейты со значением по умолчанию
const initialState = {
    goFilm: false
}

export const mySlice = createSlice({
  name: 'my', //имя
  initialState,
  reducers: {
    // Функция которая будет управлять значением
    setGoFilm: (state, action) => {      
      state.goFilm = action.payload
    },

    
  },
})


export const { setGoFilm,  } = mySlice.actions

export default mySlice.reducer