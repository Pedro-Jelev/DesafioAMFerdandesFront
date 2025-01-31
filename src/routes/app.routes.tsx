import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Jabaquara } from "../pages/Jabaquara";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jabaquara" element={<Jabaquara />} />
    </Routes>
  );
}
