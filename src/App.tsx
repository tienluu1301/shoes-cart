import AdapterProvider from "./context/AdapterProvider";

import HomePage from "./pages-section/home";

import "./App.css";

function App() {
  return (
    <AdapterProvider>
      <HomePage />
    </AdapterProvider>
  );
}

export default App;
