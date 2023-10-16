import { useLayoutEffect } from "react"
import Emoticon from "./components/Emoticon"
import ToggleColorTheme from "./components/ToggleColorTheme"
import { useColorThemeContext } from "./hooks/useColorThemeContext"
import "./sass/main.scss"

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
          "container theme__light" : "container theme__dark"
      }
    >
      <Emoticon />
      <ToggleColorTheme />
    </div>
  )
}

export default App
