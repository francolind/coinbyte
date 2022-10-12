import title from '../assets/info7-title.png'
import deco1 from '../assets/info7-deco1.png'
import deco2 from '../assets/info7-deco2.png'
import deco3 from '../assets/info7-deco3.png'
import deco4 from '../assets/info7-deco4.png'


export const Info7 = () => {
    return(
        <div className="Info7-conteiner">
            <div className='info7-title'><img src={title} alt="" /></div>
            <div className='info7-container-card'>
                <div className='info7-card'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt nulla rem dignissimos adipisci voluptate quibusdam saepe, consectetur commodi debitis maiores magnam ipsum laboriosam dolore harum quas eaque quae minus.</p>
                    <h3>- Marie wu, CEO of Bytewite</h3>
                </div>
                <div className='info7-card'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestiae quisquam reprehenderit tempore pariatur reiciendis culpa ducimus temporibus fuga, maxime, id nisi est possimus itaque nesciunt tenetur nam aperiam corporis!</p>
                    <h3>- Marie wu, CEO of Bytewite</h3>
                </div>
                <div className='info7-card'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam nisi, molestiae obcaecati fuga ab eveniet illo dolorem vero, expedita animi minus ipsa nemo quasi iure fugiat quod, modi voluptates!</p>
                    <h3>- Marie wu, CEO of Bytewite</h3>
                </div>    
            </div> 
            <div className='info6-deco'>
                    <img src={deco1} alt="" className='info7-deco1'/>
                    <img src={deco2} alt="" className='info7-deco2'/>
                    <img src={deco3} alt="" className='info7-deco3'/>
                    <img src={deco4} alt="" className='info7-deco4'/>
            </div>
        </div>
    )
};