import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, 
         Route, 
         RouterProvider, 
         createRoutesFromElements
} from "react-router-dom";
import store from './store';
import { Provider } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import HomeScreen from "./screens/HomeScreen";
import Layout from "./components/Layout";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import History from './screens/History';
import PrinceDaddy from "./screens/PrinceDaddy";
import PearlMama from "./screens/PearlMama";
import Priscilla from "./screens/Priscilla";
import PrinceJr from "./screens/PrinceJr";
import PetraYaanietta from "./screens/PetraYaanietta";
import PrinceKatansa from "./screens/PrinceKatansa";
import PrinceYaamaffuo from "./screens/PrinceYaamaffuo";
import Gallery from "./screens/Gallery";
import News from "./screens/News";

const App = () => {
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
      <Route index={true} path="/" element={<HomeScreen/>} />
      <Route path="/login" element={<LoginScreen/>} />
      <Route path="/register" element={<RegisterScreen/>} />
      <Route path="" element={<PrivateRoute/>} >
         <Route path="/profile" element={<ProfileScreen/>} />
         <Route path="/history" element={<History/>} />
         <Route path="/princedaddy" element={<PrinceDaddy/>} />
         <Route path="/pearlmama" element={<PearlMama/>} />
         <Route path="/priscilla" element={<Priscilla/>} />
         <Route path="/princejr" element={<PrinceJr/>} />
         <Route path="/princeyaamaffuo" element={<PrinceYaamaffuo/>} />
         <Route path="/petrayaanietta" element={<PetraYaanietta/>} />  
         <Route path="/princekatansa" element={<PrinceKatansa/>} />
         <Route path="/gallery" element={<Gallery/>} />
         <Route path="/news" element={<News/>}/>
      </Route>
  </Route>
  )
)
  return (
    <>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </>
     
  );
};

export default App;
