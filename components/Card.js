import React from 'react'
import Head from 'next/head'

const Card = () => (
	<div>
		<Head>
	      <link rel="stylesheet" href = "https://bootswatch.com/4/journal/bootstrap.min.css"/>
	    </Head>
		<div className="card text-white bg-primary mb-3">
	        <div className="card-body">
	          <h4 className="card-title">LEM446AA</h4>
	          <img src="../images/car.jpg"/>
	          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	        </div>
	    </div>

	    <style jsx>{`
	      img {
	        height: 200px; 
	        width: 100%; 
	        display: block;
	      }

	      .card {
	        max-width: 20rem;
	        text-align: left;
	      }

	    `}</style>
    </div>
)

export default Card

/*
class Card {
	state {
		count: 0
	};
}
*/