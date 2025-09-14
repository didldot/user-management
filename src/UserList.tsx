import { User } from "./User";
import UserCard from "./UserCard";

interface UserListProps {
    users: User[];
    onClick: (user: User) => void;
}


function UserList({users, onClick}: UserListProps){

    return(
        <div>
            <h2>Benutzerprofil</h2>
            {users.map( (user, index)  => (
                <UserCard user={user} onClick={onClick} key={user.email}></UserCard>
            ))}
        </div>
    );
}

export default UserList;