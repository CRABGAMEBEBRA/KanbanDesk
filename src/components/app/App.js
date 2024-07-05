import Header from '../header'
import Footer from '../footer'
import Main from '../main'
import { BrowserRouter } from 'react-router-dom'
import {useState, createContext, useMemo} from 'react'
export const UserContext = createContext();


function App() {

  const [spisok, setspisok] = useState([])
  const [state, setState] = useState([])   
  const [readyList, setreadyList] = useState([]) 
  const [finishedList, setfinishedList] = useState([])
  const [newValue, setnewValue] = useState(0)


  const handleFormSubmit = (id, list, title, issue) => {
    localStorage.setItem(`n${id}`, [title, list, issue, id]);
  };

  useMemo(() => {  
    for (let i = 0; i < localStorage.length; i++) {
    let stroka = localStorage.getItem(`n${i}`).split(",")
    let idLC = stroka[3]
    let issue = stroka[2]
    let list = stroka[1]
    let title = stroka[0]
    if(list === 'state'){
        setState(state => [...state, {title:`${title}`, 
            issues:`${issue}`,
            id:Number(`${idLC}`),
        }])}
    if(list === 'ready'){
        setspisok(spisok => [...spisok, {title:`${title}`, 
            issues:`${issue}`,
            id:Number(`${idLC}`),
        }])}
    if(list === 'inProgress'){
        setreadyList(readyList => [...readyList, {title:`${title}`, 
            issues:`${issue}`,
            id:Number(`${idLC}`),
        }])}
    if(list === 'finished'){
        setfinishedList(finishedList => [...finishedList, {title:`${title}`, 
            issues:`${issue}`,
            id:Number(`${idLC}`),
        }])};setnewValue(localStorage.length)}},[])



    //localStorage.clear();
  return (
      <BrowserRouter>
        <UserContext.Provider value={{ state, setState, spisok, setspisok, readyList, setreadyList, finishedList, setfinishedList, handleFormSubmit, newValue, setnewValue}}>
        <Header />
        <Main />
        <Footer />
        </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
