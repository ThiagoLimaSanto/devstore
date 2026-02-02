import { useState } from "react";
import Arrow from "../../components/arrow/Arrow";
import Indicators from "../../components/indicators/Indicators";
import List from "../../components/itens-list/List";
import Circle from "../../components/tech-circle/Circle";

import './Main.css'

const Main = () => {
    const [active, setActive] = useState<number>(1)

    const handleNext = (n: number) => {
        if (active + n > 3 || active + n < 1) return
        setActive(active + n)
    }
    return (
        <main className='container'>
            <Circle />
            <List active={active} />
            <Arrow handleNext={handleNext} />
            <Indicators />
        </main>
    )
}

export default Main
