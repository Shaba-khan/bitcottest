import React, {useState,useEffect} from 'react';
import  Header from '../Header/Header';
import  Footer from '../Footer/Footer';
import  SubHeader from '../Header/SubHeader';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const titleName='Popular Movies'

function Movies(props) {
 const [data,setData]=useState([]);
 const [Chunkdata,setChunkdata]=useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [hasError, setHasError] = useState(false);

 const getData=()=>{
     let chunk=[];
     setIsLoading(true);
     setHasError(false);
     try {
            fetch('sample.json'
            ,{
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
            }
            )
            .then(function(response){
                // console.log(response)
                return response.json();
              })
            .then(function(myJson) {
              let newarray=myJson.entries.filter(data => ( data.programType =="movie" && data.releaseYear >=2010  )).sort((a, b)=>a.title.localeCompare(b.title)
                 )

                chunk = newarray.slice(0, 21);
                // console.log(chunk.length)
                setData(newarray)
                
              }).catch(error=>setHasError(true));
         } catch (error) {

        setHasError(true);
      }
      setIsLoading(false);
  }
  useEffect(()=>{
    getData()

  },[])
 const renderRows=()=>{
  let results = data;
  let finalArr = [], columns = []
    chunkFunction(data,7).map((e,i)=>{
                 e.map((dataresult,index)=>{
                      if(i>2){

                         columns.push(
                              <div id={index} className="customcol">
                                <div className="card bg-dark text-white">
                                     <LazyLoadImage
                                        alt={dataresult.images['Poster Art'].url}
                                       
                                        src={dataresult.images['Poster Art'].url}
                                        effect="blur"  // use normal <img> attributes as props
                                         />

                                 </div>
                                 <div className="pt-2"><a >{dataresult.title}</a></div>
                              </div>

                      )
                      }
                       columns.push(
                              <div id={index} className="customcol">
                                <div className="card bg-dark text-white">
                                   <img src={dataresult.images['Poster Art'].url} className="card-img" alt="..." />

                                 </div>
                                 <div className="pt-2"><a >{dataresult.title}</a></div>
                              </div>

                      )
                     
                  })
              finalArr.push(<div className ="row">
                         {columns}
                      </div>);
                    columns = [];
                  
             })
  
 return  finalArr;
}
const chunkFunction = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

    return(
      <div>
       <Header />
       <SubHeader title={titleName} />
     
       <div className="Home">
        <div className="container text-left">
           {hasError && <p>Something went wrong.</p>}
            {isLoading ? (
            <p>Loading ...</p>
             ) :
             renderRows()
             }
        </div>
       </div>
       <Footer />
      </div>
    )
}

export default Movies