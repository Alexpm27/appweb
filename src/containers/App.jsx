import '../assets/styles/App.css'
import Form from '../components/Form'
import Layaout from './Layaout';
function App() {
  return (
    <div className='App'>
      <Layaout/>
        <section>
        <Form/>
        </section>
      <Layaout/>
    </div>
    
  )
}

export default App
