import css from './footer.module.css'
import {useContext} from 'react'
import { UserContext } from '../app/App';

export default function Fouter(){

    const {state, finishedList} = useContext(UserContext);
    
    return (
        <footer className={css.footer}>
            <p className={css.activet}>Active tasks: {state.length}</p>
            <p className={css.finishedt}>Finished tasks: {finishedList.length}</p>
            <p className={css.kanbanB}>Kanban board by Crabgame, 2024</p>
        </footer> 
    )
}