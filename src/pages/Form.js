import { useState } from "react"
import { projectFirestore } from "../firebase/config"


const Form = () => {
  const [movieTitle, setMovieTitle] = useState("")
  const [movieAge, setMovieAge] = useState(null)
  const [movieTime, setMovieTime] = useState(null)


  const submitForm = (event) => {
    event.preventDefault()


    console.log(movieTitle, movieAge, movieTime)


  }


  return <section>
    <form onSubmit={submitForm} >
      <input
        type="text"
        placeholder="Název filmu"
        onChange={ (e) => setMovieTitle(e.target.value) }
      />


      <input
        type="number"
        placeholder="Minimální věk"
        min="1"
        onChange={(e) => setMovieAge(e.target.value)}  
      />


      <input
        type="number"
        placeholder="Čas filmu"
        min="1"
        onChange={ (e) => setMovieTime(e.target.value) }
      />


      <input type="submit" value="Přidat film" />


    </form>
  </section>
}


export default Form
