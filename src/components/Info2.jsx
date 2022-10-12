import title from '../assets/info2-title.png';
import phone from '../assets/info2-imgcel.png';



export const Info2 = () => {
    return (
      <section className="Info2-conteiner">
        <img src={title} alt="" />
      <div className='info2-container-content'>
            
              <div className='info2-container1-card'>
                    <div className='card1'>
                          <h2>01 - Versatile</h2>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo obcaecati modi recusandae aut commodi labore incidunt, delectus soluta dolorum sunt officiis adipisci ducimus voluptate fugiat maxime odio facere porro facilis!</p>
                    </div>
                    <div className='card2'>
                          <h2>02 - Easy to use</h2>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo obcaecati modi recusandae aut commodi labore incidunt, delectus soluta dolorum sunt officiis adipisci ducimus voluptate fugiat maxime odio facere porro facilis!</p>
                    </div>
              </div>
              <div className='info2-container-phone'>
                  <img src={phone} alt="" />
            </div>
              <div className='info2-container2-card' >
                    <div className='card3'>
                                <h2>03 - Trasparent</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo obcaecati modi recusandae aut commodi labore incidunt, delectus soluta dolorum sunt officiis adipisci ducimus voluptate fugiat maxime odio facere porro facilis!</p>
                          </div>
                          <div className='card4'>
                                <h2>04 - Real time</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo obcaecati modi recusandae aut commodi labore incidunt, delectus soluta dolorum sunt officiis adipisci ducimus voluptate fugiat maxime odio facere porro facilis!</p>
                          </div>
              </div>
      </div>
      </section>
    );
};