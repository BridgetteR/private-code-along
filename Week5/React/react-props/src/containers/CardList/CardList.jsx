import Card from "../../components/Card/Card";
import styles from "./CardList.module.scss";

const CardList = ({ titleFromApp }) => {
    return (
        <div className={styles.CardList}>
            <Card
                title="I am the first card"
                desc="I am some description"
                number={2345}
            />
            <Card title={123} />
            <Card
                title="I am another title"
                desc="Dynamic description thanks to props!"
                number={-123.4}
            />
            <Card title={titleFromApp} />
            <Card />
        </div>
    );
};

export default CardList;
