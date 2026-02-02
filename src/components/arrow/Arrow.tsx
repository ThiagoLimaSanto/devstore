import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import type { handleNextProps } from "../../types/Props"
import "./Arrow.css"

const Arrow = ({ handleNext }: handleNextProps) => {
    return (
        <div className="arrows">
            <button onClick={() => handleNext(-1)} className="arrow-btn" id="prev"><FaArrowLeft color="#fff" /></button>
            <button onClick={() => handleNext(1)} className="arrow-btn" id="next"><FaArrowRight color="#fff" /></button>
        </div>
    )
}

export default Arrow
