import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
