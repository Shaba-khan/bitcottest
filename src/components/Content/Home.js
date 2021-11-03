import React from 'react';
import  Header from '../Header/Header';
import  Footer from '../Footer/Footer';
import  SubHeader from '../Header/SubHeader';

const titleName='Popular Title'

function Home(props)
{
    return(
      <div>
       <Header />
       <SubHeader title={titleName} />
       <div className="Home">
        <div className="container text-left">
           <div className="row">
           	<div className="col-md-3">
		        <div className="card bg-dark text-white">
		          <a href="/series">
		           <img src="./assets/social/series.jpeg" className="card-img" alt="..." />
		           </a>
	           </div>
	           <div className="pt-2"> <a href="/series">Popular Series</a></div>

           </div>
           <div className="col-md-3">
		        <div className="card bg-dark text-white">
		          <a href="/movies">

		          <img src="./assets/social/movies.jpeg" className="card-img" alt="..." />
		          </a>
	           </div>
	           <div className="pt-2"><a href="/movies">Popular Movies</a></div>

           </div>
          </div>
        </div>
       </div>
       <Footer />

      </div>
    )
}

export default Home