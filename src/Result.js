import React from "react";

export default function Result(props) {
  if (props.result) {
    return (
      <div>
        <h2>{props.result[0].word}</h2>
        {props.result[0].meanings.map(function (meaning, index) {
            console.log(meaning.definitions[0].definition);
            return meaning.definitions[0].definition;
        })}
        </div>
    );
  } else {
    return null;
  }
}
