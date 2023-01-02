import styles from "./UserCard.module.scss";

const UserCard = ({ user }) => {
    return (
        <div className={styles.UserCard}>
            <img src={user.picture.medium} />
            <h3>{user.name.first}</h3>
            <p>{user.gender}</p>
        </div>
    );
};

export default UserCard;
