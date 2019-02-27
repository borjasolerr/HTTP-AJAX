import React from 'react';

export default function Form() {
  return (
    <div>
      <form action="" method="post">
        Name: <input type="text" />
        Age: <input type="number" />
        Email: <input type="email" />
        <input className="submit-button" type="submit" />
      </form>
    </div>
  );
}
