import title from '../assets/info5-title.png'
import img1 from '../assets/info5-img1.png'
import img2 from '../assets/info5-img2.png'
import img3 from '../assets/info5-img3.png'
import img4 from '../assets/info5-img4.png'
import img5 from '../assets/info5-img5.png'
import img6 from '../assets/info5-img6.png'


export const Info5 = () => {
    return(
        <div className="Info5-conteiner">
            <div className='info5-title'><img src={title} alt="" /></div>

                <div className='info5-container-content'>

                    <div className='info5-container-card1'>
                        <div className='info5-card'>
                            <img src={img1} alt="" />
                            <p>All about market caps</p>
                        </div>
                        <div className='info5-card'>
                            <img src={img2} alt="" />
                            <p>Using the platform</p>
                        </div>
                        <div className='info5-card'>
                            <img src={img3} alt="" />
                            <p>digital currencies</p>
                        </div>
                    </div>
                    
                    <div className='info5-container-card2'>
                        <div className='info5-card'>
                            <img src={img4} alt="" />
                            <p>terminologies</p>
                        </div>
                        <div className='info5-card'>
                            <img src={img5} alt="" />
                            <p>trading techniques</p>
                        </div>
                        <div className='info5-card'>
                            <img src={img6} alt="" />
                            <p>emerging tokens</p>
                        </div>
                </div>
            </div>
        </div>
    )
};