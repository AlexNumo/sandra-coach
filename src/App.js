import {
  Suspense,
  lazy
} from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
// import Header from "./Components/Header/Header";
// import MainPage from "Components/MainPage/MainPage";
// import SchedulePage from 'Pages/SchedulePage/SchedulePage';
// import InfoCoach from 'Pages/InfoCoach/InfoCoach';
// import ScheduleGet from 'Components/ScheduleGet/ScheduleGet';
// import Schedule from 'Components/Schedule/Schedule';
// import Album from 'Components/Album/Album';
// import Market from 'Components/Market/Market';
// import Abonnement from './Pages/Abonnement/Abonnement';
import Toaster from './Components/Toasts/Toasts';
// import TEST from './Components/TEST/TEST';

// const Header = lazy(() => import('./Components/Header/Header.jsx' /* webpackChunkName: "Header"*/));
const MainPage = lazy(() => import('Pages/MainPage/MainPage' /* webpackChunkName: "MainPage"*/));
// const SchedulePage = lazy(() => import('Pages/SchedulePage/SchedulePage' /* webpackChunkName: "SchedulePage"*/));
// const ScheduleGet = lazy(() => import('./Components/ScheduleGet/ScheduleGet.jsx' /* webpackChunkName: "ScheduleGet"*/));
// const ScheduleTEST = lazy(() => import('./Components/ScheduleTEST/ScheduleTEST.jsx' /* webpackChunkName: "ScheduleGet"*/));
// const InfoCoach = lazy(() => import('Pages/InfoCoach/InfoCoach' /* webpackChunkName: "InfoCoach"*/));
// const Market = lazy(() => import('./Components/Market/Market.jsx' /* webpackChunkName: "Market"*/));
// const Abonnement = lazy(() => import('./Pages/Abonnement/Abonnement.jsx' /* webpackChunkName: "Abonnement"*/));
// const Toaster = lazy(() => import('./Components/Toasts/Toasts.jsx' /* webpackChunkName: "Toasts"*/));

function App() {
  return (
    <>
      <Suspense fallback={<h1>"Downloading..."</h1>}>
        <Routes>
          <Route exact path="/" element={<MainPage />} >
            {/* <Route exact path="/" element={<MainPage/>} />
            <Route path="/schedule" element={<SchedulePage/>} />
            <Route path="/info-coach-clients" element={<InfoCoach />} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;


