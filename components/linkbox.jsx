import './linkbox.css'

const Linkbox = () => {
  return (
    <>
        <div className="links">
            <a id="twitter__link" href="https://twitter.com/adedotxn" target="_blank">Twitter Link</a>
            <a id="btn__zuri" href="https://training.zuri.team/" target="_blank">Zuri Team</a>
            <a id="books" href="http://books.zuri.team/" target="_blank">Zuri Books</a>
            <a id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=adedotxn" target="_blank">Python Books</a>
            <a id = "pitch" href="https://background.zuri.team/" target="_blank">Background Check for Coders</a>
            <a id="book__design" href="https://books.zuri.team/design-rules" target="_blank">Design Books</a>
        </div>

        <div className="icon__links">
            <a href="">  <img src="../public/assets/slack.svg" alt="slack link" />  </a>
            <a href=""> <img src="../public/assets/github.svg" alt="github" /> </a>
        </div>
    </>
  )
}

export default Linkbox