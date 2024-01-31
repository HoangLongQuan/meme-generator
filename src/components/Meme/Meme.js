import './Meme.css'

const Meme = () =>{
    return(
        <main className='main'>
            <form className='form'>
                <h3 className='input-name'>Top text</h3>
                <h4 className='input-name'>Bottom text</h4>
                <input type='text' className='form-input'/> 
                <input type='text' className='form-input'/>
                <button className='form-btn'>Get a new meme image</button>
            </form>
            
            
        </main>
    )
}

export default Meme;