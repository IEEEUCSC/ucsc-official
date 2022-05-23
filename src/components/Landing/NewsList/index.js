// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './index.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
// import data from '../data/newsItems.json'
//
// const NewsList = () => {
//  const [items]= useState(data.items);
//   return (
//
//     <section id="newslist">
//       <div className="appContainer">
//         <header className="app-header"></header>
//         <section className="app-title">
//           <div className="app-title-content">
//             <h1 style={{ color: "white", fontSize: "45px", fontWeight: "800", paddingBottom: "30px" }}>PAST EVENTS</h1>
//           </div>
//
//         </section>
//         <div className="app-card-list" id="app-card-list">
//           {items.map(item => (
//             <article className="card">
//               <header className="card-header" style={{ backgroundImage: `url(${item.url})` }}>
//
//               </header>
//               <div className="card-body" key={item.id} >
//                 <Link to={`/items/${item.id}`} style={{ textDecoration: 'none' }}>
//                   <p className="date">{item.date}</p>
//                   <h2>{item.title}</h2>
//                   <p className="body-content">{item.text}</p>
//                   <a className="aboutus-more" href="#">read more</a>
//                 </Link>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// export default NewsList;
