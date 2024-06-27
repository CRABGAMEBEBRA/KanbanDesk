import Header from '../header'
import Footer from '../footer'
import Main from '../main'
import css from './App.module.css'


function App() {
  return (
    <div className={css.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
