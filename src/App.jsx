import { YellowPages } from "./pages/YellowPages";
import { Provider } from "react-redux";
import reducers from "./redux/slices";
import thunk from "redux-thunk";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: [...getDefaultMiddleware(), thunk],
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <YellowPages />
      </div>
    </Provider>
  );
}

export default App;
