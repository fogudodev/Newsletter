import '../assets/css/button.css'

function Button({handleButton}) {
  return (
    <button onClick={handleButton}>Subscribe to monthly newsletter</button>
  )
}

export default Button