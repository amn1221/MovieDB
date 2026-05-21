import React, { useEffect } from "react";
import { useState } from "react";  
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from './Header.module.css'

function Header() {
  const [isSearchOn, setIsSearchOpen]=useState(false);
  const [isProfileOn, setIsProfileOpen]=useState(false);

//for blur
const [isScrolled, setScrolled]=useState(false)
useEffect(()=>{
const handleScroll=()=>{
  if(window.scrollY>50){
    setScrolled(true)
  }else{
    setScrolled(false)
  }
}
window.addEventListener('scroll',handleScroll);
return ()=>window.removeEventListener('scroll',handleScroll);
},[])



  return (
   <header
  className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
>
      <div className={styles.container}>
        {/* logo */}
        <img className={styles.logo} src={logo} alt="" />
        {/* navigation links */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} href="">Home</Link>
          <Link className={styles.navLink} href="">Tv Shows</Link>
          <Link className={styles.navLink} href="">Movies</Link>
          <Link className={styles.navLink} href="">New & Popular</Link>
          <Link className={styles.navLink} href="">My List</Link>
          <Link className={styles.navLink} href="">Browse by Languages</Link>
        </nav>

        {/* right side section */}
        <div className={styles.rightsection}>
          {/* search */}
          <div className={styles.searchContainer}>
            <button 
            onClick={()=> setIsSearchOpen(!isSearchOn)

            } 
            className={styles.searchButton}>
              <Search size={20} />
            </button>
            {isSearchOn && (
              <input
              type="text"
              placeholder="movie title"
              className={styles.searchInput}
              />
            )}
          </div>

          {/* notification */}

          <button className={styles.iconButton}>
            <Bell size={20} />
            <span className={styles.notificationBadge}>4</span>
          </button>
          {/* profile section */}

          <div className={styles.profileContainer}>
            <button  onClick={()=> setIsProfileOpen(!isProfileOn)
            }
            className={styles.profileButton}>
              {/* user icon */}
              <div className={styles.profileAvatar}>
                <User size={20}  />
              </div>

              <ChevronDown size={20} />

              {/* dropdown icon */}
            </button>
            {
               isProfileOn && (
                <div className={styles.profileMenu}>
                  <Link className={styles.profileMenuItem}>Account</Link>
                  <Link className={styles.profileMenuItem}>help center</Link>
                   <hr className={styles.profileMenuDivider}/>
                  <Link className={styles.profileMenuItem}>sign Out</Link>
                 
                </div>
              )
            
            }
             
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
