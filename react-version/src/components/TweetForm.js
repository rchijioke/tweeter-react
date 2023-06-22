  import React from 'react'; //optional

  function TweetForm(){
    const humming = "What are you humming about"
    const handleSubmit = (event) => {
      event.preventDefault();
    }
    return (
      <section className="newtweet">
      <form onSubmit={handleSubmit} className="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder={humming}></textarea>
        <input type="submit" value="Tweet" className="form__input" 
        />
        <span className="form__counter">140</span>
      </form>
    </section>
    );
  }

  export default TweetForm;