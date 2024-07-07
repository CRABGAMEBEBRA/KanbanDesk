import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../app/App';
import DivList from '../DivList'
import css from './content.module.css'

export default function Content(){

    const {state, handleFormSubmit , MassivListov} = useContext(UserContext);
    
    let textValue
    const compCreating = (Object, list) =>{
        return(
            <div className={css.mainEl}>
                <div className={css.Newlink}>
                    <p className={css.title}>{Object.title}</p>
                    <p className={css.issues} contentEditable="true" onInputCapture={e => handleFormSubmit(Object.id, `${list}`, Object.title, `${e.target.innerHTML}`)}
                    >{Object.issues}</p>
                </div>
            </div>
        )
    }
    return(
        <Routes >
            {state.map(state => (<Route path = {`/tasks/${state.id}`} element = {compCreating(state, `${state.list}`)}/>))}
            <Route path = '*' element = {
                <div className={css.mainEl}>
                    {MassivListov.map(element => <DivList list={`${element}`} />)}
                </div>}/>
            <Route path = '/tasks/*' element = {<div className={css.Newlink}> <p className={css.title}>This task is not existing</p></div>}/>   
        </Routes>
    )
}


