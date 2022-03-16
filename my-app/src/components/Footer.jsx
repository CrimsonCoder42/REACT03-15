import React from "react";

const date = new Date();
const year = date.getFullYear();

function appFooter(){
    return(
        <footer>
            <p>Copyright Devin Anderson {year}</p>

            </footer>

    )
}

export default appFooter;