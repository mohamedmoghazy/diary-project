import {
  createBrowserRouter,
  createRoutesFromElements,
  json,
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

function App()
{
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isFetchingData, setIsFetching] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() =>
  {
    async function fetchItems()
    {
      setIsFetching(true);
      const resoponse = await fetch('http://localhost:8080/items')
      const data = await resoponse.json();
      setItems(data.items);
      setIsFetching(false);
    }

    fetchItems();
  }, []);

  function AddNewCard(newItem)
  {
    newItem.id = getNextId(items);
    addItemHandler(newItem);
  }

  function addItemHandler (newItem)
  {
    fetch('http://localhost:8080/items' ,{
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {'Content-Type': 'application/json'}
    });
    
    setItems((existingItems) => [...existingItems, newItem]);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<DisplayDiaries diaries={items} isFetchingData={isFetchingData} />} />

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
