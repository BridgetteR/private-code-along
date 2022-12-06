import Card from "../../components/Card/Card";
import styles from "./CardList.module.scss";

const CardList = ({ students }) => {
    console.log(students);
    return (
        <div className={styles.CardList}>
            {students.map((student, index) => {
                return (
                    <Card
                        key={index}
                        studentName={student.name}
                        city={student.city}
                    />
                );
            })}
        </div>
    );
};

export default CardList;
