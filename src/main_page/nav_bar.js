import './nav_bar.css';

function NavBar(props){
    return( 
        <div className='nav_bar'>
            {/* Title */}
            <h5 className='nav_bar_title'>QuizApp</h5>
            {/* Menu options */}
            <h5 className='nav_bar_item'>Losowe pytanie</h5>
            <h5 className='nav_bar_item'>Zestaw 20 pytań</h5>
        </div>
    );
}

export default NavBar;