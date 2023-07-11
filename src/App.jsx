import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Form from "./Form"
import Items from "./Items"
import { nanoid } from "nanoid"
function App() {
  const [items, setItems] = useState([])

  const setLocalStorage = (article) => {
    localStorage.setItem("articles", JSON.stringify(article))
  }

  const addItem = (item) => {
    const newItem = { name: item, id: nanoid(10), completed: false }
    if (!item) return toast.error("😫  Veuillez remplir le champ")
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success("🛒  Article ajouté")
  }

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success("🚮  Article supprimer!")
  }

  const editItem = (id, completed) => {
    items.map((item) => {
      if (item.id === id) item.completed = completed
    })
    setLocalStorage(items)
    setItems(JSON.parse(localStorage.getItem("articles")))
  }

  useEffect(() => {
    JSON.parse(localStorage.getItem("articles"))
      ? setItems(JSON.parse(localStorage.getItem("articles")))
      : setItems([])
  }, [])
  return (
    <section className="section-center">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        draggable={true}
        theme="light"
      />
      <Form addItem={addItem} />
      <Items removeItem={removeItem} editItem={editItem} items={items} />
    </section>
  )
}

export default App
