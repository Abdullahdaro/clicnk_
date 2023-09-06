import styles from "./styles";
import React, { lazy, Suspense } from 'react';
const Constant = lazy(() => import('./component/Constant'));
const Main = lazy(() => import('./component/Main'));
const Teeth = lazy(() => import('./component/Teeth'));
const Value = lazy(() => import('./component/Value'));
const Reviews = lazy(() => import('./component/Reviews'));
const HowItWorks = lazy(() => import('./component/HowItWorks'));
const Partner = lazy(() => import('./component/Partner'));
const Digitalsmile = lazy(() => import('./component/Digitalsmile'));
const Doctors = lazy(() => import('./component/Doctors'));
const Europe = lazy(() => import('./component/Europe'));
const Advertisement = lazy(() => import('./component/Advertisement'));
const Specialist = lazy(() => import('./component/Specialist'));


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`w-full`}>
        <div className={`z-20 w-full h-full `}>
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
          <Suspense fallback={<div>Loading Teeth...</div>}>
            <Teeth />
          </Suspense>
          <Suspense fallback={<div>Loading Advertisement...</div>}>
            <Advertisement />
          </Suspense>
          <Suspense fallback={<div>Loading Value...</div>}>
            <Value />
          </Suspense>
          <Suspense fallback={<div>Loading Reviews...</div>}>
            <Reviews />
          </Suspense>
          <Suspense fallback={<div>Loading HowItWorks...</div>}>
            <HowItWorks />
          </Suspense>
          <Suspense fallback={<div>Loading Doctors...</div>}>
            <Doctors />
          </Suspense>
          <Suspense fallback={<div>Loading Digitalsmile...</div>}>
            <Digitalsmile />
          </Suspense>
          <Suspense fallback={<div>Loading Specialist...</div>}>
            <Specialist />
          </Suspense>
          <Suspense fallback={<div>Loading Europe...</div>}>
            <Europe />
          </Suspense>
          <Suspense fallback={<div>Loading Partner...</div>}>
            <Partner />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App