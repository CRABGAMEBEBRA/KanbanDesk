import { queries } from '@testing-library/react'
import css from './main.module.css'
import {useState} from 'react'

export default function Main(){

    const divBacklog = document.querySelector(".divBacklog")
    const [state, setState] = useState({name: ""})

    const divCreating = (value) => {
        document.querySelector('.inputch').remove();
        document.querySelector('.submitbut').remove();
        divBacklog.appendChild(
            <div className={css.newBacklogDiv}>
                value
            </div>
        )
    }
    
    const handleInput = (event) => {
        this.setState({ name: event.target.value });
      };

    const handleAddListClick = () => {
        divBacklog.appendChild(
            <div>
                <input className = {css.inputch} onChange={handleInput}>{this.state.name}</input>
                <button className = {css.submitbut} onclick = {divCreating(state.name)}>Submit</button>
            </div>
        )
	}

    return (
        <main className={css.main}>
            <div className={css.divBacklog}>
                <p className={css.backlog}>Backlog</p>
                <div className={css.login}>Login page – performance issues</div>
                <div className={css.sprint}>Sprint bugfix</div>
                <div onClick={handleAddListClick} className={css.add}>+ Add card</div>
            </div>
        </main>
    )
}