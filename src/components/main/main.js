import css from './main.module.css'
import Backlog from '../Backlog'
import Ready from '../ready'
import InProgress from '../inProgress/inProgress'
import Finished from '../Finished'
import Content from '../content'


export default function Main(){


    return (
        <main className={css.main}>
            <Content />
            <Backlog/>
            <Ready/>
            <InProgress/>
            <Finished/>
        </main>     
    )
}