import "./Home.css"
import headerImg from "../../assets/restauranfood.jpg"
import SpecialsCard from "./SpecialsCard";
import greekSaladImg from "../../assets/greek salad.jpg"
import bruschettaImg from "../../assets/bruchetta.svg"
import lemonDessertImg from "../../assets/lemon dessert.jpg"
import { useNavigate } from "react-router-dom";


const Main = () => {


    const navigate = useNavigate();

    const specialsData = [
        {"dish": "Greek Salad",
        "price" : "$12",
        "details" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto molestias error ullam similique rem neque ipsa obcaecati inventore explicabo.",
    },

    {"dish": "Bruschetta",
        "price" : "$5",
        "details" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto molestias error ullam similique rem neque ipsa obcaecati inventore explicabo.",
    },


    {"dish": "Lemon Dessert",
        "price" : "$6",
        "details" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto molestias error ullam similique rem neque ipsa obcaecati inventore explicabo.",
    },
      

    ]

    return (
        <main>

        <section className="banner">
            <div className="bannerDiv">
                <div className="bannerTextSection">
                <span className="bannerTitle">Little Lemon</span>
                <span className="bannerSubHeading">Chicago</span>
                <span className="bannerText">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</span>
               
                <button style={{width: '200px', height: "auto", background: '#F4CE14', borderRadius: 16, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', marginTop:"20px", padding:"10px",
                 marginBottom:"20px", color: 'black', fontSize: 16, fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word'
                 }} onClick={()=>{navigate("/Reserve")}}>Reserve A Table
                 </button>
                </div>

                    <img src={headerImg} alt="Food" className='bannerImage'/>

            </div>
        </section>

        <section className="specialsSection">
            <div className="specialsSectionHeader">
            <span className="specialsSectionHeading">This week's specials!</span>
            <button style={{width: '200px', height: "auto", paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: '#F4CE14', borderRadius: 16, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', marginTop:"20px", marginBottom:"20px"}}>
<div style={{color: 'black', fontSize: 16, fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word'}}>Order Online</div>
</button>
</div>

        <div className="specialsSectionContent">
            <SpecialsCard data={specialsData[0]} img={greekSaladImg}/>
            <SpecialsCard data={specialsData[1]} img={bruschettaImg}/>
            <SpecialsCard data={specialsData[2]} img={lemonDessertImg}/>
        </div>


        </section>


        </main>
    );

}

export default Main;