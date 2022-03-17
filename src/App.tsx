import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";

import { debounce } from "debounce";
import { saveState } from "redux/browser-storage";
import { store } from "redux/store";

import { Home } from "screens/Home";

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);
function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        colorScheme: "dark",
      }}
    >
      <Provider store={store}>
        <Home />
      </Provider>
    </MantineProvider>
  );
}

export default App;
