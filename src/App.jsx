import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import BookList from './pages/BookList'
import AddBook from './pages/AddBook'
import FindBook from './pages/FindBook'
import { useState } from 'react'
import BookDetails from './components/BookDetails'

function App() {
const [clickedBook, setClickedBook] = useState({})
const routes = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
       <Route path='/bookList' element={<BookList setClickedBook={setClickedBook} />}/>
       <Route path='/bookList/:id' element={<BookDetails clickedBook={clickedBook} />} />
      <Route path='addBook' element={<AddBook/>}/>
      <Route path='findBook' element={<FindBook setClickedBook={setClickedBook}/>}/>
    </Route>
  )
)

  return (
    <>
    <RouterProvider router = {routes}/>
    </>
  )
}

export default App
