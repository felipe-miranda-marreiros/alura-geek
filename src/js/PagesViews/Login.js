const Login = () => {
  return `
  <form action="#" class="form__login">
    <div class="container">
      <h3 class="form__title">Iniciar Sessão</h3>
      <input
        type="email"
        name="e-mail"
        id="mail"
        placeholder="Escreva seu email"
        class="form__email"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Escreva sua senha"
        class="form__password"
      />
      <button type="submit" class="form__btn btn">Entrar</button>
    </div>
  </form>`;
};

export default Login;
