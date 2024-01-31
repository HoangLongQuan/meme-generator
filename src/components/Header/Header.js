import './Header.css'

const Header = () =>{
    return(
        <header className='header'>
            <img src={require('../../images/logo.png')} className='logo'/>
            <h2 className='web-name'>Meme Generator</h2>
            <p className='text'>React Course - Project 3</p>
        </header>
    )
}

export default Header;