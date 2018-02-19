import React from "react";
import Header from 'components/Header';

const App = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
)

export default App
