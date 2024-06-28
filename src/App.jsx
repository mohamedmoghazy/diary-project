import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import DisplayDiaries from "./components/DisplayDiaries";
import DiaryDetail from "./components/DiaryDetail";
import NewCard from "./components/NewCard";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import React, { useState, useEffect } from "react";
import {
  addToLocalStorageArray,
  getFromLocalStorage,
} from "./Util/localStorageUtil";

const localStorageKey = "saveddata";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [items, setItems] = useState(getFromLocalStorage(localStorageKey));

  useEffect(() => {
    const storedItems = getFromLocalStorage(localStorageKey);
    setItems(storedItems);
  }, []);

  function AddNewCard(newItem) {
    newItem.id = getNextId(items);
    addToLocalStorageArray(localStorageKey, newItem);
    setItems((prevItems) => [...prevItems, newItem]);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<DisplayDiaries diaries={items} />} />
        <Route
          path="diary-detail/:id"
          element={<DiaryDetail diaries={items} />}
        />
      </>
    )
  );

  return (
    <>
      <Navbar OnNewCardClicked={ShowModal}></Navbar>

      <Modal modalIsVisible={modalIsVisible} HideModal={HideModal}>
        <NewCard HideModal={HideModal} onAddNewCard={AddNewCard} />
      </Modal>

      <RouterProvider router={router} />

      <Footer />
    </>
  );

  function HideModal() {
    setModalIsVisible(false);
  }

  function ShowModal() {
    setModalIsVisible(true);
  }

  function getNextId(diaries) {
    let maxId = 0;

    diaries.forEach((diary) => {
      if (diary.id > maxId) {
        maxId = diary.id;
      }
    });

    return maxId + 1;
  }
}

export default App;
