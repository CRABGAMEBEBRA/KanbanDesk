import css from './DivList.module.css'
import {useState, useContext} from 'react'
import { UserContext } from '../app/App';
import React from 'react';
import { Link } from 'react-router-dom';


export default function DivList(props){

    const list = props.list;
    const {state, setState, handleFormSubmit, MassivListov} = useContext(UserContext);
    const [handlead, sethandleadd] = useState()
    const [nameTitle, setnameTitle] = useState('')
    let newId
    const handleInput = (event) => {
        setnameTitle(event.target.value)
    }
    const handleDropdownChange = (event) => {
        const neededState = state.find(state => (state.title == event.target.value))
        setState(state.filter(state => (state.title != event.target.value)));
        setState(state => [...state, {title:event.target.value,
            issues: neededState.issues,
            id: neededState.id,
            list: `${list}`
        }])
        handleFormSubmit(`${neededState.id}`, `${list}`, event.target.value, neededState.issues)
        sethandleadd(handlead => !handlead)
      };

    return (
            <div className={css.divBacklog}>
                <p className={css.backlog}>{list}</p>
                <div>{state.filter(state => state.list == `${list}`).map(state => (<Link to={`/tasks/${state.id}`} key={state.id} className={css.newDiv}>{state.title}</Link> ))}</div>
                {list == `${MassivListov[0]}` || !handlead? '' :       
                <div>
                    <select className = {css.select} onChange={handleDropdownChange}>
                        <option></option>
                        {state.filter(state => state.list == `${MassivListov[MassivListov.indexOf(`${list}`)-1]}`).map(state => (<option value = {state.title} key={state.id} className={css.newDiv}>{state.title}</option>))}
                        </select>
                </div>
                }
                {list !=`${MassivListov[0]}` || !handlead? '' :
                <input className = {css.inputch} onChange={handleInput}></input>
                }
                <div onClick={() => {sethandleadd(handlead => !handlead)}} className={css.add}>+ Add card</div>
                {list !=`${MassivListov[0]}` || !handlead? "" : 
                <button className = {css.submitbut} onClick = {() =>{{nameTitle==0? sethandleadd(handlead => !handlead) : 
                    newId = Math.random()
                    setState(state => [...state, {title:nameTitle, 
                             issues:'This task has no description',
                             id: `${newId}`,
                             list: `${list}`,
                             }])
                    handleFormSubmit(newId, `${list}`, nameTitle, 'This task has no description')
                    sethandleadd(handlead => !handlead)
                    setnameTitle('')}}}>Submit</button>}
            </div>
    )
}
