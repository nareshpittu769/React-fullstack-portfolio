import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import { Routes, Route } from "react-router-dom";
import Notfound from "./components/Notfound.js";
import Login from "./pages/login/Login.js";
import Skeleton from "./components/navbar/Skeleton.js";

// import Footer from './components/footer/Footer.js'
const LazyHome = React.lazy(() => import("./pages/home/Home.js"));
const LazyAbout = React.lazy(() => import("./pages/about/About.js"));
const LazyExp = React.lazy(() => import("./pages/experience/Experience.js"));
const LazyProjects = React.lazy(() => import("./pages/projects/Projects.js"));
const LazyProfile = React.lazy(() => import("./pages/login/Profile.js"));

const LazyFeatured = React.lazy(() =>
  import("./pages/projects/featured/Featured.js")
);
const LazyProjectDetails = React.lazy(() =>
  import("./pages/projects/ProjectDetails.js")
);
const LazyFstack = React.lazy(() =>
  import("./pages/projects/fullStack/FStack.js")
);
export const Usercontext = React.createContext(null);

function App() {
  const [darkmode, setdarkmode] = useState(false);

  return (
    <div className="App">
      <Usercontext.Provider
        value={{ darkmode: darkmode, setdarkmode: setdarkmode }}
      >
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback="Loading...">
                <LazyHome />
              </React.Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route
            path="/experience"
            element={
              <React.Suspense fallback="Loading...">
                <LazyExp />
              </React.Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <React.Suspense fallback="Loading...">
                <LazyProjects />
              </React.Suspense>
            }
          >
            <Route
              index
              element={
                <React.Suspense fallback={<Skeleton />}>
                  <LazyFeatured />
                </React.Suspense>
              }
            />
            <Route
              path="featured"
              element={
                <React.Suspense fallback={<Skeleton />}>
                  <LazyFeatured />
                </React.Suspense>
              }
            />

            <Route
              path="fstack"
              element={
                <React.Suspense fallback={<Skeleton />}>
                  <LazyFstack />
                </React.Suspense>
              }
            />
          </Route>
          <Route
            path="/projectdetails/:proId"
            element={
              <React.Suspense fallback="Loading...">
                <LazyProjectDetails />
              </React.Suspense>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <React.Suspense fallback="Loading...">
                <LazyProfile />
              </React.Suspense>
            }
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
        {/* <Footer/> */}
      </Usercontext.Provider>
    </div>
  );
}

export default App;
