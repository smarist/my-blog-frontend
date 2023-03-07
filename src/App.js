import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/route";
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
