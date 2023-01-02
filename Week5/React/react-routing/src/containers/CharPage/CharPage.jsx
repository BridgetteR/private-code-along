import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharPage = ({ characters }) => {
    const { id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        const charData = characters.find((char) => char.id === parseInt(id));
        console.log(charData);
        setCharacter(charData);
    }, [id, characters]);

    return character ? (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt="portrait" />
            <p>Status: {character.status}</p>
            <p>Location: {character.location?.name ?? "No Location"}</p>
            <p>Species: {character.species}</p>
        </div>
    ) : (
        <div>Character does not exist</div>
    );
};

export default CharPage;
