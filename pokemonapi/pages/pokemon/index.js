import { useState, useEffect } from "react";
import styles from "../../styles/Pokemon.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

// const Pokemon = () => {
//   const [name, setName] = useState("");
//   const [pokemon, setPokemon] = useState([]);
//   const api = `https://pokeapi.co/api/v2/pokemon/${name}`;
//   useEffect(() => {
//     loadData();
//   }, [name]);

//   const loadData = async () => {
//     const response = await fetch(api);
//     const data = await response.json();
//     setPokemon(data);
//   };
const Pokemon = ({ pokemon }) => {
  return (
    <div className="">
      {/* <h2>{pokemon.name}</h2>
      <input type="text" value={name} onChange={() => setName(name)} />
      <p>Image of {pokemon.name}</p> */}
      {pokemon.map((poke) => (
        <Link href={`/pokemon/${poke.id}`} key={poke.id}>
          <a className={styles.single}>
            <h3>{poke.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Pokemon;
