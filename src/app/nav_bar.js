import './nav_bar.css';

function NavBar(props){
    return( 
        <div className='nav_bar'>
            <center>
                <div className='nav_bar_menu'>
                    <span className='nav_bar_title'>QuizApp</span>
                    <span className='nav_bar_item' onClick={() => props.setView(0)}>Losowe pytanie</span>
                    <span className='nav_bar_item' onClick={() => props.setView(1)}>Test</span>
                </div>
            </center>
        </div>
    );
}

export default NavBar;