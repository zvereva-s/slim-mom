
import classNames from 'classnames';

import Button from '../Button';

import s from './authSocial.module.scss'

function AuthSocial() { 
    return (
        <div className={s.wrapper}>
            {/* <Button type='button' icon="fb" className={classNames("button")}/> */}
            <Button type='button' icon="google" className={classNames("button")} onClick={()=>{ window.location.replace('http://localhost:3003/api/auth/google')}} />
        </div>
    )
}
export default AuthSocial;