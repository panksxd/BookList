import { NavLink, Outlet } from "react-router-dom";
import returnVal from "../components/BookFacade";
function BookList({setClickedBook}) {
    const books = returnVal.getBooks()

    return ( 
        <div>
            <h1>Books available</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <NavLink to={`${book.id}`} onClick={() => setClickedBook(book)}>{book.title}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
     );
}

export default BookList;