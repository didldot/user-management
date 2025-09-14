import { User } from "./User";

interface UserCardProps {
    user: User;
    onClick: (user: User) => void;
}

function UserCard({user, onClick}: UserCardProps){
    
    const {name, email, avatarUrl} = user;


    return(
        <div className="user-card" onClick={() => onClick(user)}>
            <img src={avatarUrl} alt={`Avatar of ${name}`} className="user-avatar"  />
            <div className="user-details">
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default UserCard;