import './styles.css'

const SignUp = () => {

  return (
    <>
      <div class="form">
        <form>
          <div class="input-div">
            <label class="label"></label>
            <input type="text" class="input-field" placeholder="Name" value="" />
          </div>
          <div class="input-div">
            <label class="label"></label>
            <input type="email" class="input-field" placeholder="Email Address" value="" />
          </div>
          <div class="input-div">
            <label class="label"></label>
            <input type="password" class="input-field" placeholder="Password" value="" />
          </div>
          <div class="input-div">
            <label class="label"></label>
            <input type="password" class="input-field" placeholder="Confirm Password" value="" />
          </div>
          <button class="Button Button__Danger__18hYt">SIGNUP</button>
        </form>
      </div>
    </>
  )
}
export default SignUp;
