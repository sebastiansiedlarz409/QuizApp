import BottomBar from './bottom_bar';
import './main_page.css';
import './nav_bar.js';
import NavBar from './nav_bar.js';

function MainPage(props){
    return( 
        <div className='main_body'>
            <NavBar></NavBar>
            
            <h1>MainPage</h1>
            
            <BottomBar></BottomBar>
        </div>
    );
}

export default MainPage;