import { useParams } from "react-router-dom"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"

const OneMovie = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState(false)


  const { movieId } = useParams()


  useEffect( () => {
    projectFirestore.collection("movies").doc(movieId).get().then( (document) => {
      console.log(document)


      if (document.exists) {
        setData(document.data())
      } else {
        setError("Nenašli jsme tento film")
      }
    }).catch( (err) => {
      setError(err.message)
    })
  }, [])


  return <section>
    <h1>{data.title}</h1>
    <p>{data.minage}+</p>
    <p>{data.time} minut</p>
  </section>
}


export default OneMovie
