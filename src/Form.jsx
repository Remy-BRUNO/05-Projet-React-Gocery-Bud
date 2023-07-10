import { useState } from "react"

const Form = ({ addItem }) => {
  const [item, setItem] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(item)
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
