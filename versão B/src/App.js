import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Hotjar from '@hotjar/browser';

const siteId = 5165566;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
