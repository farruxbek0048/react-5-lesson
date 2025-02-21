import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-left">
            <div className="logo">
                <h1 className="logo-1">Prime</h1>
                <h1 className="logo-2">Kit</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non porro explicabo provident! Libero fugit hic dolor, ad enim rerum veritatis!</p>
            <div className="items">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-chrome"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>
        </div>
        <div className="footer-right">
            <div className="table">
                <ul>
                    <th>Quick Links</th>
                    <li>About Us</li>
                    <li>Career</li>
                    <li>Help & Support</li>
                    <li>Privacy Poilcy</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="table">
                <ul>
                    <th>Services</th>
                    <li>UI/UX Design</li>
                    <li>Web Development</li>
                    <li>Marketing</li>
                    <li>Data Analysis</li>
                    <li>Web Design</li>
                    <li>Business Strategy</li>
                </ul>
            </div>
            <div className="table">
                <ul>
                    <th>Newsletter</th>
                    <li>Sign up and receive the latest tips via email </li>
                </ul>
                <div className="btns">
                    <button className='button-1'>
                        <i className="fa-solid fa-envelope"></i>
                        Enter your Mail
                    </button>
                    <button className="button-2">
                        Subscribe Now
                        <i className="fa-brands fa-telegram"></i>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
