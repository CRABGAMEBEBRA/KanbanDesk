import css from './finished.module.css'
import {useState, useContext} from 'react'
import { UserContext } from '../app/App';
import { Link } from 'react-router-dom';

export default function Finished(){
    const {readyList, setreadyList, finishedList, setfinishedList, handleFormSubmit} = useContext(UserContext);
    const [handlead, sethandleadd] = useState()
    const handleDropdownChange = (event) => {
        setfinishedList(finishedList => [...finishedList, {title:event.target.value, 
            issues:(readyList.find(readyList => readyList.title == event.target.value)).issues,
            id:(readyList.find(readyList => readyList.title == event.target.value)).id,
            }])
        setreadyList(readyList.filter(readyList => (readyList.title != event.target.value)));
        sethandleadd(handlead => !handlead)
        handleFormSubmit((readyList.find(readyList => readyList.title == event.target.value)).id, 'finished', event.target.value, (readyList.find(readyList => readyList.title == event.target.value)).issues)
      };
    return(
        <div className={css.divFinished}>
            <p className={css.Finished}>Finished</p>
            <div>{finishedList.map(finishedList => (<Link to={`/tasks/${finishedList.id}`}key={finishedList.id} className={css.newDiv}>{finishedList.title}</Link>))}</div>
            {!handlead? '' :
            <div>
                <select className = {css.select} onChange={handleDropdownChange}>
                    <option></option>
                    {readyList.map(readyList => (<option value = {readyList.title} key={readyList.id} className={css.newDiv}>{readyList.title}</option>))}
                    </select>
            </div>
                }
            <div onClick={() => {sethandleadd(handlead => !handlead)}} className={css.add}>+ Add card</div>
        </div>
    )}