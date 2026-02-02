import Arrow from "../../components/arrow/Arrow";
import Indicators from "../../components/indicators/Indicators";
import List from "../../components/itens-list/List";
import Circle from "../../components/tech-circle/Circle";


const Main = () => {
    return (
        <main className='container'>
            <Circle />
            <List />
            <Arrow />
            <Indicators />
        </main>
    )
}

export default Main
