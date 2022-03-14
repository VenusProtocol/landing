import React from "react"
import Link from "./Link"

interface ILinkLaunchAppProps {
  className?: string
}

const LinkLaunchApp: React.FC<ILinkLaunchAppProps> = ({ className }) => {
  return (
    <Link className={className} href="https://app.venus.io">
      Launch app
    </Link>
  )
}

export default LinkLaunchApp
