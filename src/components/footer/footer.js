import css from './footer.module.css'
import {useContext} from 'react'
import { UserContext } from '../app/App';

export default function Fouter(){

    const {state, finishedList} = useContext(UserContext);
    
    return (
        <footer className={css.footer}>
            <p className={css.activet}>Active tasks: {state.filter(state => state.list == "Backlog").length}</p>
            <p className={css.finishedt}>Finished tasks: {state.filter(state => state.list == "Finished").length}</p>
            <p className={css.kanbanB}>Kanban board by Crabgame, 2024</p>
        </footer> 
    )
}