import styles from "./styles";
import React from 'react'
import Constant from './component/Constant'
import Main from './component/Main'
import Teeth from './component/Teeth'



const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Constant />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <Main />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <Teeth />
          advertisment
          valueadded benefits
          q hollywood smile 
          How it works 
          our specialist doctors 
        </div>
      </div>
    </div>
  )
}

export default App