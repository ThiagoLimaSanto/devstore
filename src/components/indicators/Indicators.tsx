import type { activeProps } from "../../types/Props";
import './Indicators.css'

const Indicators = ({ active }: activeProps) => {
    return (
        <div className="indicators">
            <div className="numbers">
                <p>0{active}</p>
            </div>
            <div className="dots">
                <div className={`dot ${active === 1 ? "active" : ""}`}></div>
                <div className={`dot ${active === 2 ? "active" : ""}`}></div>
                <div className={`dot ${active === 3 ? "active" : ""}`}></div>
            </div>
        </div>
    )
}

export default Indicators