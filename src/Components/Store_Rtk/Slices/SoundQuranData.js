import SoundQuran from '../../Data/SoundQuran/NewDataQuran.json'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: SoundQuran,
}

export const soundQuranData = createSlice({
  name: 'soundQuranData',
  initialState,
  reducers: {
    retrieveSouraQuran: (state, action) => {
       state.value = [action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { retrieveSouraQuran } = soundQuranData.actions

export default soundQuranData.reducer

