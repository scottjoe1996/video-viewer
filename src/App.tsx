import { Routes, Route } from "react-router";

import CataloguePage from "./pages/CataloguePage";

function App() {
  return (
    <Routes>
      <Route path="/catalogue/*" element={<CataloguePage />} />
    </Routes>
  );
}

export default App;
