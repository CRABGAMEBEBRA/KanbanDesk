import Header from '../header'
import Footer from '../footer'
import Main from '../main'
import { BrowserRouter } from 'react-router-dom'
import {useState, createContext, useMemo} from 'react'
export const UserContext = createContext();


function App() {

  const MassivListov = ["Backlog", "Ready", "InProgress", "Finished"]

  const [state, setState] = useState([])   

  const handleFormSubmit = (id, list, title, issue) => {
    localStorage.setItem(`n${id}`, [title, list, issue, id]);
  };

  useMemo(() => {  
    Object.keys(localStorage).forEach((key) => {
    let stroka = localStorage.getItem(key).split(",")
    let idLC = stroka[3]
    let issue = stroka[2]
    let list = stroka[1]
    let title = stroka[0]
    setState(state => [...state, {title:`${title}`, 
        issues:`${issue}`,
        id:Number(`${idLC}`),
        list:`${list}`
        }])})},[])



    //localStorage.clear();
  return (
      <BrowserRouter>
        <UserContext.Provider value={{ state, setState, handleFormSubmit, MassivListov }}>
        <Header />
        <Main />
        <Footer />
        </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
