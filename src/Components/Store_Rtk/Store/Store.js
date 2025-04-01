import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slices/ColorTheme";
import QuranPdfDownload from "../Slices/QuranPdf";
import SoundQuranData from "../Slices/SoundQuranData";
import AzkarData from "../Slices/AzkarData";
import SpecificAzkarData from "../Slices/SpeceficiAzkarData";
import PrayerTimesSclice from "../Slices/PrayerTimesData";
import QuranRecitersSlice from "../Slices/QuranRecitersSlice";
import  TafserDataSlice  from "../Slices/TafserSlice";

export const store = configureStore({
  reducer: {
    darkMode: counterReducer,
    QuranPdf: QuranPdfDownload,
    soundQuran: SoundQuranData,
    azkar: AzkarData,
    specificAzkar: SpecificAzkarData,
    prayerTimes: PrayerTimesSclice,
    quranReciters: QuranRecitersSlice,
    tafserSoura: TafserDataSlice,
  },
});
