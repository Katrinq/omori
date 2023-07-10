import './App.css'
import {Outlet, Route, Routes} from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GetStarted from "./pages/GetStarted";
import Requirements from "./pages/Requirements";
import UserStories from "./pages/UserStories";
import UseCases from "./pages/UseCases";
import {Box} from '@chakra-ui/react';

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="get-started" element={<GetStarted />} />
              <Route path="requirements" element={<Requirements />} />
              <Route path="user-stories" element={<UserStories />} />
              <Route path="use-cases" element={<UseCases />} />
              <Route path="*" element={<NotFound/>} />
            </Route>
      </Routes>
    </>
  )
}

function Layout() {
    return (
    <Box height="100vh">
        <Header/>
            <Outlet />
        <Footer/>
    </Box>

    );
}


export default App
