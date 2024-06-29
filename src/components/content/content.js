import { Route, Routes } from 'react-router-dom'
import { useContext} from 'react'
import { UserContext } from '../app/App';

export default function Content(){

    const {state, spisok, readyList, finishedList} = useContext(UserContext);

    const compCreating = (Object) =>{
        return(
            <div>
                <p>{Object.title}</p>
                <p>{Object.issues}</p>
            </div>
        )
    }
    return(
        <Routes >
            {state.map(state => (<Route path = {`/tasks/${state.id}`} element = {compCreating(state)}/>))}
            {spisok.map(spisok => (<Route path = {`/tasks/${spisok.id}`} element = {compCreating(spisok)}/>))}
            {readyList.map(readyList => (<Route path = {`/tasks/${readyList.id}`} element = {compCreating(readyList)}/>))}
            {finishedList.map(finishedList => (<Route path = {`/tasks/${finishedList.id}`} element = {compCreating(finishedList)}/>))}
        </Routes>
    )
}


