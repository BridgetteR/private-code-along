// I will create all the functions that I need to create, read, update and delete data from firestore

import {
    addDoc,
    collection,
    deleteDoc,
    getDocs,
    doc,
    getDoc,
    updateDoc,
    increment,
} from "firebase/firestore";
import { db } from "../firestore";

// CRUD - Read
export const getAllMovies = async () => {
    const collectionRef = collection(db, "movies");
    const querySnapshot = await getDocs(collectionRef);

    // I want this function to return an array of movies so I can set state to it, then map to render a movie card

    const data = querySnapshot.docs.map((doc) => {
        const id = doc.id;
        const restOfData = doc.data();

        return { id, ...restOfData };
    });

    return data;
};

// CRUD - Create
export const addMovie = async (data) => {
    const { title, yearReleased, amountWatched } = data;
    const movie = { title, yearReleased, amountWatched };
    const collectionRef = collection(db, "movies");

    const newDoc = await addDoc(collectionRef, movie);

    console.log(newDoc, "New doc added");
    return newDoc;
};

// CRUD - Delete
export const deleteMovie = async (id) => {
    const docRef = doc(db, "movies", id);
    await deleteDoc(docRef);
};

// CRUD - Read
export const getMovieById = async (id) => {
    const docRef = doc(db, "movies", id);
    const docSnap = await getDoc(docRef);

    // console.log(docSnap);

    if (!docSnap.exists()) {
        throw new Error("Doc not found");
    }

    return { id: docSnap.id, ...docSnap.data() };
};

// CRUD - Update

// return true or false if it was successful or not
export const updateMovieAmount = async (id) => {
    const docRef = doc(db, "movies", id);

    await updateDoc(docRef, {
        amountWatched: increment(1),
    });
};

export const updateMovie = async (id, data) => {
    const docRef = doc(db, "movies", id);
    await updateDoc(docRef, data);
};
