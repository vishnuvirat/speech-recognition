import { useEffect, useState } from "react";

export const useMicrophone = () => {
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then((stream) => {
        setStream(stream);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return [stream, error];
};
