import React from "react";
import { useGlobalContext } from "../util/context";

const Stories = () => {
  const { hits, removeStory } = useGlobalContext();

  return <section className="stories">
    {hits.map((hit) => {
      const {title, points, author, num_comments, url, objectID: id} = hit;
      return (
        <article className="story" key={id}>
          <h4 className="title">{title === null || title === "" ? "no title" : title}</h4>
          <p className="info">{points} points by {author} | {num_comments} comments</p>
          <div>
            <a href={url} className="read-link" target="_blank" rel="noopener noreferrer">read more</a>
            <button className="remove-btn" onClick={() => removeStory(id)}>remove</button>
          </div>
        </article>
      )
    })}
  </section>;
};

export default Stories;
