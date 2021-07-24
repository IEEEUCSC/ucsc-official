import React from 'react'
import './index.css';
import { useParams} from "react-router-dom";
import  useFetch from '../../useFetch';

function Article() {
    const {id}=useParams();
    const {data: items,isPending,error} = useFetch('http://localhost:8000/items/' + id);
    return (
      <div className="article">
        <div class="container">
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
         { items && (
         <div className="container">  
            <img class="img-fluid rounded mb-4 mb-lg-0" src={`../.${items.url}`} alt=""></img>   
            <h1 class="font-weight-light">{items.title}</h1>
            <p style={{fontSize:"12px"}}>{items.date}</p>
            <p>{items.text}</p>
            <a class="btn btn-primary" href="#">Call to Action!</a>
      
        </div>)}
        <h1 style={{marginTop:"40px"}}>Latest Events</h1>
        <div class="row">
        <div class="col-md-4 mb-5">
              <div class="card">
                <img class="card-img-top" src="../../images/1.png" alt="Card image cap"></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
          </div>
        
          <div class="col-md-4 mb-5">
          <div class="card">
                <img class="card-img-top" src="../../images/1.png" alt="Card image cap"></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
          </div>
        
          <div class="col-md-4 mb-5">
          <div class="card">
                <img class="card-img-top" src="../../images/1.png" alt="Card image cap"></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
          </div>
         
    
        </div>
       
    
      </div>
      </div>  
    )
}

export default Article
