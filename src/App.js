import React from "react";
import Home from "./screens/Home";
import Store, { StoreProvider } from "./services/store";

const store = new Store();
/* Create a new store */

function App() {
  return (
    <StoreProvider store={store}>
      <Home />
    </StoreProvider>
  );
}

export default App;
