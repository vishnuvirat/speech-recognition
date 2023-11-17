import React from "react";
import { useState } from "react";
import { useSpeechRecognition } from "./hooks/useSpeechRecognition";
import config from "./config";

function App() {
  const [light, setLight] = useState("light off");
  const [fan, setFan] = useState("fan off");

  const lightOn = () => {
    if (light == "light off") {
      setLight("light on");
      const num = 12;
      fetch(`${config.raspURL}/?pin=${num}&status=on`);
    } else {
      setLight("light off");
      const num = 12;
      fetch(`${config.raspURL}/?pin=${num}&status=off`);
    }
  };
  const fanOn = () => {
    if (fan == "fan off") {
      setFan("fan on");
    } else {
      setFan("fan off");
    }
  };

  const [stt, setStt] = useState([]);

  const [recognition] = useSpeechRecognition((event) => {
    let text = event.results[0][0].transcript;
    setStt(text);
    if (text === "light on") {
      console.log(text);
      const num = 12;
      fetch(`${config.raspURL}/?pin=${num}&status=on`);
    } else if (text === "light off") {
      const num = 12;
      fetch(`${config.raspURL}/?pin=${num}&status=off`);
    } else if (text === "fan on") {
      const num = 25;
      fetch(`${config.raspURL}/?pin=${num}&status=on`);
    } else if (text === "fan off") {
      const num = 25;
      fetch(`${config.raspURL}/?pin=${num}&status=off`);
    }
  });

  return (
    <div
      className="App"
      onClick={() => {
        recognition.start();
      }}
    >
      <div className="grid-cols-2">
        <button
          className="border border-black w-32 h-32 flex items-center justify-center"
          onClick={lightOn}
        >
          {light}
        </button>
        <button
          className="border border-black w-32 h-32 flex items-center justify-center"
          onClick={fanOn}
        >
          {fan}
        </button>

        {stt}
      </div>
    </div>
  );
}

export default App;
