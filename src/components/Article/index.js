import { useState, React } from "react";
import "./index.css";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import data from "../Landing/data/newsItems.json";

function Article() {
  const { id } = useParams();
  const [items] = useState(data.items[id - 1]);
  return (
    <div classNameName="article">
      <div className="container">
        {items && (
          <div classNameName="container">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={`../.${items.url}`}
              alt=""
            ></img>
            <h1 className="font-weight-light">{items.title}</h1>
            <p style={{ fontSize: "12px" }}>{items.date}</p>
            <p>{items.text}</p>
            <a className="btn btn-primary" href="#">
              Call to Action!
            </a>
          </div>
        )}
        <h1 style={{ marginTop: "40px" }}>Latest Events</h1>
        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card">
              <img
                className="card-img-top"
                src="../../images/1.png"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img
                className="card-img-top"
                src="../../images/1.png"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img
                className="card-img-top"
                src="../../images/1.png"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
