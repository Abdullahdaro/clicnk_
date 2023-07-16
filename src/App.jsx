import styles from "./styles";
import React from 'react'
import Constant from './component/Constant'
import Main from './component/Main'
import Teeth from './component/Teeth'
import Value from './component/Value'
import Reviews from './component/Reviews'
import HowItWorks from './component/HowItWorks'
import Partner from "./component/Partner";
import Digitalsmile from "./component/Digitalsmile";
import Doctors from "./component/Doctors";


const App = () => {
  return (
    <div className="bg-primary  w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} fixed`}>
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
          <Value />
          <Reviews />
          <HowItWorks /> 
          <Doctors />
          <Digitalsmile />
          <Partner/>
        </div>
      </div>
    </div>
  )
}

export default App