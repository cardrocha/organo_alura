import './Rodape.css'

const Rodape = () => {
  return (
    <footer className='container'>
      <div className="social-links">
        <a href="www.facebook.com/"><img src="/imagens/fb.png" alt="logo facebok" /></a>
        <a href="www.twitter.com/"><img src="/imagens/tw.png" alt="logo twitter" /></a>
        <a href="https://www.instagram.com/"><img src="/imagens/ig.png" alt="logo instagram" /></a>
      </div>
      <img className='image-logo' src="/imagens/logo.png" alt="logo organo" />
      <p>Desenvolvido por Alura</p>
    </footer>
  )
}

export default Rodape