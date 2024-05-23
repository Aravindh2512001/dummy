import React, { useState, useRef } from "react";

export default function FormCrud() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [recordedBlobs, setRecordedBlobs] = useState([]);
  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        const chunks = [];
        mediaRecorder.ondataavailable = (event) => {
          chunks.push(event.data);
        };

        mediaRecorder.start(); // Start recording

        const intervalId = setInterval(() => {
          setRecordingTime((prevTime) => prevTime + 1);
        }, 1000);

        mediaRecorder.onstop = () => {
          clearInterval(intervalId);
          setRecordingTime(0);

          const audioBlob = new Blob(chunks, { type: "audio/webm" });
          setRecordedBlobs([audioBlob]); // Set recordedBlobs with the recorded data

          const audioUrl = URL.createObjectURL(audioBlob);
          // Create audio element and play the recording
          const audio = new Audio(audioUrl);
          audio.controls = true;
          audioRef.current.appendChild(audio);
        };
      })
      .catch((error) => {
        console.error("Error accessing microphone:", error);
      });
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
    }
  };

  const handleRecordClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
    setIsRecording(!isRecording);
  };

  return (
    <div className="App">
      <div className="cameraShow">
        {recordedBlobs.length > 0 && (
          <audio ref={audioRef} controls autoPlay></audio>
        )}
      </div>
      <p>Recording Time: {recordingTime} s</p>
      <button onClick={handleRecordClick}>
        {isRecording ? "Stop Recording" : "Record Audio"}
      </button>
    </div>
  );
}
