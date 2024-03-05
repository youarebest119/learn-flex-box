import './App.scss';
import Settings from './components/Settings';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import Main from './components/Main';
import { useSelector } from 'react-redux';

function App() {
  const { position } = useSelector(state => state.settings);

  return (
    <>
      {ReactDOM.createPortal(<Toaster />, document.body)}
      <div className={`App ${position === 'start' ? 'left_padding' : position === 'end' ? "right_padding" : ""}`}>
        <Settings />
        <Main />
      </div>
    </>
  );
}

export default App;
