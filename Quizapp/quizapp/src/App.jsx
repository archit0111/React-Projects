import Quizapp from "./Quizapp.jsx"
import { ThemeProvider } from "./context/ThemeContext.jsx"

function App() {

  return (
    <ThemeProvider>
    <Quizapp/>
    </ThemeProvider>
  )
}

export default App
