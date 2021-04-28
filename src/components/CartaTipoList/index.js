import React from 'react';

const tipos = [
    {
        "_id": 1,
        "slug": "animal",
        "name": "Animal",
        "icon": "beast.png"
    },
    {
        "_id": 2,
        "slug": "aqua",
        "name": "Aqua",
        "icon": "aqua.png"
    },
    {
        "_id": 3,
        "slug": "beast",
        "name": "Beast",
        "icon": "beast.png"
    },
    {
        "_id": 4,
        "slug": "beast-warrior",
        "name": "Beast Warrior",
        "icon": "beast-warrior.png"
    },
    {
        "_id": 5,
        "slug": "dark-magician",
        "name": "Dark Magician",
        "icon": "dark-magician.png"
    },
    {
        "_id": 6,
        "slug": "dark-spellcaster",
        "name": "Dark Spellcaster",
        "icon": "spellcaster.png"
    },
    {
        "_id": 7,
        "slug": "dinasour",
        "name": "Dinasour",
        "icon": "dinasour.png"
    },
    {
        "_id": 8,
        "slug": "elf",
        "name": "Elf",
        "icon": "fairy.png"
    },
    {
        "_id": 9,
        "slug": "dragon",
        "name": "Dragon",
        "icon": "dragon.png"
    }
];

const tiposList = tipos.map((tipo) => 
    <li key={tipo._id}>{tipo.name}</li>
);

function CartaTipoList () {
    return (
        <ul>
            {tiposList}
        </ul>
    );
}

export default CartaTipoList;