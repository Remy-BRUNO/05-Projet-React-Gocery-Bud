import { useState } from "react"
import { nanoid } from "nanoid"

const Form = ({ notifyError, addItem }) => {
  const [item, setItem] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = { name: item, id: nanoid(10), completed: false }
    if (!item) return notifyError()

    addItem(newItem)
    setItem("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          name="text"
          id="text"
          className="form-input"
          value={item}
          onChange={(e) => setItem(e.currentTarget.value)}
        />
        <button type="submit" className="btn">
          Ajouter
        </button>
      </div>
    </form>
  )
}
export default Form
