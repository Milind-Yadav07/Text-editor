import { useRef, useEffect } from "react"
import Quill from "quill"
import "quill/dist/quill.snow.css"
import TOOLBAR_OPTIONS from "./component/ToolbarOptions"

function App() {
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (!wrapperRef.current) return

    // Clear any existing content
    wrapperRef.current.innerHTML = ""

    // Create editor container
    const editorDiv = document.createElement("div")
    wrapperRef.current.appendChild(editorDiv)

    // Initialize Quill editor
    const quill = new Quill(editorDiv, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    })
    quill.enable()

    // Load saved content from localStorage
    const saved = localStorage.getItem("quill-content")
    if (saved) {
      try {
        quill.setContents(JSON.parse(saved))
      } catch {
        quill.setText("")
      }
    } else {
      quill.setText("")
    }

    // Save content on text change
    quill.on("text-change", () => {
      const content = quill.getContents()
      localStorage.setItem("quill-content", JSON.stringify(content))
    })

  }, [])

  return <div className="container" ref={wrapperRef}></div>
}

export default App
