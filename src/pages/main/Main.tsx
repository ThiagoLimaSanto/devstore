import { useEffect, useState } from "react";
import Arrow from "../../components/arrow/Arrow";
import Indicators from "../../components/indicators/Indicators";
import List from "../../components/itens-list/List";
import Circle from "../../components/tech-circle/Circle";

import './Main.css'

const Main = () => {
    const [active, setActive] = useState<number>(1)

    useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev === 3 ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);
    const handleNext = (n: number) => {
        if (active === 3 && n === 1) setActive(1)
        if (active === 1 && n === -1) setActive(3)
        if (active + n > 3 || active + n < 1) return
        setActive(active + n)
    }
    return (
        <main className='container'>
            <Circle />
            <List active={active} />
            <Arrow handleNext={handleNext} />
            <Indicators active={active} />
        </main>
    )
}

export default Main
