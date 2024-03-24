import logo from './logo.svg';
import './App.css';

function form() {
  const data={name:"", email:"",password:""};
  const [inputData, setInputData]=UseState(data)
  function handleData(e){
    setInputData({...inputData,[e.target.name]:e.target.value})
    console.log(inputData)
  }
  return (
    <form className='container'>
      <div className='header'>
        <h1>
          registration form
        </h1>
      </div>
      <div>
        <input type='text' placeholder='Enter Your Name' name='name' value={inputData.name} onChange={handleData}></input>
      </div>
      <div>
        <input type='text' placeholder='Enter Your Email' name='email' value={inputData.email} onChange={handleData}></input>
      </div>
      <div>
        <input type='password' placeholder='Enter Your Password' name='password' value={inputData.password}onChange={hangleData}></input>
      </div>
      <div>
        <button type='submit' value='inputData.'>Submit</button>
      </div>

    </form>
   
  );
}

export default form;
