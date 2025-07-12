import "./SimpleCard.css"

export default function SimpleCard( { card, handleChoice, flipped } ) {
    const handleClick = () => {
        handleChoice(card);
    }
    return (
        <div className="card" key={card.id}>
            <div className={flipped ? "flipped" : ""}></div>
            <div>
                <img className="front" src={card.src} alt="card front"></img>
                <img className="back" src="https://i.pinimg.com/1200x/9c/d0/39/9cd0390853ca36d1286cc4967ee05a41.jpg" onClick={handleClick} alt="card back"></img>
            </div>
        </div>
    )
}