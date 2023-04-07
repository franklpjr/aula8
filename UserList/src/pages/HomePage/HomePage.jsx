import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UsersList from "../../components/UsersList";
import data from "../../data";

const HomePage = () => {
    const navigate = useNavigate();
    
    const { users } = data;

    const handleOnItemClick = useCallback((user) => {
        navigate(`/details/${user.id}`);
    }, []);
    
    return (
        <div className="page-wrapper">
            <UsersList users={users} onItemClick={handleOnItemClick}/>
        </div>
    )
}

export default HomePage;