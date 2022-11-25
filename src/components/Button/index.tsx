
import style from './Button.module.scss'

function Button({children}: { children: string}){
   
    return(
        <button className={style.botao}>
            {children}
        </button>
    )
}

export default Button