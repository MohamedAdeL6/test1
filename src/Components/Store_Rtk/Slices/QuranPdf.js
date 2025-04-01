import QuranPdf from '../../Data/DataQuranDownload/DataQuranDownload'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: QuranPdf,
}

export const QuranPdfDownload = createSlice({
  name: 'QuranPdfDownload',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const {} = QuranPdfDownload.actions

export default QuranPdfDownload.reducer