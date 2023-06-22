import React from 'react';
import Tweet from './Tweet'; 

function TweetList() {
  
  const tweets = [
    {
      avatar: "https://i.imgur.com/73hZDYK.png",
      firstName: "Isaac",
      lastName: "Newton",
      handle: "@SirIsaac",
      body: "If I have seen further it is by standing on the shoulders of giants",
      age: "10 days ago"
    },
    {
      avatar: "https://i.imgur.com/nlhLi3I.png",
      firstName: "Descartes",
      lastName: "",
      handle: "@rd",
      body: "Je pense, donc je suis",
      age: "10 days ago"
    }
  ];

  return (
    <section className="tweets">
      {/* Render each tweet using the Tweet component */}
      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </section>
  );
}

export default TweetList;