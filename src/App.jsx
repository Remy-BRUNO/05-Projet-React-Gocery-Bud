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
    if (!item) return notifyError()
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    notifySucces()
  }

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
    setLocalStorage(newItems)
    notifyRemove()
  }
  useEffect(() => {
    JSON.parse(localStorage.getItem("articles"))
      ? setItems(JSON.parse(localStorage.getItem("articles")))
      : setItems([])
  }, [])

  const editItem = (id) => {
    const checkedItems = [...items]
    checkedItems.forEach((item) => {
      if (item.id === id) {
        item.completed ? (item.completed = false) : (item.completed = true)
      }
    })

    setLocalStorage(checkedItems)
  }

  // toast
  const notifySucces = () => {
    toast.success("🛒  Article ajouté", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  }
  const notifyError = () => {
    toast.error("😫  Veuillez remplir le champ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  }
  const notifyRemove = () => {
    toast.success("🚮  Article supprimer!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  }

  return (
    <section className="section-center">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Form addItem={addItem} />
      <Items removeItem={removeItem} editItem={editItem} items={items} />
    </section>
  )
}

export default App
