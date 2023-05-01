import Header from "./components/Header/Header";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import Board from "./components/Board/Board";

import classes from "./App.module.scss";

const App = () => {
  return (
    <main className={classes.root}>
      <RegisterModal />
      <Header />
      <Board />
    </main>
  );
};

export default App;
