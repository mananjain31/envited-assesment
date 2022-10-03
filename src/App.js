// Add Lazy loading afterwards
import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "Pages/LandingPage";
import EventPage from "Pages/EventPage";

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
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="/event" element={<EventPage />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
