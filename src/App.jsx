// imports
import { useState } from "react";
// import './App.css'
import norris from "./assets/norris.jpg";
import piastri from "./assets/piastri.jpg";
import sainz from "./assets/sainz.jpg";
import albon from "./assets/albon.jpg";
import leclerc from "./assets/leclerc.jpg";
import russell from "./assets/russell.jpg";
import hamilton from "./assets/hamilton.jpg";
import verstappen from "./assets/verstappen.jpg";
import antonelli from "./assets/antonelli.jpg";
import ocon from "./assets/ocon.jpg";
import hadjar from "./assets/hadjar.jpg";
import bearman from "./assets/bearman.jpg";
import hulk from "./assets/hulk.jpg";
import alonso from "./assets/alonso.jpg";
import bortoleto from "./assets/bortoleto.jpg";
import bottas from "./assets/bottas.jpg";
import colapinto from "./assets/colapinto.jpg";
import gasly from "./assets/gasly.jpg";
import lawson from "./assets/lawson.jpg";
import lindblad from "./assets/lindblad.jpg";
import stroll from "./assets/stroll.jpg";
import perez from "./assets/perez.jpg";
import DriverCard from "./components/DriverCards";
import FilterButton from "./components/FilterButton";

function App() {
  // current useState of activeFilter
  // setFilter function will work based on useState of activeFilter
  const [activeFilter, setFilter] = useState("all");
  // hardcoded driver data
  const [drivers, updateDriverInfo] = useState([
    {
      name: "Lando Norris",
      age: 27,
      number: 1,
      team: "McLaren",
      photo: norris,
      raceWins: 11,
      podiums: 44,
      worldChampion: true,
      favorite: false,
    },
    {
      name: "Oscar Piastri",
      age: 25,
      number: 81,
      team: "McLaren",
      photo: piastri,
      raceWins: 9,
      podiums: 27,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Carlos Sainz Jr.",
      age: 31,
      number: 55,
      team: "Williams",
      photo: sainz,
      raceWins: 4,
      podiums: 29,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Alex Albon",
      age: 30,
      number: 23,
      team: "Williams",
      photo: albon,
      raceWins: 0,
      podiums: 2,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Charles Leclerc",
      age: 28,
      number: 16,
      team: "Ferrari",
      photo: leclerc,
      raceWins: 8,
      podiums: 52,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Lewis Hamilton",
      age: 41,
      number: 44,
      team: "Ferrari",
      photo: hamilton,
      raceWins: 105,
      podiums: 203,
      worldChampion: true,
      favorite: false,
    },
    {
      name: "Max Verstappen",
      age: 28,
      number: 3,
      team: "Red Bull Racing",
      photo: verstappen,
      raceWins: 71,
      podiums: 127,
      worldChampion: true,
      favorite: false,
    },
    {
      name: "Isack Hadjar",
      age: 21,
      number: 6,
      team: "Red Bull Racing",
      photo: hadjar,
      raceWins: 0,
      podiums: 1,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "George Russell",
      age: 28,
      number: 63,
      team: "Mercedes",
      photo: russell,
      raceWins: 6,
      podiums: 26,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Kimi Antonelli",
      age: 19,
      number: 12,
      team: "Mercedes",
      photo: antonelli,
      raceWins: 2,
      podiums: 6,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Oliver Bearman",
      age: 20,
      number: 87,
      team: "Haas",
      photo: bearman,
      raceWins: 0,
      podiums: 0,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Esteban Ocon",
      age: 29,
      number: 31,
      team: "Haas",
      photo: ocon,
      raceWins: 1,
      podiums: 4,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Pierre Gasly",
      age: 30,
      number: 10,
      team: "Alpine",
      photo: gasly,
      raceWins: 1,
      podiums: 5,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Franco Colapinto",
      age: 22,
      number: 43,
      team: "Alpine",
      photo: colapinto,
      raceWins: 0,
      podiums: 0,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Liam Lawson",
      age: 24,
      number: 30,
      team: "Visa Cash App Racing Bulls",
      photo: lawson,
      raceWins: 0,
      podiums: 0,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Arvid Linblad",
      age: 18,
      number: 41,
      team: "Visa Cash App Racing Bulls",
      photo: lindblad,
      raceWins: 0,
      podiums: 0,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Nico Hulkenberg",
      age: 38,
      number: 27,
      team: "Audi",
      photo: hulk,
      raceWins: 0,
      podiums: 1,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Gabriel Bortoleto",
      age: 21,
      number: 5,
      team: "Audi",
      photo: bortoleto,
      raceWins: 0,
      podiums: 0,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Fernando Alonso",
      age: 44,
      number: 14,
      team: "Aston Martin",
      photo: alonso,
      raceWins: 32,
      podiums: 106,
      worldChampion: true,
      favorite: false,
    },
    {
      name: "Lance Stroll",
      age: 27,
      number: 18,
      team: "Aston Martin",
      photo: stroll,
      raceWins: 0,
      podiums: 3,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Sergio Perez",
      age: 36,
      number: 11,
      team: "Cadillac",
      photo: perez,
      raceWins: 6,
      podiums: 39,
      worldChampion: false,
      favorite: false,
    },
    {
      name: "Valterri Bottas",
      age: 36,
      number: 77,
      team: "Cadillac",
      photo: bottas,
      raceWins: 10,
      podiums: 67,
      worldChampion: false,
      favorite: false,
    },
  ]);

  // function to update driver favorite status
  function setFavorite(name) {
    const updateFav = drivers.map((driver) => {
      if (driver.name === name) {
        return { ...driver, favorite: !driver.favorite };
      } else {
        return { ...driver };
      }
    });
    updateDriverInfo(updateFav);
  }

  // stores filtered hardcoded data
  let filteredDrivers;

  // filters data based on useState of activeFilter and stores
  if (activeFilter === "all") {
    filteredDrivers = drivers;
  } else if (activeFilter === "podium") {
    filteredDrivers = drivers.filter((driver) => driver.podiums > 0);
  } else if (activeFilter === "race winner") {
    filteredDrivers = drivers.filter((driver) => driver.raceWins > 0);
  } else if (activeFilter === "world champion") {
    filteredDrivers = drivers.filter((driver) => driver.worldChampion);
  } else if (activeFilter === "favorites") {
    filteredDrivers = drivers.filter((driver) => driver.favorite);
  } else if (activeFilter === "youngToOld") {
    filteredDrivers = [...drivers].sort((a, b) => a.age - b.age);
  } else if (activeFilter === "oldToYoung") {
    filteredDrivers = [...drivers].sort((a, b) => b.age - a.age);
  }

  return (
    <div className="mainContainer">
      <h1>F1 Driver Cards</h1>
      <h3>Press a button to filter your driver cards!</h3>
      {/* filter bar with filter buttons */}
      <div className="filterbar">
        <FilterButton label="All" setFilter={setFilter} filterName="all" />
        <FilterButton
          label="Favorites"
          setFilter={setFilter}
          filterName="favorites"
        />
        <FilterButton
          label="Finished on Podium"
          setFilter={setFilter}
          filterName="podium"
        />
        <FilterButton
          label="Race Winners"
          setFilter={setFilter}
          filterName="race winner"
        />
        <FilterButton
          label="World Champions"
          setFilter={setFilter}
          filterName="world champion"
        />

        <FilterButton
          label="Youngest to Oldest"
          setFilter={setFilter}
          filterName="youngToOld"
        />

        <FilterButton
          label="Oldest to Youngest"
          setFilter={setFilter}
          filterName="oldToYoung"
        />
        {/* displays total drivers depending on filter */}
        <h3>Total Drivers: {filteredDrivers.length}</h3>
      </div>
      <div className="driverList">
        {/* displays driver cards based on filter button clicked */}
        {filteredDrivers.map((driver, index) => (
          <DriverCard
            key={index}
            name={driver.name}
            age={driver.age}
            number={driver.number}
            team={driver.team}
            podiums={driver.podiums}
            wins={driver.raceWins}
            championships={driver.worldChampion}
            favoriteStatus={driver.favorite}
            setFav={setFavorite}
            photo={driver.photo}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
