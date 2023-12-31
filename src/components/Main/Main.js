import "./Main.css"
import headerImg from "../../assets/restauranfood.jpg"
const Main = () => {

    return (
        <main>

        <section className="banner">
            <div className="bannerDiv">
                <div className="bannerTextSection">
                <span className="bannerTitle">Little Lemon</span>
                <span className="bannerSubHeading">Chicago</span>
                <span className="bannerText">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</span>
                <button style={{width: '200px', height: "auto", paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: '#F4CE14', borderRadius: 16, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', marginTop:"20px", marginBottom:"20px"}}>
<div style={{color: 'black', fontSize: 16, fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word'}}>Reserve A Table</div>
</button>
                </div>

                    <img src={headerImg} alt="Food" className='bannerImage'/>

            </div>
        </section>


        </main>
    );

}

export default Main;