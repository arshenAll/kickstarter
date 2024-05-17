import './Page1.css';

function Page1() {
  return (
    <div className="Page1 border">
        <header /* className="App-header" */>
            <div className="center">

                <h1 className="titolo nuka-font margin-bottom-1 margin-top-1">Nuka-Cola</h1>
                <h3 className="titolo futura-font margin-top-1 margin-bottom-0">sottotitolo</h3>
            </div>
            <div className="navbar futura-font">
                <ul className='row-flex list-none'>
                 <li className='row-element'><a className='link' href="#summary">summary</a></li>
                 <li className='row-element'><a className='link' href="#long-descr">long-description</a></li>
                 <li className='row-element'><a className='link' href="#prototype">prototypes</a></li>
                 <li className='row-element'><a className='link' href="#fund-progr">funding-progress</a></li>
                 <li className='row-element'><a className='link' href="#comments">comments</a></li>
                 <li className='row-element'><a className='link' href="#leave-comment">leave-a-comment</a></li>
                 <li className='row-element'><a className='link' href="#contacts">contacts</a></li>
                </ul>
            </div>
        </header>
      
      <main>
        <div>

        <div id="summary">
            <div className='vertical-center'>
            <video className="intro-video" controls src="../images/IntroducendoNUKACOLA.mp4" type="mp4"></video>
                <img src='../images/nukabottle.jpg' alt="immagine nuka cola" className="image"></img>
            </div>
            <div className='horizontal-around'>
            </div>
            <h2>
            brief description
            </h2>
            <div  className='horizontal-around'>
                <div className='container-description'>
                    <p>
                        sezione brief description + foto
                    </p>
                </div>
                <img src="../images/nukabottle.jpg" alt="immagine nuka cola" className='image-small'></img>
            </div>
        </div>
        <div>
            <div className='vertical-center'>
                <button className='button-fund'>fund now</button>
                <p>OR</p>
                <button className='button-fund'>learn more</button>
            </div>
        </div>
        </div>

        <div className='horizontal-around border'>
            <h2 className='border container-fund'>
            funded by
            </h2>
            <div className='vertical-center'>
                <div className='border'> bar-----------------------</div>
                <div className='horizontal-around border'>
                    <div>bar</div>
                    <div>users</div>
                    <div>ringraziamenti</div>
                </div>
            </div>
        </div>
        <div id="long-descr" className='horizontal-around bg-color-orange'>
            <div className='container-description'>
                <p>
                    long description
                </p>
            </div>
            <img src="../images/nukabottle.jpg" alt="immagine nuka cola" className='image'/>
        </div>
        <h3>prototype</h3>
        <div className='horizontal-around h-100vh' id="prototype">
            <div className='vertical-center'>
                <div>part1</div>
                <div>part2</div>
                <div>part3</div>
            </div>
            <div className='vertical-center'>
                <div><p>paragrafo</p></div>
            </div>
            <div className='vertical-center'>
                <div>creator</div>
                <div>dona!</div>
            </div>
        </div>
        <h3>progress</h3>
        <div id="fund-progr" className='horizontal-around h-100vh'>
            <div className='vertical-center'>tiers</div>
            <div className='vertical-center'>
                <div >bar</div>
                <div > paragrafo</div>
            </div>
            <div className='vertical-center'>supporters</div>
        </div>
        <div id="comments" className='h-100vh'>
        <h3>commenti</h3>
            <div className='horizontal-around '>
                <div>commento</div>
                <div>commento</div>
                <div>commento</div>
                <div>commento</div>
            </div>
            <div id="leave-comment">lascia un commento</div>
        </div>
      </main>
        <footer id="contacts" className="border horizontal-around ">
                <p>contatti</p>
            <div className="border row-flex">
                <p className="border row-element">elemento 1</p>
                <p className="border row-element">elemento 2</p>
                <p className="border row-element">elemento 3</p>
            </div>
        </footer>
    </div>
  );
}

export default Page1;
