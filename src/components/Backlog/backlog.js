import css from './backlog.module.css'
import {useState, useContext} from 'react'
import { UserContext } from '../app/App';
import React from 'react';
import { Link } from 'react-router-dom';


export default function Backlog(){


    const {state, setState, handleFormSubmit, newValue, setnewValue} = useContext(UserContext);
    const [handlead, sethandleadd] = useState()
    const [nameTitle, setnameTitle] = useState('')

    const handleInput = (event) => {
        setnameTitle(event.target.value)
      };
    return (
            <div className={css.divBacklog}>
                <p className={css.backlog}>Backlog</p>
                <div>{state.map(state => (<Link to={`/tasks/${state.id}`} key={state.id} className={css.newDiv}>{state.title}</Link>))}</div>
                {!handlead? '' :
                <input className = {css.inputch} onChange={handleInput}></input>
                }
                <div onClick={() => {sethandleadd(handlead => !handlead)}} className={css.add}>+ Add card</div>
                {(!handlead)? "" : 
                <button className = {css.submitbut} onClick = {() =>{{nameTitle==0? sethandleadd(handlead => !handlead) :
                    setState(state => [...state, {title:nameTitle, 
                             issues:'This task has no description',
                             id:newValue,
                             }])
                    handleFormSubmit(newValue, 'state', nameTitle, 'This task has no description')
                    setnewValue(newValue => newValue + 1)
                    sethandleadd(handlead => !handlead)
                    setnameTitle('')}}}>Submit</button>}
            </div>
    )
}
