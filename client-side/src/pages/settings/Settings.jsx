import "./settings.css";
import NavBar from "../../components/navbar/Navbar";

export default function Settings() {
  return (
    <div>
      <NavBar></NavBar>
      <div id='settings-layout'>
        <form action=''>
          <div id='setting-name-update'>
            <h1>My Account</h1>
            <button> Delete Account </button>
          </div>
          
          <div id='setting-profile-img'>
            <img
              src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
              alt=''
            />
            <label htmlFor="image-file-profile"><i class="fa-solid fa-pen pen-icon-profile"></i>
            <i class="fa-solid fa-user"></i></label>
            <input type="file" accept='image/*' id="image-file-profile" style={{display:'none'}} />

          </div>

          <div id='account-details'>
            <label
              htmlFor='username-settings'
              className='labels-settings'>
              UserName{" "}
            </label>

            <input
              type='text'
              id='username-settings'
              className="input-settings"
              placeholder='Enter your Username'
            />
            <label
              htmlFor='email-settings'
              className='labels-settings'>
              Email
            </label>

            <input
              type='email'
              id='email-settings'
              placeholder='Enter your email'
              className="input-settings"

            /><label
            htmlFor='password-settings'
            className='labels-settings'>
             Previous Password
          </label>

          <input
            type='password'
            id='password-settings'
            placeholder='Enter your old  password'
            className="input-settings"

          />
            <label
              htmlFor='password-settings'
              className='labels-settings'>
              New Password
            </label>

            <input
              type='password'
              id='password-settings'
              placeholder='Enter your  new password'
              className="input-settings"

            />

            <button type='submit' id="update-settings-button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
