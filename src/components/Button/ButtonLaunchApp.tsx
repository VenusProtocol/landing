import React from "react"
import Button from "./Button"

interface IButtonLaunchAppProps {
  className?: string
}

const ButtonLaunchApp: React.FC<IButtonLaunchAppProps> = ({ className }) => {
  return (
    <Button className={className} href="https://app.venus.io">
      Launch app
    </Button>
  )
}

export default ButtonLaunchApp
