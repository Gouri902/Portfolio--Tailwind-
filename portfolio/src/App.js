import './App.css';
import About from './Components/About';
import TalkAction from './Components/TalkAction';
import Services from './Components/Services';
import Team from './Components/Team';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className="bg-zinc-600">
        <About/>
        <TalkAction/>
        <Services/>
        <Team/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;












// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
