import { useState } from "react";
import returnVal from "../components/BookFacade";
import { NavLink, Outlet } from "react-router-dom";
function FindBook({setClickedBook}) {
const [bookFound, setBookFound] = useState({})
const [notFoundMessage, setNotFoundMessage] = useState("");
const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.number.value;
    const foundBook = returnVal.findBook(input);
  
    if (foundBook) {
      setBookFound(foundBook);
      setNotFoundMessage("");
    } else {
      setBookFound({});
      setNotFoundMessage(`Book with ID ${input} not found`);
    }
  };

    return ( 
        <div>
            <h1>Find a Book</h1>
     <form onSubmit={handleSubmit}>
        <label>
          Id:
          <input type="number" name="number"/>
        </label>
        <br />
        <button type="submit">Find Book</button>
      </form>
      {notFoundMessage ? (
        <p>{notFoundMessage}</p>) : (
        <p>
          <NavLink
            to={`/bookList/${bookFound.id}`}
            onClick={() => setClickedBook(bookFound)}
          >
            {bookFound.title}
          </NavLink>
        </p>
      )}
        </div>
     );
}

export default FindBook;