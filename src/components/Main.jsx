import crypto from '../assets/main-cripto1.png'
import crypto2 from '../assets/main-cripto2.png'
import cryptoTitle from '../assets/main-title.png'
import start1 from '../assets/start1.png'
import diamond1 from '../assets/diamond1.png'
import diamond2 from '../assets/diamond2.png'



export const Main = () => {
    return(
        <main className="main-conteiner">
            <div className="main-title">
                    <p>we made it easy</p>
                    <img src={cryptoTitle} alt="" />
                    <div className='main-button'>
                        <button className='primaty-button'>GET STARTED</button>
                        <button className='secundary-button'>LEARN MORE</button>
                    </div>
            </div>
                <div className='main-img'>
                     <img src={crypto} alt="" />
                </div>
                <div className='main-paragraph'>
                    <img src={crypto2} alt="" />
                    <h3>decentralized - 01</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugiat aliquid voluptates architecto accusantium eligendi porro repellat maiores officia, quas enim reprehenderit et soluta! Temporibus tempore aperiam nostrum voluptates commodi.
                    </p>
                </div>
                <div className='main-decoration'>
                    <img src={start1} alt=""  className='decoration1'/>
                    <img src={diamond1} alt="" className='decoration2'/>
                    <img src={diamond2} alt="" className='decoration3'/>
                </div>
        </main>
    )
};