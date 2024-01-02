import '../assets/css/form.css'
import Button from './Button'
import { useState, useEffect } from 'react'

function Form() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => {
        setError('');
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setError('Este campo é obrigatório');
    } else {
      setError('');
      console.log(email)
    }
  };

  return (
    <div className='form'>
      
      <div className="label" htmlFor="email">
      <label htmlFor="email">Email address </label>
      <div>
      {error && <span style={{fontSize: 10, color: 'red'}}>{error}</span>}
      </div>
      
      </div>
        
        
        <input
         type="text"
         placeholder='example@mail.com'
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         required
         />
         
         <Button handleButton={handleSubmit} />
    </div>
  )
}

export default Form