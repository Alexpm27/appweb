import '../assets/styles/App.css'
import Form from '../components/Form'
import Layaout from './Layaout';
import Header from '../components/Header'
import Footer from '../components/Footer'
function App() {
  return (
    <div className='App'>
      <Layaout>
        <section>
        <Form/>
        </section>
      </Layaout>
    </div>
    
  )
}

export default App
