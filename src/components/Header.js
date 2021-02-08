import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://scontent.fgig4-1.fna.fbcdn.net/v/t1.0-9/66407895_2267556323359094_6270210145406418944_o.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_eui2=AeFCkJbdNV07HamQF8raxY8OcMWXaTaEGPxwxZdpNoQY_OjgOVVpBiZLEuiYi9PKzCL4YQOFn576547h5uLi90qD&_nc_ohc=3NJoCMDmuc8AX_cmM0I&_nc_ht=scontent.fgig4-1.fna&oh=0624674d501a8588527849a4d5bcb404&oe=6045485A" alt="Usuário"></img>
                </a>
            </div>
     </header>
    )
}
