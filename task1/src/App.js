import Complete from "./Pages/Complete/Complete";
import Uncomplete from "./Pages/Uncomplete/Uncomplete";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Splash from "./Pages/Splash/Splash";
import Head from "./Pages/Header/Head";
import AppContext from "./Context";
function App() {
  const [load, setload] = useState(false);
  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 2500);
  }, []);
  return load ? (
    <Splash />
  ) : (
    <>
    <AppContext>
      {/* <Scrolltop /> */}
      {/* <Meganavbar /> */}
      <Head />
      {/* <UpwardsArrow /> */}
      <Routes>
        <Route path="/incomplete" element={<Uncomplete />}></Route>
        <Route path="/complete" element={<Complete />}></Route>
      </Routes>
      {/* <Footer /> */}
      </AppContext>
    </>
  );
}

export default App;
