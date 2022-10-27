import './profile.css'
import shareIcon from '../src/assets/share-icon.svg'
import optionsIcon from '../src/assets/options-icon.svg'
import cameraIcon from '../src/assets/camera.svg'
import profileImgg from '../src/assets/pfp.jpg'


const Header = () => {
  return (
    <header>
        <div className="options_container">
            <img className='more_options__mobile' src={optionsIcon} alt="more profile settings" />
            <img className="share" src={shareIcon} alt="share link" />
        </div>

        <div className="profile__img_container">
            <img id = "profile__img" src={profileImgg} alt="profile image" />

            <img className='camera__icon' src={cameraIcon} alt="change profile image icon" />
        </div>

        <h1 id='twitter'>adedotxn</h1>
        <h1 id="slack">adedotxn</h1>

    </header>
  )
}

export default Header