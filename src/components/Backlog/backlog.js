import css from './backlog.module.css'
import {useState, useContext, useEffect} from 'react'
import { UserContext } from '../app/App';


export default function Backlog(){
    const {state, setState, handleFormSubmit} = useContext(UserContext);
    const [handlead, sethandleadd] = useState()
    const [nameTitle, setnameTitle] = useState('')
    const [newValue, setnewValue] = useState(0)

    const handleInput = (event) => {
        setnameTitle(event.target.value)
      };
    useEffect(() => 
        {
            for (let i = 0; i*4 < localStorage.length; i++) {
            let idLC = localStorage.getItem(`${i}.id`)
            let issue = localStorage.getItem(`${i}.issue`)
            let list = localStorage.getItem(`${i}.list`)
            let title = localStorage.getItem(`${i}.title`)
            if(list == 'state'){
                setState([...state, {title:title, 
                issues:issue,
                id:idLC,
            }])}}},[])
            //localStorage.clear();

    return (
            <div className={css.divBacklog}>
                <p className={css.backlog}>Backlog</p>
                <div>{state.map(state => (<div key={state.id} className={css.newDiv}>{state.title}</div>))}</div>
                {!handlead? '' :
                <input className = {css.inputch} onChange={handleInput}></input>
                }
                <div onClick={() => {sethandleadd(handlead => !handlead)}} className={css.add}>+ Add card</div>
                {(!handlead)? "" : 
                <button className = {css.submitbut} onClick = {() =>{{nameTitle==0? sethandleadd(handlead => !handlead) :
                    setState([...state, {title:nameTitle, 
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
