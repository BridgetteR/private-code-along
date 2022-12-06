import Card from "../../components/Card/Card";
import styles from "./CardList.module.scss";

const CardList = ({ planetData }) => {
    // console.log(planetData);
    return (
        <div className={styles.CardList}>
            {planetData.map((planet, index) => {
                return (
                    <Card
                        key={index}
                        image={planet.image}
                        name={planet.planetName}
                        diameter={planet.diameterInKm}
                        distance={planet.distanceFromSun}
                        moons={planet.numberOfMoons}
                        length={planet.lengthOfYear}
                    />
                );
            })}
        </div>
    );
};

export default CardList;
