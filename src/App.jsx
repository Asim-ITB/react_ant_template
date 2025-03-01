import { RouterProvider } from "react-router-dom";
import { router } from "./config/Routes";
import "./App.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
