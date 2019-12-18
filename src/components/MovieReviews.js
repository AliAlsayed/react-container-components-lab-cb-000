// Code MovieReviews Here
import React from 'react';
// export default class MovieReviews extends React.Component {
//   render(){
//     return (
//       <div
//     )
//   }
// }
const Review = ({
  summary_short
}) => {
  <p className='review'>{summary_short}</p>
}

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>;
export default MovieReviews;
