import UserCard from "../../components/UserCard/UserCard";
import styles from "./UserList.module.scss";

const UserList = ({ users }) => {
    return (
        <div className={styles.UserList}>
            {users &&
                users.map((user) => {
                    return <UserCard key={user.login.uuid} user={user} />;
                })}
        </div>
    );
};

export default UserList;
