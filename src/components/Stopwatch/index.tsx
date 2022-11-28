import style from './Stopwatch.module.scss'
import Button from "../Button";
import Clock from "./Clock";
import { tempoParaSegundos } from '../../common/utils/date';

export default function Stopwatch() {
    console.log('conversao:', tempoParaSegundos('01:01:01'))
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>

            <Button>
                Começar
            </Button>
        </div>
    )
}