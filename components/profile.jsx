import './profile.css'
const Header = () => {
  return (
    <header>
        <div className="options_container">
            <img className='more_options__mobile' src="../src/assets/options-icon.svg" alt="click to see more profile options/settings" />
            <img className="share" src="../src/assets/share-icon.svg" alt="" />
        </div>

        <div className="profile__img_container">
            <img id = "profile__img" src="../src/assets/placeholder_pfp.png" alt="current user profile image" />
        </div>

        <h1 id='twitter'>adedotxn</h1>

    </header>
  )
}

export default Header