import './App.css';
import Header from './Header.jsx';
import SearchBar from './SearchBar.jsx';
import Shortcuts from './Shortcuts.jsx';
import Footer from './Footer.jsx';
import Logo from './Logo.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <Logo />
      <SearchBar />
      <Shortcuts />
      <Footer />
    </div>
  );
}

export default App;