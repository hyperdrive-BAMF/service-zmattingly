import React from 'react';
import ReviewAuthor from './ReviewAuthor.jsx';

import './../styles/Review.scss';
//  __________            .__               
//  \______   \ _______  _|__| ______  _  __
//   |       _// __ \  \/ /  |/ __ \ \/ \/ /
//   |    |   \  ___/\   /|  \  ___/\     / 
//   |____|_  /\___  >\_/ |__|\___  >\/\_/  
//          \/     \/             \/        

const Review = (props) => {

  const reviewDate = new Date(props.datePosted);

  const recommendationHeader = props.recommended ? (
      <header className="recommended">
          <span>Recommended</span>
      </header>
    ) : (
      <header className="not-recommended">
          <span>Not Recommended</span>
      </header>
    );

  return (
    <div className="review row">
      <div className="col-md-3">
        <ReviewAuthor authorUsername={ props.authorUsername } authorAvatarUrl={ props.authorAvatarUrl } />
      </div>
      <div className="col-md-9">
        <article>
          { recommendationHeader }
          <span class="posted-date">
            Posted: { reviewDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }) }
          </span>
          <div class="content">
            { props.content }
          </div>
        </article>
      </div>
    </div>
  );
}

export default Review;
