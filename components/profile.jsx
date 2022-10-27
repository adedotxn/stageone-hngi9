import './profile.css'
const Header = () => {
  return (
    <header>
        <div className="options_container">
            <img className='more_options__mobile' src="../public/assets/options-icon.svg" alt="click to see more profile options/settings" />
            <img className="share" src="../public/assets/share-icon.svg" alt="" />
        </div>

        <div className="profile__img_container">
            <img id = "profile__img" src="../public/assets/placeholder_pfp.png" alt="current user profile image" />

            <img className='camera__icon' src="../public/assets/camera.svg" alt="" />
        </div>

        <h1 id='twitter'>adedotxn</h1>
        <h1 id="slack">adedotxn</h1>

    </header>
  )
}

export default Header