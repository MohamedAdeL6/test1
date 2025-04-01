import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import TafserData from "../../Data/TafserData/TafserData.json"

const initialState = {
    loading: false,
  data: TafserData,
  error: "",
};

export const fetchTafserSoura = createAsyncThunk(
  `TafserDataSlice/fetchTafserSoura`,
  async (
    obj = {
      url: "http://api.quran-tafseer.com/tafseer/",
      title: "أذكار الصباح والمساء",
    }
  ) => {
    return axios.get(`${obj.url}`).then((res) => res.data[`${obj.title}`]);
  }
);

export const TafserDataSlice = createSlice({
  name: "TafserDataSlice",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchTafserSoura.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTafserSoura.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });

    builder.addCase(fetchTafserSoura.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});


export default TafserDataSlice.reducer;

























 

 
