import { Routes, Route, Navigate } from "react-router";

import CataloguePage from "./pages/CataloguePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/catalogue" />} />
      <Route path="/catalogue/*" element={<CataloguePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
