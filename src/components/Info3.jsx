import img from '../assets/info3-img.png';
import title from '../assets/info3-title.png';
import decoration1 from '../assets/info3-decoration1.png';
import decoration2 from '../assets/info3-decoration2.png';
import decoration3 from '../assets/info3-decoration3.png';
import decoration4 from '../assets/info3-decoration4.png';


export const Info3 = () => {
    return(
        <section className="Info3-conteiner">
            <div className='info3-conteiner-left'>
                <h3>decentralized - 01</h3>
                <img src={title} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum aperiam commodi, laboriosam impedit minima at esse temporibus mollitia maxime. Maxime beatae sequi nulla hic delectus neque in eveniet rem veritatis?</p>
                <button className='tertiary-button'>GET STARTED</button>
            </div>
            <div className='info3-container-img'>
                <img src={img} alt="" />
            </div>
            <div className='info3-decoration'>
                <img src={decoration1} alt="" className='deco1'/>
                <img src={decoration2} alt="" className='deco2'/>
                <img src={decoration3} alt="" className='deco3'/>
                <img src={decoration4} alt="" className='deco4'/>
            </div>
    </section>
    )
};