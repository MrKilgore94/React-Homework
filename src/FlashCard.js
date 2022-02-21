import {useState} from 'react'
const FlashCard = (props) => {
    const [showQuestion, setShowQuestion] = useState(true)
    const renderCard = ()=>{
        if(showQuestion){
            return <p>{props.question}</p>
        } else {
            return <p>{props.answer}</p>
        }
    }

    
    return(
        <div id='flashcards'>
          <button class='button2' onClick={()=>setShowQuestion(!showQuestion)}>
          {showQuestion ? 'Show answer' : 'Back to question'}
          </button>
          
          {renderCard()}

        </div>
    )
}

export default FlashCard