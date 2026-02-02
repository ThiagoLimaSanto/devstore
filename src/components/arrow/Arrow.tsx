import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const Arrow = () => {
    return (
        <div className="arrows">
            <button className="arrow-btn" id="prev"><FaArrowLeft /></button>
            <button className="arrow-btn" id="next"><FaArrowRight /></button>
        </div>
    )
}

export default Arrow
