export default function Login() {
  return (
    <>
      <h3>Sign In</h3>
      <form>
        Name <input type='text' id='name' autocomplete='off' />
        Password <input type='password' id='pw' />
        <button>Sign in</button>
      </form>
    </>
  );
}
