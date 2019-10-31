import React from 'react'
import Head from 'next/head'
// import Image from require('../images/car.jpg')

const Card = () => (
	<div>
		<Head>
	      <link rel="stylesheet" href = "https://bootswatch.com/4/journal/bootstrap.min.css"/>
	    </Head>
		<div className="card text-white bg-primary mb-3">
	        <div className="card-body">
	        <video className="video" controls autoplay>
			  <source src="/static/securitycam.mp4" type="video/mp4"/>
			</video>
	        </div>
	    </div>

	    <style jsx>{`
	      img {
	        height: 300px; 
	        width: 100%; 
	        display: block;
	      }

	      .card {
	        max-width: 80%;
	        text-align: left;
	        margin: auto;
	      }

	      .video {
	      	display: block;
	      	margin: 0 auto;
	      	height: 300px; 
	        width: 100%; 
	      }

	    `}</style>
    </div>
)

export default Card

// 	<div>
// 		<Head>
// 	      <link rel="stylesheet" href = "https://bootswatch.com/4/journal/bootstrap.min.css"/>
// 	    </Head>
// 		<div className="card text-white bg-primary mb-3">
// 	        <div className="card-body">
// 	          <h4 className="card-title">LEM446AA</h4>
// 	          <img src="/static/car.jpg"/>
// 	          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// 	        </div>
// 	    </div>

// 	    <style jsx>{`
// 	      img {
// 	        height: 200px; 
// 	        width: 100%; 
// 	        display: block;
// 	      }

// 	      .card {
// 	        max-width: 20rem;
// 	        text-align: left;
// 	      }

// 	    `}</style>
//     </div>
// )
