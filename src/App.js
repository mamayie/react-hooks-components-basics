import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function Article() {
  return (
    <div>
      <div> Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
    </div>
  );
}

function Comment() {
  return (
    <div>
      <div>Naturally, I agree with this article.</div>
    </div>
  );
}

function App(){
  return(
    <div>
      <Article />
      <Comment />
    </div>
  )
}

export default App;
