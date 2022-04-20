/* eslint-disable jsx-a11y/label-has-associated-control */
const Login = () => {
  const onLoginFormSubmitHandler = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log(username);
    console.log(password);
  };
  return (
    <section className="login">
      <form onSubmit={onLoginFormSubmitHandler}>
        <fieldset>
          <legend>Login</legend>
          <p className="field">
            <label htmlFor="username">Username</label>
            <span className="input">
              <input type="text" name="username" id="username" placeholder="Username" />
              <span className="actions" />
              <i className="fas fa-user" />
            </span>
          </p>
          <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input">
              <input type="password" name="password" id="password" placeholder="Password" />
              <span className="actions" />
              <i className="fas fa-key" />
            </span>
          </p>
          <input className="button submit" type="submit" value="Login" />
        </fieldset>
      </form>
    </section>
  );
};

export default Login;
