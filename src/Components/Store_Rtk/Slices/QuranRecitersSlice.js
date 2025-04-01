import { createSlice } from "@reduxjs/toolkit";
import QuranReciters from "../../Data/QuranRecitersData/QuranRecitersData.json"



const initialState = {
    loading: false,
    data: QuranReciters,
    error: "",
}

export const QuranRecitersSlice = createSlice({

    name: "QuranRecitersSlice",
    initialState,
    reducers: {}
})

export default QuranRecitersSlice.reducer
