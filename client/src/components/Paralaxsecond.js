import React, { useEffect } from "react"
import 'materialize-css'
import M from 'materialize-css';
import m from './Paralaxsecond.module.css'

export const Paralaxsecond = () => {
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems, {});
        });
    }, [])

    return (
        <>
            <div className="parallax-container" id={m.container}>
                <div className="parallax"><img src='https://materializecss.com/images/parallax2.jpg'/></div>
            </div>
        </>
    )
}