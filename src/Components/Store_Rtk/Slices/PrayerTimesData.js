import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	data: [],
	error: "",
}

const getFormattedDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");  // Ensure 2-digit format
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
  };
  

export const fetchPrayerTimes = createAsyncThunk("PrayerTimesSclice/fetchPrayerTimes", async (str) => {
	return axios.get(`https://api.aladhan.com/v1/timingsByCity/${getFormattedDate()}?city=cairo&country=egypt&method=8`)
		.then(res => res.data.data)
})

const PrayerTimesSclice = createSlice({	
	name: "PrayerTimesSclice",
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPrayerTimes.pending, (state, action) => {
			state.loading = true;
		})
		builder.addCase(fetchPrayerTimes.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = ""
		})
		builder.addCase(fetchPrayerTimes.rejected, (state, action) => {
			state.loading = false;
			state.data = [];
			state.error = state.error.message;
		})
	}
})

const { } = PrayerTimesSclice.reducer;


export default PrayerTimesSclice.reducer