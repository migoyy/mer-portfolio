import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@components/layout/RootLayout";
import HomePage from "@pages/HomePage";
import NotFoundPage from "@pages/NotFoundPage";

/**
 * Application routing.
 * Add new pages by registering a <Route /> under <RootLayout />.
 * Example:  <Route path="/blog" element={<BlogPage />} />
 */
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
