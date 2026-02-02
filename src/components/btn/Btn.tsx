import type { activeProps } from '../../types/Props'
import './Btn.css'

const Btn = ({ active }: activeProps) => {

    const links: Record<number, string> = {
        1: 'https://www.apple.com/br/watch/',
        2: 'https://www.apple.com/br/airpods-max/',
        3: 'https://www.apple.com/apple-vision-pro/',
    };

    const handleClick = () => {
        console.log("Entrei aqui");
        
        window.open(links[Number(active)], "_blank");
    };
    return (
        <>
            <button onClick={() => handleClick()} className="btn">Saiba Mais</button>
        </>
    )
}

export default Btn
