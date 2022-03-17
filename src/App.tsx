import { Provider } from "react-redux";

import { store } from "redux/store";

import { Counter } from "screens/Counter";

import styles from "./styles.module.scss";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
