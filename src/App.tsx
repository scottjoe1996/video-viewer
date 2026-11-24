import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";

import CataloguePage from "./pages/CataloguePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoadingSpinner from "./components/LoadingSpinner";
import VideoPage from "./pages/VideoPage";
import CatalogueLayout from "./layouts/CatalogueLayout";

function App() {
  return (
    <div className="bg-mist-800 p-2 h-screen">
      <Routes>
        <Route path="/" element={<Navigate to="/catalogue" />} />
        <Route element={<CatalogueLayout />}>
          <Route
            path="/catalogue/*"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <CataloguePage />
              </Suspense>
            }
          />
          <Route path="/video/" element={<Navigate to="/catalogue" />} />
          <Route path="/video/*" element={<VideoPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
