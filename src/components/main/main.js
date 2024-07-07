import css from './main.module.css'
import DivList from '../DivList'
import Content from '../content'
import { UserContext } from '../app/App';
import { useContext } from 'react'


export default function Main(){

    const {MassivListov} = useContext(UserContext);

    return (
        <main className={css.main}>
            <Content>
                {MassivListov.forEach(element => <DivList list={`${element}`} />)}
            </Content>
        </main>     
    )
}