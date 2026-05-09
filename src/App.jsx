import AppRoutes from "./routes/AppRoutes";
import { PrimeReactProvider } from "primereact/api";
function App() {
  return (
    <>
      <PrimeReactProvider>
        <AppRoutes />
      </PrimeReactProvider>
    </>
  );
}

export default App;
