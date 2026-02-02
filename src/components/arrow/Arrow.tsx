import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Arrow.css"

const Arrow = () => {
    return (
        <div className="arrows">
            <button className="arrow-btn" id="prev"><FaArrowLeft color="#fff" /></button>
            <button className="arrow-btn" id="next"><FaArrowRight color="#fff" /></button>
        </div>
    )
}

export default Arrow
