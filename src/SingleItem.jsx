const SingleItem = ({ item, removeItem, editItem }) => {
  const { id, name, completed } = item

  return (
    <>
      <div className="single-item" data-reactid={id}>
        <input
          type="checkbox"
          name={name}
          id={id}
          checked={completed}
          onChange={() => editItem(id, !completed)}
        />
        <p style={{ textDecoration: completed ? "line-through" : "none" }}>
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
