import { useState } from "react"

const SingleItem = ({ item, removeItem, editItem }) => {
  const { id, name, completed } = item
  const [isChecked, setIsChecked] = useState(completed)

  const completedChange = (id) => {
    setIsChecked(!isChecked)

    editItem(id)
  }

  return (
    <>
      <div className="single-item" data-reactid={id}>
        <input
          type="checkbox"
          name="item"
          id={id}
          checked={isChecked}
          onChange={() => completedChange(id)}
        />
        <p style={{ textDecoration: isChecked ? "line-through" : "none" }}>
          {name}
        </p>
        <button className="btn remove-btn" onClick={() => removeItem(id)}>
          Supprimer
        </button>
      </div>
    </>
  )
}
export default SingleItem
