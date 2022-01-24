import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Add from "./pages/Add";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

function App() {
  const [contacts, setContacts] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchContact, setSearchContact] = useState("");

  useEffect(() => {
    // if we don't have data in localStorage
    if (!localStorage.getItem("contacts")) {
      axios("https://demo.sibers.com/users").then((response) => {
        localStorage.setItem("contacts", JSON.stringify(response.data));
        setContacts(JSON.parse(localStorage.getItem("contacts")));
        // save id for future 
        localStorage.setItem("lastId", 79);
      });
    }
    // if we have data
    else
      setContacts(
        JSON.parse(localStorage.getItem("contacts")).sort((a, b) => b.id + a.id)
      );
  }, []);

  return (
    <>
      <Header
        setSearchContact={setSearchContact}
        setDrawerOpen={setDrawerOpen}
        drawerOpen={drawerOpen}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setDrawerOpen={setDrawerOpen}
              drawerOpen={drawerOpen}
              contacts={contacts}
              setContacts={setContacts}
              searchContact={searchContact}
            />
          }
        />
        <Route path="/details/:id" element={<Details contacts={contacts} />} />
        <Route
          path="/details/edit/:id"
          element={<Edit contacts={contacts} setContacts={setContacts} />}
        />
        <Route
          path="/add"
          element={<Add contacts={contacts} setContacts={setContacts} />}
        />
      </Routes>
    </>
  );
}

export default App;
