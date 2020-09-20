import React from "react"
import containerStyles from "./container.module.css"

// export default function Container({ children }) {
//   return <div className={containerStyles.container}>{children}</div>
// }


export default function Column({ children }) {
    return <div className={containerStyles.column}>{children}</div>
  }