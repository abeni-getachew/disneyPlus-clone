import "./Brands.css";
import img from "../../images/disnep.png";
import img1 from "../../images/pixar.png";
import video1 from "../../videos/disney.mp4";
import video2 from "../../videos/pixar.mp4";
import img2 from "../../images/marvel.png";
import video3 from "../../videos/marvel.mp4";
import img3 from "../../images/starwars.png";
import video4 from "../../videos/star-wars.mp4";
import img4 from "../../images/na.png";
import video5 from "../../videos/na.mp4";

export default function Brands() {
    return (
        <section className="brands">
            <div className="group">
                <img src={img}  className="images" layout="fill" objectFit="cover" />
                <video className="video" autoPlay={true} loop={true} playsInline={true}>
                    <source src={video1} type="video/mp4" />
                </video>
            </div>
            <div className="group">
                <img src={img1} className="images" layout="fill" objectFit="cover" />  
                <video autoPlay={true} loop={true} playsInline={true} className="video">
                   <source src={video2} type="video/mp4" />
                </video>              
            </div>
            <div className="group">
                <img src={img2}  className="images"/>
                <video className="video" autoPlay={true} loop={true} playsInline={true}>
                    <source src={video3} type="video/mp4" />
                </video>
            </div>
            <div className="group">
                <img src={img3}  className="images"/>
                <video className="video" autoPlay={true} loop={true} playsInline={true}>
                    <source src={video4} type="video/mp4" />
                </video>
            </div>
            <div className="group">
                <img src={img4}  className="images"/>
                <video className="video" autoPlay={true} loop={true} playsInline={true}>
                    <source src={video5} type="video/mp4" />
                </video>
            </div>             
        </section>
    )
}