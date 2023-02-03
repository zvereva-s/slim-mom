
import s from './link.module.scss'

function Link({ text }) {

    return (<p className={s.link}>{text}</p>)
 }

export default Link;