import css from './ready.module.css'
import {useState, useContext} from 'react'
import { UserContext } from '../app/App';

export default function Ready(){

    const {state, setState, spisok, setspisok} = useContext(UserContext);
    const [handlead, sethandleadd] = useState()
    const handleDropdownChange = (event) => {
        setspisok([...spisok, {title:event.target.value, 
            issues:(state.find(state => state.title == event.target.value)).issues,
            id:(state.find(state => state.title == event.target.value)).id,
            }])
        setState(state.filter(state => (state.title != event.target.value)));
        sethandleadd(handlead => !handlead)
      };
    return(
        <div className={css.divReady}>
            <p className={css.ready}>Ready</p>
            <div>{spisok.map(spisok => (<div key={spisok.id} className={css.newDiv}>{spisok.title}</div>))}</div>
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