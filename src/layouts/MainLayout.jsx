import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
    return ( 
        <div>
            <div id="bar">
                <NavLink to="bookList">Book list</NavLink> | <NavLink to="addBook">Add a book</NavLink> | <NavLink to="findBook">Find a book</NavLink> | <NavLink to="/">Home</NavLink>
            </div>
            <Outlet/>
        </div>
     );
}

export default MainLayout;