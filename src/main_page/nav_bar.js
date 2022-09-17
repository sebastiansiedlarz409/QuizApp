import './nav_bar.css';

function NavBar(props){
    return( 
        <div className='nav_bar'>
            {/* Title */}
            <span className='nav_bar_title'>QuizApp</span>
            {/* Menu options */}
            <div className='nav_bar_menu'>
                <span className='nav_bar_item'>Losowe pytanie</span>
                <span className='nav_bar_item'>Zestaw 20 pytań</span>
            </div>
        </div>
    );
}

export default NavBar;