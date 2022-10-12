
import line from '../assets/footer-line.png'

export const Footer = () => {
    return(
        <div className="footer-conteiner">
            <img src={line} alt="" />
            <div className="footer-conteiner-card">   
                <div className="footer-card">
                    <h3>coinmyte</h3>
                    <p>About Us</p>
                    <p>What We Do</p>
                    <p>Our Platform</p>
                    <p>Trading Crypto</p>
                    <p>Other Products</p>
                </div>
                <div className="footer-card">
                    <h3>crypto</h3>
                    <p>Leam from Experts</p>
                    <p>Trading Basics</p>
                    <p>The Market</p>
                    <p>FAQs</p>
                </div>
                <div className="footer-card">
                    <h3>our team</h3>
                    <p>The Team</p>
                    <p>Our Sponsors</p>
                    <p>Careers</p>
                    <p>Trading Experts</p>
                    <p>Affiliate program</p>
                </div>
                <div className="footer-card">
                    <h3>legal</h3>
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                    <p>Copyright info</p>
                    <p>Terms and Conditions</p>
                </div>
            </div>
            <div className="copy">
                <h3>copyrigtht 2022 coinbyte inc. all rights reserved</h3>
            </div>
        </div>
    )
};