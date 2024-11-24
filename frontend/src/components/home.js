import React from 'react';

function HomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Login">Login</a></li>
          <li><a href="/SignUp">Register</a></li>
        </ul>
      </nav>

      <h1>Welcome to My Home Page</h1>
      <p>This is a simple React page with a navbar.</p>
    </div>
  );
}

export default HomePage;