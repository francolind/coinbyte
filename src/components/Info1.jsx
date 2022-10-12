import title from '../assets/info1-title.png'; 
import img1 from '../assets/info1-img1.png'; 
import img2 from '../assets/info1-img2.png'; 
import arrow from '../assets/info1-decoration.png'; 

export const Info1 = () => {
    return(
        <section className="Info1-conteiner">
            <div className='info1-content1'>
                <img src={img1} alt="" className='img1'/>
            </div>
            <div className='info1-content2'>
                <h3>what we stand for</h3>
                <img src={title} alt="" className='title'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.    Itaque rerum eos earum quia fugiat ullam voluptatem culpa rem omnis. Commodi aliquid sequi, quae quaerat magni nisi rem aperiam quibusdam harum.</p>
            </div>
            <div className='info1-content3'>
                <img src={img2} alt="" className='img2'/>
            </div>
            <div className='arrow'>
                <img src={arrow} alt="" />
            </div>
    </section>
)};