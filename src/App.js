import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(1);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 1:
        return <Component1 />;
      case 2:
        return <Component2 />;
      case 3:
        return <Component3 />;
      case 4:
        return <Component4 />;
      case 5:
        return <Component5 />;
      default:
        return <Component1 />;
    }
  };

  return (
    <div id="root">
      <div className="sidebar">
        <Sidebar onSelect={setSelectedComponent} selected={selectedComponent} />
      </div>
      <div className="main-content">
      <Header
          title="Frontend Masters: Solid Principles in React"
          fontSize="28px"
          fontFamily="Roboto, sans-serif"
          color="#FFFFFF"
          isCentered={false}
          hasImage={false}
          imageUrl="/path-to-logo.png"
          imageAlt="App Logo"
          imageSize="50px"
          backgroundColor="#2C3E50"
          padding="20px"
        />
        <div className="content">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default App;
