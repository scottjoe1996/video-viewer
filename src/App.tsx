import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";

import CataloguePage from "./pages/CataloguePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/catalogue" />} />
      <Route
        path="/catalogue/*"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <CataloguePage />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
