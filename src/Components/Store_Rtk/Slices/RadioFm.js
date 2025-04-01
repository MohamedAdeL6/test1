import SoundQuran from '../../Data/SoundQuran/new.json'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: SoundQuran,
}

export const soundQuranData = createSlice({
  name: 'soundQuranData',
  initialState,
  reducers: {
    retrieveRecitersQuran: (state, action) => {
    }
  },
})

// Action creators are generated for each case reducer function
export const { retrieveRecitersQuran } = soundQuranData.actions

export default soundQuranData.reducer

