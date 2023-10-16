import { useState } from "react"
import { useColorThemeContext } from "../hooks/useColorThemeContext"
import MoonIcon from "./MoonIcon"
import SunIcon from "./SunIcon"

const Button = ({
  handleMode,
  mode,
  handleAnimationStart,
  handleAnimationEnd,
  animateClass,
  active,
  icon
}) => (
  <button
    type="button"
    onClick={() => {
      handleMode(mode)
      handleAnimationStart()
    }}
    onAnimationEnd={handleAnimationEnd}
    className={
      animateClass ?
        animateClass : "toggle-color-theme__cta"
    }
    data-color-theme={active ? active : null}
    disabled={active}
  >
    {icon}
  </button>
)

const ToggleColorTheme = () => {
  const { dispatch, colorTheme } = useColorThemeContext()
  const [animate, setAnimate] = useState(() => null)
  const [active, setActive] = useState(() => true)

  const handleAnimationStart = () => {
    setActive(false)
    setAnimate(true)
  }

  const handleAnimationEnd = () => {
    setAnimate(false)
    setActive(true)
  }

  const handleMode = (mode) => {
    localStorage.setItem("color_theme", JSON.stringify(mode))
    dispatch({
      type: "COLOR_THEME",
      payload: {
        colorTheme: mode
      }
    })
  }

  return (
    <div className="toggle-color-theme">
      <Button
        handleMode={handleMode}
        mode={"light"}
        handleAnimationStart={handleAnimationStart}
        handleAnimationEnd={handleAnimationEnd}
        animateClass={
          animate && colorTheme === "light" ?
            "toggle-color-theme__cta animate-light-theme-cta"
            : null
        }
        active={
          colorTheme === "light" && active ?
            colorTheme : null
        }
        icon={<SunIcon />}
      />
      <Button
        handleMode={handleMode}
        mode={"dark"}
        handleAnimationStart={handleAnimationStart}
        handleAnimationEnd={handleAnimationEnd}
        animateClass={
          animate && colorTheme === "dark" ?
            "toggle-color-theme__cta animate-dark-theme-cta"
            : null
        }
        active={
          colorTheme === "dark" && active ?
            colorTheme : null
        }
        icon={<MoonIcon />}
      />
    </div>
  )
}

export default ToggleColorTheme