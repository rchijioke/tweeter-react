import React from 'react';

function Tweet({ tweet }) {
  return (
    <article className="tweet">
      <header className="tweet--header">
        <img className="tweet--avatar" src={tweet.avatar} alt="Avatar" />
        <h2 className="tweet--name">{tweet.firstName} {tweet.lastName}</h2>
        <small className="tweet--handle">{tweet.handle}</small>
      </header>

      <div className="tweet--body">
        <p>{tweet.body}</p>
      </div>

      <footer className="tweet--footer">
        <small className="footer--age">{tweet.age}</small>
        <small className="footer--actions">
          <a href="#"><i className="fa fa-flag"></i></a>
          <a href="#"><i className="fa fa-retweet"></i></a>
          <a href="#"><i className="fa fa-heart"></i></a>
        </small>
      </footer>
    </article>
  );
}

export default Tweet;
