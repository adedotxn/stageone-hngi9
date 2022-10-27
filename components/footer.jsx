import './footer.css'
const Footer = () => {
  return (
    <footer className="footer__wrapper">
        <div className="zuri_logo__container">
            <picture>
                <source srcSet='../src/assets/zuri logo.png' />
                <source media="(min-width: 1000px)"
                    srcSet='../src/assets/zuri logo (desktop).png' />
                <img src="../src/assets/zuri logo.png" alt="Zuri's Logo" />
            </picture>
        </div>

        <p>HNG Internship 9 Frontend Task</p>

        <div className="i4g_logo__container">
            <picture>
                <source srcSet='../src/assets/I4G.png' />
                <source media="(min-width: 1000px)"
                    srcSet='../src/assets/I4G.png' />
                <img src="../src/assets/I4G (desktop).png" alt="Ingressive For Good Logo" />
            </picture>
        </div>
    </footer>
  )
}

export default Footer