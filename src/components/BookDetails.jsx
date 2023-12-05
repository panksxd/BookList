import { NavLink } from "react-router-dom";

function BookDetails({clickedBook}) {
    const details = clickedBook ? clickedBook.info : "";
    const bookName = clickedBook ? clickedBook.title : "";
    return ( 
        <div>
            <h2>{bookName}</h2>
            <p>{details}</p>
            <NavLink to="/bookList">Book list</NavLink>
        </div>
     );
}

export default BookDetails;