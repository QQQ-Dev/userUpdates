import React, { useEffect } from "react"
import 'materialize-css'
import M from 'materialize-css';
import m from './Paralax.module.css'

export const Paralax = () => {
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems, {});
        });
    }, [])

    return (
        <>
            <div className="parallax-container" id={m.container}>
                <div className="parallax"><img src='https://materializecss.com/images/parallax1.jpg'/></div>
            </div>
        </>
    )
}