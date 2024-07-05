import css from './inProgress.module.css'
import {useState, useContext} from 'react'
import { UserContext } from '../app/App';
import { Link } from 'react-router-dom';

export default function InProgress(){
    const {spisok, setspisok, readyList, setreadyList,handleFormSubmit } = useContext(UserContext);
    const [handlead, sethandleadd] = useState()
    const handleDropdownChange = (event) => {
        setreadyList(readyList => [...readyList, {title:event.target.value, 
            issues:(spisok.find(spisok => spisok.title == event.target.value)).issues,
            id:(spisok.find(spisok => spisok.title == event.target.value)).id,
            }])
        setspisok(spisok.filter(spisok => (spisok.title != event.target.value)));
        sethandleadd(handlead => !handlead)
        handleFormSubmit((spisok.find(spisok => spisok.title == event.target.value)).id, 'inProgress', event.target.value, (spisok.find(spisok => spisok.title == event.target.value)).issues)
      };
    return(
        <div className={css.divInprog}>
            <p className={css.InProg}>In Progress</p>
            <div>{readyList.map(readyList => (<Link to={`/tasks/${readyList.id}`}key={readyList.id} className={css.newDiv}>{readyList.title}</Link>))}</div>
            {!handlead? '' :
            <div>
                <select className = {css.select} onChange={handleDropdownChange}>
                    <option></option>
                    {spisok.map(spisok => (<option value = {spisok.title} key={spisok.id} className={css.newDiv}>{spisok.title}</option>))}
                    </select>
            </div>
                }
            <div onClick={() => {sethandleadd(handlead => !handlead)}} className={css.add}>+ Add card</div>
        </div>
    )}