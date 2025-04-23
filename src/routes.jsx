import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home';
import MovieDetail from "./pages/MovieDetail";
import User from "./pages/User";
import LoginRegister from "./pages/LoginRegister";
import Afilitation from "./pages/Afiliation";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/cuenta" element={<User />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/afilation" element={<Afilitation />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;


/* this file routes the paths with pages */