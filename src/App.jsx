import "./sass/main.scss"
import { useLayoutEffect } from "react"
import Emoticon from "./components/Emoticon"
import ToggleColorTheme from "./components/ToggleColorTheme"
import { useColorThemeContext } from "./hooks/useColorThemeContext"
import Header from "./components/Header"

function App() {
  const { dispatch, colorTheme } = useColorThemeContext()

  useLayoutEffect(() => {
    const getColorTheme = JSON.parse(localStorage.getItem("color_theme"))
    const defaultColorTheme = "light"
    if (getColorTheme) {
      localStorage.setItem("color_theme", JSON.stringify(getColorTheme))
      dispatch({
        type: "COLOR_THEME",
        payload: {
          colorTheme: getColorTheme
        }
      })
    } else {
      localStorage.setItem("color_theme", JSON.stringify(defaultColorTheme))
      dispatch({
        type: "COLOR_THEME",
        payload: {
          colorTheme: defaultColorTheme
        }
      })
    }
  }, [])

  return (
    <div
      className={
        colorTheme === "light" ?
          "theme__light app"
          : colorTheme === "dark" ?
            "theme__dark app" : null
      }
    >
      <div
        className="container"
      >
        <Header />
        <Emoticon />
        <ToggleColorTheme />
      </div>
    </div>
  )
}

export default App
