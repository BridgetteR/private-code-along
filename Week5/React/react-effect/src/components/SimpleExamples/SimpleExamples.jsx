import { useState, useEffect } from "react";
import styles from "./SimpleExamples.module.scss";

const SimpleExamples = () => {
    const [mealType, setMealType] = useState();
    const [dietType, setDietType] = useState();

    // the useEffect hook can take up to two arguments, the first one is a function (effect)

    // React will call the effect after performing DOM updates

    // if we only pass one argument to our useEffect, it will run after the initial render and EVERY update of the application

    useEffect(() => {
        console.log("useEffect has been triggered");
    });

    // the second useEffect argument is optional and it's an array of dependancies, also referred to as watch-list

    // the watch-list controls when the useEffect function is executed - it allows us to access the lifecycle of a component

    // when the watch-list is empty, the effect will only be triggered when the component first renders

    useEffect(() => {
        console.log("I have two arguments");
        // could be used for an API call
    }, []); // only when the component renders

    useEffect(() => {
        console.log("I am only watching for mealType changes", mealType);
    }, [mealType]); // only when the mealType value changes

    useEffect(() => {
        console.log(
            "Either mealType of dietType have changed",
            mealType,
            dietType
        );
    }, [mealType, dietType]); // triggers when either mealType or dietTpye changes

    return (
        <div className={styles.Main}>
            <h3>useEffect without a watch list</h3>
            <div>
                <button onClick={() => setMealType("breakfast")}>
                    Breakfast
                </button>
                <button onClick={() => setMealType("lunch")}>Lunch</button>
            </div>
            <div>
                <button onClick={() => setDietType("vegetarian")}>
                    Vegetarian
                </button>
                <button onClick={() => setDietType("vegan")}>Vegan</button>
            </div>
            <p>
                {dietType} {mealType}
            </p>
        </div>
    );
};

export default SimpleExamples;
