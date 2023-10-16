import { useContext } from "react"
import { ColorThemeContext } from "../context/ColorThemeContext"

export const useColorThemeContext = () => {
  const context = useContext(ColorThemeContext)

  if (!context) {
    throw Error("useColorThemeContext must be used inside a ColorThemeContextProvider")
  }

  return context
}