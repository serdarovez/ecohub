import Navbar from "./components/navbar/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import NewsLetter from "./pages/NewsLetter";
import NewsPage from "./pages/NewsPage";
import { BrowserRouter as Router, Route, Switch, Redirect, Routes, useLocation } from 'react-router-dom';
import Tazelikler from "./pages/Tazelikler";
import Library from "./pages/Library";
import Search from "./pages/Search";
import YashlarBarada from "./pages/YashlarBarada";
import YashlarDetail from "./pages/YashlarDetail";
import TopicDetail from "./pages/TopicDetail";
import Wakansiya from "./pages/Wakansiya";
import Questions from "./pages/Questions";
import { useEffect } from "react";
// import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";



function App() {
  const location = useLocation();
  useEffect(() => {
    // const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'auto' // Optional: smooth scrolling behavior
      });
    // };
    // Scroll to the top when the route changes
    // window.addEventListener('hashchange', scrollToTop);
    // return () => window.removeEventListener('hashchange', scrollToTop);
  }, [location.pathname]);

  return (
    <>
      <div className="flex min-h-[100vh] flex-col">

        <Navbar />
        {/* <Router> */}
        <div className="grow">

          <Routes>

            {/* <ScrollToTopOnRouteChange/> */}
            {/* <div className="relative"> */}
            <Route path="ecohub/" exact element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/newsletter" element={<NewsLetter />} />
            <Route path="/tazelikler" element={<Tazelikler />} />
            <Route path="/library" element={<Library />} />
            <Route path="/search" element={<Search />} />
            <Route path="/yaslar" element={<YashlarBarada />} />
            <Route path="/yaslar/detail" element={<YashlarDetail />} />
            <Route path="/wakansy" element={<Wakansiya />} />
            <Route path="/wakansy/detail" element={<TopicDetail show={true} />} />
            <Route path="/topic" element={<TopicDetail />} />
            <Route path="/questions" element={<Questions />} />

            {/* <Home /> */}
            {/* <NewsPage /> */}
          </Routes>
        </div>

        {/* </Router> */}
        <Footer />
        {/* </div> */}
      </div>


    </>
  );
}

export default App;
