import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smile",
  "😔": "Sad",
  "😂": "Laugh",
  "😭": "Cry",
  "❤️": "Red Heart",
  "🐕": "Dog",
  "🏏": "Cricket",
  "🌈": "Rainbow",
  "📱": "Mobile Phone"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var emoji = event.target.value;
    var meaning = emojiDictionary[emoji];
    if (meaning === undefined) {
      meaning = "We are not able to recognize this emoji";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler} />
      <h2> Meaning: {meaning} </h2>
      <h3> Emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.75 rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
