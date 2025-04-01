import React, { useEffect, useState } from "react";
// ---------- import App.Css File ;
import "./App.css";
// ---------- Import All Components To Show It
import HeaderPage from "./Components/Header/HeaderPage";
import Login from "./Components/Header/login/Login";
import LoginChoos from "./Components/Header/login/LoginChoos";
import { Route, Routes } from "react-router-dom";
import HomePages from "./Components/HomePages/HomePages";
import BrowseQuran from "./Components/HomePages/BrowseQuran/BrowseQuran";
import TafseerQuran from "./Components/HomePages/TafserQuran/TafserQuran";
import QuranReciters from "./Components/HomePages/SoundsQuran/QuranReciters/QuranReciters";
import SoundQuranSoura from "./Components/HomePages/SoundsQuran/SoundQuranSoura/SoundQuranSoura";
import RadioPage from "./Components/HomePages/RadioPage/RadioPage";
import RosaryOnline from "./Components/HomePages/RosaryOnline/RosaryOnline";
import Azkar from "./Components/HomePages/Azkar/Azkar";
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 0); // Hide loader after 3 seconds
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <HeaderPage />
          <Routes>
            <Route path="*" element={<HomePages />} />
            <Route path="/" element={<HomePages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginChoose" element={<LoginChoos />} />
            <Route path="/BrowseQuran" element={<BrowseQuran />} />
            <Route path="/TafserQuran" element={<TafseerQuran />} />
            <Route path="/SoundsQuran" element={<QuranReciters />} />
            <Route
              path="/SoundsuranSoura/:name_style"
              element={<SoundQuranSoura />}
            />
            <Route path="/radioFm" element={<RadioPage />} />
            <Route path="/SpeceficAzkar" element={<Azkar />} />
            <Route path="/RosaryOnline" element={<RosaryOnline />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
