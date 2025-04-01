import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false  ,
}

export const ChangeColorTheme = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    Drakmode: (state) => {
      state.value  = true
    },
    Lightmode: (state) => {
      state.value  = false
    },
  },
})

// Action creators are generated for each case reducer function
export const {Drakmode, Lightmode} = ChangeColorTheme.actions

export default ChangeColorTheme.reducer


