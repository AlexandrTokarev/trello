import Header from './components/Header/Header';
import RegisterModal from './components/RegisterModal/RegisterModal';

import classes from './App.module.scss';

const App = () => {
  return (
    <main className={classes.root}>
      <RegisterModal />
      <Header />
    </main>
  )
}

export default App;
