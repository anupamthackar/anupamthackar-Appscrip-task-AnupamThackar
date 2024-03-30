'use client'
import style from "../globals.css"
import Image from "next/image"
import {useRouter} from 'next/navigation'

const Navbar = () => {
     const Router = useRouter();
     const navigation = (name) => {
          Router.push(name)
     }
     return (
          <main className="nav_container">
               <div className="nav_black1">
                    <div className="lorem_line1">
                         <img src="/assets/1.png" alt="Description" width={"16"} height={"16"}/>
                         <p>Lorem ipsum dolor</p>
                    </div>
                    <div className="lorem_line1">
                         <img src="/assets/1.png" alt="Description" width={"16"} height={16}/>
                         <p>Lorem ipsum dolor</p>
                    </div>
                    <div className="lorem_line1">
                         {/* <Image src="/assets/1.png" alt="Description" width={"16"} height={"16"} quality={100}/>    */}
                         <img src="/assets/1.png" alt="Description" width={"16"} height={"16"} quality={10000}/>
                         <p>Lorem ipsum dolor</p>
                    </div>
               </div>
               <div className="navbar">
                    <div className="navbar_section1">
                         <div className="logo">
                              <Image src={"/assets/logo.png"} alt="logo" width={35} height={35} quality={100} />
                         </div>
                         <div className="name">LOGO</div>
                         <div onClick={()=>navigation("../SignUp")} className="other_utility">
                              <Image src="/assets/search.png" alt="search" width={24} height={24} />
                              <Image src="/assets/heart.png" alt="heart" width={24} height={24} />
                              <Image src="/assets/bag.png" alt="cart" width={24} height={24} />
                              <Image src="/assets/user.png" alt="user" width={24} height={24} />
                              <span><b>ENG</b></span>
                              <Image src="/assets/down-arrow.png" alt="down arrow" width={24} height={24} />
                         </div>
                    </div>
                         <div className="navbar_section2">
                              <span>SHOP</span>
                              <span>SKILLS</span>
                              <span>STORIES</span>
                              <span>ABOUT</span>
                              <span>CONTACT US</span>
                         </div>
               </div>
               <div className="message_after_nav">
                    <span className="message_after_nav1">DISCOVER OUR PRODUCTS</span>
                    <span className="message_after_nav2">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</span>
               </div>
               <hr className="line" />

          </main>
     )
}

export default Navbar;