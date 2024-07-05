import css from './ready.module.css'
import {useState, useContext} from 'react'
import { UserContext } from '../app/App';
import { Link } from 'react-router-dom';

export default function Ready(){

    const {state, setState, spisok, setspisok, handleFormSubmit} = useContext(UserContext);
    const [handlead, sethandleadd] = useState()
    const handleDropdownChange = (event) => {
        setspisok(spisok => [...spisok, {title:event.target.value, 
            issues:(state.find(state => state.title == event.target.value)).issues,
            id:(state.find(state => state.title == event.target.value)).id,
            }])
        setState(state.filter(state => (state.title != event.target.value)));
        sethandleadd(handlead => !handlead)
        handleFormSubmit((state.find(state => state.title == event.target.value)).id, 'ready', event.target.value, (state.find(state => state.title == event.target.value)).issues)
      };
    return(
        <div className={css.divReady}>
            <p className={css.ready}>Ready</p>
            <div>{spisok.map(spisok => (<Link to={`/tasks/${spisok.id}`}key={spisok.id} className={css.newDiv}>{spisok.title}</Link>))}</div>
            {!handlead? '' :
            <div>
                <select className = {css.select} onChangeCapture={handleDropdownChange}>
                    <option></option>
                    {state.map(state => (<option value = {state.title} key={state.id} className={css.newDiv}>{state.title}</option>))}
                    </select>
            </div>
                }
            <div onClick={() => {sethandleadd(handlead => !handlead)}} className={css.add}>+ Add card</div>
        </div>
    )
}