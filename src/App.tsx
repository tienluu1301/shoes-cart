import AdapterProvider from "./context/AdapterProvider";

import HomePage from "./pages/home";

import "./App.css";

function App() {
  return (
    <AdapterProvider>
      <HomePage />
    </AdapterProvider>
  );
}

export default App;
