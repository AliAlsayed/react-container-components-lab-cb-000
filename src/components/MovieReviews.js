// Code MovieReviews Here
import React from 'react';
// export default class MovieReviews extends React.Component {
//   render(){
//     return (
//       <div
//     )
//   }
// }

const MovieReviews = ({reviews}) => (
  <div className='review-list'>
    {
      reviews.map((review) =>
        <p className='review'>review.summary_short</p>
      )
    }
  </div>
)
export default MovieReviews;
