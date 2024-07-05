import { Route, Routes } from 'react-router-dom'
import { useContext, useEffect} from 'react'
import { UserContext } from '../app/App';
import Backlog from '../backlog'
import Ready from '../ready'
import InProgress from '../inProgress/inProgress'
import Finished from '../Finished'
import css from './content.module.css'

export default function Content(){

    const {state, spisok, readyList, finishedList, setState, setfinishedList, setreadyList, setspisok, handleFormSubmit} = useContext(UserContext);
    
    let textValue
    const compCreating = (Object, list) =>{
        return(
            <div className={css.mainEl}>
                <div className={css.Newlink}>
                    <p className={css.title}>{Object.title}</p>
                    <p className={css.issues} contentEditable="true" onInputCapture={e => handleFormSubmit(Object.id, list, Object.title, `${e.target.innerHTML}`)}
                    >{Object.issues}</p>
                </div>
            </div>
        )
    }
    return(
        <Routes >
            {state.map(state => (<Route path = {`/tasks/${state.id}`} element = {compCreating(state, "state")}/>))}
            {spisok.map(spisok => (<Route path = {`/tasks/${spisok.id}`} element = {compCreating(spisok, "ready")}/>))}
            {readyList.map(readyList => (<Route path = {`/tasks/${readyList.id}`} element = {compCreating(readyList, "inProgress")}/>))}
            {finishedList.map(finishedList => (<Route path = {`/tasks/${finishedList.id}`} element = {compCreating(finishedList, "finished")}/>))}
            <Route path = '*' element = {
                <div className={css.mainEl}>
                    <Backlog/>
                    <Ready/>
                    <InProgress/>
                    <Finished/>
                </div>}/>
            <Route path = '/tasks/*' element = {<div className={css.Newlink}> <p className={css.title}>This task is not existing</p></div>}/>   
        </Routes>
    )
}


