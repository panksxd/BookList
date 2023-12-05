import { useState } from "react";
import returnVal from "../components/BookFacade";
function AddBook() {
const [newBook, setNewBook] = useState({title: "", info: ""})

const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    returnVal.addBook(newBook);
    setNewBook({
        title: "",
        info: "",
      });
  };
return ( 
    <div>
     <h1>Add a Book</h1>
     <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Info:
          <input
            type="text"
            name="info"
            value={newBook.info}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Book</button>
      </form>
    </div>
     );
}

export default AddBook;