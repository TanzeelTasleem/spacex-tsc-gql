import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import Header from "./components/header/header";
import { Launch } from "./components/launch/launch";
import { Loading } from "./components/loading/loading";
const Home = React.lazy(() => import("./components/Home/Home")); // Lazy-loaded
const Launches = React.lazy(() => import("./components/launches/launches"));
const LaunchDetails = React.lazy(
  () => import("./components/launchDetails/LaunchDetails")
);

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/launches" element={<Launch />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<h1>loading ....</h1>}>
                <Launches />
              </Suspense>
            }
          />
          <Route
            path=":launchID"
            element={
              <Suspense fallback={<h1>loading ....</h1>}>
                <LaunchDetails />
              </Suspense>
            }
          />
          <Route path="*" element={<h1>not found ...</h1>} />
        </Route>
        <Route path="*" element={<h1>not found ...</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
