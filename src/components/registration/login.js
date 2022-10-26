import './styles.css'

const Login = () => {

  return (
    <>
      <div class="form">
        <form>
          <div class="input-div">
            <label class="label"></label>
            <input type="email" class="input-field" placeholder="E-mail Address" value="" />
          </div>
          <div class="input-div">
            <label class="label"></label>
            <input type="password" class="input-field" placeholder="Password" value="" />
          </div>
          <button class="Button Button__Danger__18hYt">SIGNIN</button>
        </form>
      </div>
    </>
  )
}
export default Login;
