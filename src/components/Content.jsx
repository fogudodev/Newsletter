import '../assets/css/content.css'
import IconList from '../assets/icons/icon-list.svg'

function Content() {
  return (
    <section className='container-content'>
        <h1 className="title-content">
            Stay Updated!
        </h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>

     <section className="list-content">
        <div className="item">
            <img src={IconList} alt="icon" />
            <p>Product discovery and building what matters</p>
        </div>
        <div className="item" style={{marginBottom: 10}}>
            <img src={IconList} alt="icon" />
            <p>Measuring to ensure updates are a success</p>
        </div>
        <div className="item">
            <img src={IconList} alt="icon" />
            <p>and much more!</p>
        </div>
     </section>
    </section>
  )
}

export default Content