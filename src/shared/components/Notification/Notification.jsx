
import s from './notification.module.scss'

function Notification({ text, onClick }) {
  return (
    <div onClick={onClick} className={s.wrapper}>
      <p className={s.text}>{text}</p>
    </div>
  )
}

export default Notification;