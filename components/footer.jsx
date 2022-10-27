import './footer.css'
import zuriLogo from '../src/assets/zuri logo.png'
import zuriLogoDesktop from '../src/assets/zuri logo (desktop).png'
import i4GLogo from '../src/assets/I4G.png'
import i4GLogoDesktop from '../src/assets/I4G (desktop).png'

const Footer = () => {
  return (
    <footer className="footer__wrapper">
        <div className="zuri_logo__container">
            <picture>
                <source srcSet={zuriLogo} />
                <source media="(min-width: 1000px)"
                    srcSet={zuriLogoDesktop} />
                <img src={zuriLogo} alt="Zuri's Logo" />
            </picture>
        </div>

        <p>HNG Internship 9 Frontend Task</p>

        <div className="i4g_logo__container">
            <picture>
                <source srcSet={i4GLogo} />
                <source media="(min-width: 1000px)"
                    srcSet={i4GLogoDesktop} />
                <img src={i4GLogo} alt="Ingressive For Good Logo" />
            </picture>
        </div>
    </footer>
  )
}

export default Footer