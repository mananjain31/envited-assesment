// Add Lazy loading afterwards
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
const LandingPage = lazy(() => import(`Pages/LandingPage.jsx`));
const EventPage = lazy(() => import("Pages/EventPage"));

const staticValue = {
  heading: "Birthday Bash",
  by: "Elysia",
  details: {
    date: {
      from: "18 August 6:00PM",
      to: "19 August 1:00PM",
    },
    streetName: "Suburb, State, Postcode",
  },
};

export const AppContext = React.createContext();
const App = () => {
  const [event, setEvent] = React.useState(staticValue);
  return (
    <AppContext.Provider value={{ event, setEvent }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="/event" element={<EventPage />} />
          </Route>
        </Routes>
      </Suspense>
    </AppContext.Provider>
  );
};

export default App;
