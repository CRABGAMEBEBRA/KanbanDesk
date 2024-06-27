import css from './header.module.css'
import user from './user-avatar.svg'
import arrowDown from './Vector (1).svg'
import arrowUp from './Vector (2).svg'
import square from './Rectangle 27.svg'
import {useState} from 'react'

export default function Header(){
    const [state, setState] = useState(1)

    const handleAddListClick = () => {
		setState(state => !state)
	}

    return (
        <header className={css.header}>
            <p className={css.kanban}>Awesome Kanban Board</p>
            <div className={css.logMenu}>
                <div className={css.profile}>
                    <img className={css.logoImg} src={user} alt='' />
                    <div onClick={handleAddListClick}>{state?
                    <img className={css.arrowDown} src={arrowDown} alt='' /> :
                    <img className={css.arrowUp} src={arrowUp} alt='' />
                    }</div>
                </div>
            {state? "" :
            <div className={css.profileMenu}>
                <img className={css.square} src={square} alt='' />
                <div className={css.pMenu}>
                    <p className={css.zag}>Profile</p>
                    <p className={css.zag}>Log out</p>
                </div>
             </div>}
            </div>
        </header>
    )
}