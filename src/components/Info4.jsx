import img from '../assets/info4-img.png';
import title from '../assets/info4-title.png';
import decoration1 from '../assets/info4-decoration.png';
import decoration2 from '../assets/info4-decoration.png';
import decoration3 from '../assets/info4-decoration.png';



export const Info4 = () => {
    return(

        <div className="Info4-conteiner ">
            <div className='info4-container-img'>
                <img src={img} alt="" />
            </div>
            <div className='info4-container-title'>
                <img src={title} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores velit iusto impedit vitae nesciunt, excepturi quos, nemo adipisci veniam, unde eveniet minima est neque laborum error ex. Omnis, reiciendis!</p>
                <button className='secundary-button'>LEARN MORE</button>
            </div>     
            <div>
                <img src={decoration1} alt="" className='info4-deco1'/>
                <img src={decoration2} alt="" className='info4-deco2'/>
                <img src={decoration3} alt="" className='info4-deco3'/>
            </div>   
    </div>
       

       
    )
};