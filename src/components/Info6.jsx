import title from '../assets/info6-title.png'
import deco1 from '../assets/info6-deco1.png'
import deco2 from '../assets/info6-deco2.png'
import deco3 from '../assets/info6-deco3.png'
import deco4 from '../assets/info6-deco4.png'


export const Info6 = () => {
    return(
        <div className="Info6-conteiner">
            <div className='info6-title'><img src={title} alt="" /></div>
            <div className='info6-container-card'>
                <div className='info6-card'>
                    <h3>BENEFIT 01</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dignissimos beatae nisi nesciunt voluptate, deserunt, aut, incidunt debitis doloribus reiciendis in. Similique sequi aperiam non minima delectus aliquid laudantium libero.</p>
                </div>
                <div className='info6-card'>
                    <h3>BENEFIT 02</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dignissimos beatae nisi nesciunt voluptate, deserunt, aut, incidunt debitis doloribus reiciendis in. Similique sequi aperiam non minima delectus aliquid laudantium libero.</p>
                </div>
                <div className='info6-card'>
                    <h3>BENEFIT 03</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dignissimos beatae nisi nesciunt voluptate, deserunt, aut, incidunt debitis doloribus reiciendis in. Similique sequi aperiam non minima delectus aliquid laudantium libero.</p>
                </div>
            </div>
            <div className='info6-deco'>
                    <img src={deco1} alt="" className='info6-deco1'/>
                    <img src={deco2} alt="" className='info6-deco2'/>
                    <img src={deco3} alt="" className='info6-deco3'/>
                    <img src={deco4} alt="" className='info6-deco4'/>
            </div>
        </div>
    )
};