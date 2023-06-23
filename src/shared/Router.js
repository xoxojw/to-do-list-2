import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Details from "pages/Details";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route의 필수 요소 2개 - 1. path, 2. element */}
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router