import '../assets/styles/form.css'

function Form(){
    return(
        <div className="containerForm">
            <div className="form">
                <div className="title">
                    <span />Register<br />
                </div>
                <form>
                <label>Name</label><br />
                <input type="text"  className='inputTxt'/><br />

                <label>Email</label><br />
                <input type="email"  className='inputTxt'/><br />

                <label>Password</label><br />
                <input type="password" name="password" className='inputTxt'/><br />

                <label>Sexo</label><br />
                <input type="radio" className='inputrd'/> Hombre 
                <input type="radio" className='inputrd'/> Mujer<br />

                <label>Age</label><br />
                <input type="number"  className='inputTxt'/><br />

                <label>City</label><br />
                <input type="text"  className='inputTxt'/><br />

                <label>University</label><br />
                <input type="text"  className='inputTxt'/><br />

                <label>Career</label><br />
                <select id="carrer" name="career">
                <option value="volvo">ING. SOFTWARE</option>
                <option value="saab">BIOMEDICA</option>
                <option value="fiat">PETROLERA</option>
                 <option value="audi">ENERGIA</option>
                </select>
                <input type="submit" className='submit'/>
            </form>
            
            

            </div>
        </div>
    )
}export default Form;