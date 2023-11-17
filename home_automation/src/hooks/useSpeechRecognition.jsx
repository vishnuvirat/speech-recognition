import { useEffect, useState } from "react";

export const useSpeechRecognition = (onResult) => {
  const [recognition, setRecognition] = useState(null);
  const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
  const SpeechRecognitionEvent =
    window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  useEffect(() => {
    const recognition = new SpeechRecognition();
    recognition.onresult = onResult;
    recognition.continuous = false;
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onspeechend = function () {
      recognition.stop();
    };
    setRecognition(recognition);
  }, []); 

  return [recognition];
};
