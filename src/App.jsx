import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Protected from "./components/Protected";
import AdminLayout from "./pages/Admin/AdminLayout";
import Login from "./pages/Admin/login/Login";
import Dashboard from "./pages/AppComponents/Dashboard/Dashboard";
import Error404 from "./components/Error404";
function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="*" element={<Protected Component={<Error404 />} />} />
          <Route
            index
            element={<Protected Component={<Navigate to="dashboard" />} />}
          />
          <Route
            path="dashboard"
            element={<Protected Component={<Dashboard />} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
