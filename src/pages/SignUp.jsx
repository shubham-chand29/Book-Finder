const SignUp = () => {
    return (
      <div className="p-8">
        <h1 className="text-4xl mb-8">Sign Up</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="p-2 border" required />
          <input type="password" placeholder="Password" className="p-2 border" required />
          <button className="p-2 bg-blue-500 text-white">Sign Up</button>
        </form>
      </div>
    );
  };
  
  export default SignUp;
  