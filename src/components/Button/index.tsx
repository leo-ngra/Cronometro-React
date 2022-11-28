
import style from './Button.module.scss'

function Button({type = 'button', children}: { type?: "button" | "submit" | "reset" | undefined, children: string}){
 
   
    return(
        <button type={type} className={style.botao}>
            {children}
        </button>
    )
}

export default Button