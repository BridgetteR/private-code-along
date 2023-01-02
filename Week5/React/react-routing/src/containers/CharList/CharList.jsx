import CharCard from "../../components/CharCard/CharCard";
import styles from "./CharList.module.scss";

const CharList = ({ characters }) => {
    // console.log(characters, "Characters");
    return (
        <div className={styles.CharList}>
            {characters &&
                characters.map((char) => {
                    return <CharCard key={char.id} data={char} />;
                })}
        </div>
    );
};

export default CharList;
