import NavigationBar from "./Components/GlobalComponents/navigationBar";
import ApplicationRoutes from "./ApplicationRoutes/applicationRoutes";
import Footer from "./Components/GlobalComponents/footer";
import "./index.css";

function App() {
  return (
    <>
      <div className="App">
        <NavigationBar />
        <ApplicationRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
