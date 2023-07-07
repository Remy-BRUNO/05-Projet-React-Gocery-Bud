import SingleItem from "./SingleItem"

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className="items">
      {items
        ? items.map((item) => (
            <SingleItem
              item={item}
              key={item.id}
              removeItem={removeItem}
              editItem={editItem}
            />
          ))
        : ""}
    </div>
  )
}
export default Items
