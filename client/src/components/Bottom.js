import React from "react"
import 'materialize-css'
import m from './Bottom.module.css'

export const Footer = () => {
    return (
        <>
            <footer className="page-footer white" id={m.backa}>
                <div className="container" id={m.backb}>
                    <div className="row">
                        <div className="col l6 s12 ">
                            <h5 className="black-text">Footer Content</h5>
                            <p className="black-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="black-text">Links</h5>
                            <ul>
                                <li><a className="black-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a className="black-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright white" id={m.backc}>
                    <div className="container black-text">
                        © 2014 Copyright Text
                        <a className="balck text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        </>
    )
}