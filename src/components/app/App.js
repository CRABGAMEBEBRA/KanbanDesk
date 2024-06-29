import Header from '../header'
import Footer from '../footer'
import Main from '../main'
import { BrowserRouter } from 'react-router-dom'
import {useState, createContext} from 'react'
export const UserContext = createContext();


function App() {

  const [spisok, setspisok] = useState([])
  const [state, setState] = useState([])   
  const [readyList, setreadyList] = useState([]) 
  const [finishedList, setfinishedList] = useState([])

  const handleFormSubmit = (id, list, title, issue) => {
    localStorage.setItem(`${id}.title`, title);
    localStorage.setItem(`${id}.list`, list);
    localStorage.setItem(`${id}.issue`, issue);
    localStorage.setItem(`${id}.id`, id);
  };

  return (
      <BrowserRouter>
        <UserContext.Provider value={{ state, setState, spisok, setspisok, readyList, setreadyList, finishedList, setfinishedList, handleFormSubmit}}>
        <Header />
        <Main />
        <Footer />
        </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
