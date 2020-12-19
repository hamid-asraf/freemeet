import React, {useState, useEffect} from 'react';
import TinderCard from "react-tinder-card";
import "./Cards.css";
import axios from './service';

function Cards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchdata () {
            const req = await axios.get('/freemeet/cards');
            setPeople(req.data)
        };
        fetchdata();
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("removing"+nameToDelete );
    }

    const outOfFrame = (name) => {
        console.log(name + "leftscreen!!" );
    }


    return (
        <div className="cards">
            <div className="cards__cardContainer">
            {people.map((person, index) => (
               <TinderCard 
               className="swipe"
               key={index}
               preventSwipe={["up", "down"]}
               onSwipe={(dir) => swiped(dir, person.name)}
               onCardLeftScreen= {() => outOfFrame(person.name)}>
                
                <div style={{backgroundImage: `url(${person.imgUrl})`}}
                className="card">
                    <h3>{person.name}</h3>
                </div>

               </TinderCard>           
           ))}
            </div>           
        </div>
    )
}

export default Cards
