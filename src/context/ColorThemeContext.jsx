import { createContext, useLayoutEffect, useReducer } from "react"

export const ColorThemeContext = createContext()

export const colorThemeReducer = (state, action) => {
  switch (action.type) {
    case "COLOR_THEME":
      return { colorTheme: action.payload.colorTheme }
    default:
      return state
  }
}

export const ColorThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(colorThemeReducer, {
    colorTheme: null
  })

  useLayoutEffect(() => {
    const colorTheme = localStorage.getItem("color_theme")
    if (colorTheme) {
      dispatch({
        type: "COLOR_THEME",
        payload: {
          colorTheme: JSON.parse(colorTheme)
        }
      })
    }
  }, [])

  // console.log("color theme context", state)

  return (
    <ColorThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ColorThemeContext.Provider>
  )
}