import logo from './logo.svg'
import 'antd/dist/antd.css'
import './App.css'
import USFundingVisual from './components/USFundingVisual'

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Embedded Analytics with Tableau and React</h1>
      </div>
      <div className="container">
        <div className="sidebar">
          <ul>
            <li>
              <button className="navbutton">US Funding</button>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="vizContainer">
            <USFundingVisual />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
