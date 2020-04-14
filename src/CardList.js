import React from "react";
import Card from "./Card";


const CardList = ({robots}) => {
    return (
        <div>
            {robots.map(item => <Card key={item.id} id={item.id} name={item.name} email={item.email} />)}
        </div>
    );
}

export default CardList;