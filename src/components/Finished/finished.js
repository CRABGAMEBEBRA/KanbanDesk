import css from './finished.module.css'
import {useState, useContext} from 'react'
import { UserContext } from '../app/App';


export default function Finished(){
    const {readyList, setreadyList, finishedList, setfinishedList} = useContext(UserContext);
    const [handlead, sethandleadd] = useState()
    const handleDropdownChange = (event) => {
        setfinishedList([...finishedList, {title:event.target.value, 
            issues:(readyList.find(readyList => readyList.title == event.target.value)).issues,
            id:(readyList.find(readyList => readyList.title == event.target.value)).id,
            }])
        setreadyList(readyList.filter(readyList => (readyList.title != event.target.value)));
        sethandleadd(handlead => !handlead)
      };
    return(
        <div className={css.divFinished}>
            <p className={css.Finished}>Finished</p>
            <div>{finishedList.map(finishedList => (<div key={finishedList.id} className={css.newDiv}>{finishedList.title}</div>))}</div>
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