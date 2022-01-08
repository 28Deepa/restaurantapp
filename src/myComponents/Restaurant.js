import React, { useState } from 'react'
import "./style.css";
import Menu from './menuApi.js';
import { MenuCard } from './MenuCard';
import { Navbar } from "./Navbar";
import { Footer } from './Footer';

const uniqueList = [
    ... new Set(Menu.map((curElem) => {
        return curElem.category;
    })
), "All",
];

console.log(uniqueList);    

export const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setmenuList] = useState(uniqueList);
    const filterItem = (category) => {

        if(category === "All") {
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return (curElem.category === category)
        })
        setMenuData(updatedList);
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData} />
            <br></br>
            <Footer/>
        </>
    )
}
