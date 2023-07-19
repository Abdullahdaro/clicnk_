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
import Europe from "./component/Europe";


const App = () => {
  return (
    <div className="bg-primary  w-full overflow-hidden">
      <div className={`w-full`}>
        <div className={`z-20 w-full h-full`}>
          <Constant />
        </div>
      </div>

      <div className={`bg-primary `}>
        <div className={``}>
          <Main />
        </div>
      </div>

      <div className={`bg-primary `}>
        <div className={` `}>
          <Teeth />
          <Value />
          <Reviews />
          <HowItWorks /> 
          <Doctors />
          <Digitalsmile />
          <Europe />
          <Partner/>
        </div>
      </div>
    </div>
  )
}

export default App