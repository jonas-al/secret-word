import './Game.css'
import { useState, useRef } from 'react'
const Game = ({
  verifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters, 
  guessedLetters, 
  wrongLetters, 
  guesses, 
  score
}) => {
  const [letter, setLetter] = useState('')
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    verifyLetter(letter)
    setLetter('')

    letterInputRef.current.focus()
  }

  return (
    <div className="game">
      <p className="points">
        <span>Potuação: {score}</span>
      </p>
      <h1>Secret Word</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory.charAt(0).toUpperCase() + pickedCategory.slice(1)}</span>
      </h3>
      <p>Você ainda tem {guesses} chances!</p>
      <div className="wordContainer">
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key={i} className='letter'>{letter}</span>
          ) : (
            <span key={i} className='blankSquare'></span>
          )
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente adivinha uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="letter" 
            maxLength='1' 
            required 
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref = {letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Letras já utilizadas: </p>
          {wrongLetters.length > 0? wrongLetters.map((letter, i) => (
            <div className='wrongLetter'>
              <span key={i}>{letter}</span>
            </div>
          )): null}
        </div>
    </div>
  )
}

export default Game