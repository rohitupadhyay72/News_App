import React, {  useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    let [search, setSearch] = useState("")

    function postSearch(e) {
        e.preventDefault()
        props.getSearch(search)
    }
    function clearSearch() {
        props.getSearch("")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg background sticky-top">
                <div className="container-fluid">
                    <img src="/image/logo2.png " height={80} alt="" />
                    <Link className="navbar-brand text-light fw-bold" onClick={(e) => clearSearch(e)} to="/">News Radar</Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi-list fs-1 text-light" ></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link text-light " onClick={(e) => clearSearch(e)} aria-current="page" to="/All">All</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" onClick={(e) => clearSearch(e)} to="/World">World</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" onClick={(e) => clearSearch(e)} to="/Politics">Politics</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" onClick={(e) => clearSearch(e)} to="/Crime">Crime</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" onClick={(e) => clearSearch(e)} to="/Education">Education</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" onClick={(e) => clearSearch(e)} to="/Science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" onClick={(e) => clearSearch(e)} to="/Technology">Technology</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" onClick={(e) => clearSearch(e)} to="/Sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" onClick={(e) => clearSearch(e)} to="/Entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" onClick={(e) => clearSearch(e)} to="/Economics">Economics</Link></li>


                            <li className="nav-item dropdown"><a className="nav-link text-light dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false" >Others</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" onClick={(e) => clearSearch(e)} to="/India">India</Link></li>
                                    <li><Link className="dropdown-item" onClick={(e) => clearSearch(e)} to="/Cricket">Cricket</Link></li>
                                    <li><Link className="dropdown-item" onClick={(e) => clearSearch(e)} to="/Chess">Chess</Link></li>
                                    <li><Link className="dropdown-item" onClick={(e) => clearSearch(e)} to="/Jokes">Jokes</Link></li>
                                    <li><Link className="dropdown-item" onClick={(e) => clearSearch(e)} to="/Mahakumbh">Mahakumbh</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link text-light dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false" >Language</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" onClick={() => props.getLanguage("hi")} to="#">Hindi</Link></li>
                                    <li><Link className="dropdown-item" onClick={() => props.getLanguage("en")} to="#">English</Link></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search" onSubmit={(e) => { postSearch(e) }}>
                            <input className="form-control me-2" type="search" name='seacrch' onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light " type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

