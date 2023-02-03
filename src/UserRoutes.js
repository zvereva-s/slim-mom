import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./shared/components/Loader/Loader";
import PrivateRoute from "./shared/components/PrivateRoute";
import PublicRoute from "./shared/components/PublicRoute";

const CalculatorPage = lazy(() => import("./pages/CalculatorPage"));
const DiaryPage = lazy(() => import("./pages/DiaryPage"));
const MainPage = lazy(() => import("./pages/MainPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function UserRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/slimmom-en" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />

        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/diary" element={<DiaryPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default UserRoutes;
