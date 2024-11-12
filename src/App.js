import {HashRouter as Router, Routes, Route} from "react-router-dom";

//components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

//pages
import AboutPage from "./pages/AboutPage/AboutPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import MainPage from "./pages/MainPage/MainPage";
import SingleArticlePage from "./pages/SingleArticlePage/SingleArticlePage";
import SingleCoursePage from "./pages/SingleCoursePage/SingleCoursePage";
import SingleEventPage from "./pages/SingleEventPage/SingleEventPage";



function App() {
  return (
    <Router >
      <div className="App">
        <Header/>

        <main className="main">
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/blogs" element={<BlogPage/>} />
            <Route path="/contacts" element={<ContactsPage/>} />
            <Route path="/courses" element={<CoursesPage/>} />
            <Route path="/events" element={<EventsPage/>} />
            <Route path="/article" element={<SingleArticlePage/>} />
            <Route path="/course" element={<SingleCoursePage/>} />
            <Route path="/event" element={<SingleEventPage/>} />            
          </Routes>
        </main>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
