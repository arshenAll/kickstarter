
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';
import './Page1.css';
import Funding from './Funding';
import Team from './Team';
import About from './About';
import Faq from './Faq';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Footer from './Footer';


function MainPage(){

    return(
    <div className="">
        <div className='margin-bottom-2 '>
            <header>
                <div className="center mt-3">
                    <h1 className="title-logo nuka-font">Nuka-Cola</h1>
                    <h3 className="futura-font">un gusto esplosivo in una bottiglia atomica</h3>
                </div>
            </header>
            <div className="navbar  wrap mt-0 w-100">
                <BrowserRouter>
                    <nav className='navbar navbar-expand-lg futura-font'>
                        <div className='container-fluid justify-content-center'>
                            <button className="me-2 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                                <div className='navbar-nav'>   
                                    <div className='nav-link' ><Link to="/" className='row-element link'>Home</Link></div>
                                    <div className='nav-link'>
                                        <Link to="/about" className='row-element link'>Info</Link>
                                    </div>
                                    <div className='nav-link'>
                                            <Link to="/funding" className='row-element link'>Donazioni</Link>
                                    </div>
                                    <div className='nav-link'>
                                        <Link to="/team" className='row-element link'>Il nostro Team</Link> 
                                    </div>
                                    <div className='nav-link'>
                                        <Link to="/faq" className='row-element link'>Faq</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <hr className='mb-5'/>
                    <main className='w-100'>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path='/about' element={<About/>}/>
                            <Route path='/funding' element={<Funding/>}/>
                            <Route path='/team' element={<Team/>}/>
                            <Route path='/faq' element={<Faq/>}/>
                        </Routes>
                    </main>
                </BrowserRouter>
            </div>
        </div>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
    )
}
export default MainPage;