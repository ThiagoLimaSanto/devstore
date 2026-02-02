import './Indicators.css'

const Indicators = () => {
    return (
        <div className="indicators">
            <div className="numbers">
                <p>01</p>
            </div>
            <div className="dots">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}

export default Indicators