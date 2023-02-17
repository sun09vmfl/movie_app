import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Celebrity from "./pages/Celebrity";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Tv from "./pages/Tv";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="root-warap">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie">
            <Route index element={<Movies />} />
            <Route path=":id" element={<MovieDetail />} />
          </Route>
          <Route path="/tv" element={<Tv />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
