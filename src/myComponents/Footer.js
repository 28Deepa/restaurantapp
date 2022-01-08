import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        background: "grey",
        padding: "20px",
    }
    return (
        <>
         <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center" style={{textAlign: "center"}}>
                Copyright &copy; RestaurantApp.com 
            </p>
        </footer>
        </>
    );
}
