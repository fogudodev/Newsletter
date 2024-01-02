import Header from '../../components/Header'
import Content from '../../components/Content'
import Form from '../../components/Form'
import './style.css'

function Home() {
  return (
    <>
    <div className='container'>
    <Header />
      <section className="conteudo">
      <Content />
        <Form />
      </section>
   
    </div>

    </>
  )
}

export default Home