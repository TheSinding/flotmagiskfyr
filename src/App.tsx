import React, { useEffect, useRef } from "react";
import ConfettiGenerator from "confetti-js";
import "./App.css";

function App() {
  const locationURL = new URL(window.location.href);
  const name = locationURL.searchParams.get("n");
  const canvasRef = useRef(null);
  console.log(window.location);
  useEffect(() => {
    if (!canvasRef.current) return;
    // @ts-ignore
    const confetti = new ConfettiGenerator({
      target: "my-canvas",
      props: ["square"],
    });
    confetti.render();
    return () => confetti.clear();
  }, []);

  return (
    <div className="App">
      <canvas
        ref={canvasRef}
        id="my-canvas"
        style={{
          top: "0",
          left: "0",
          position: "fixed",
          height: "100vh",
          width: "100vw",
        }}
      ></canvas>
      <header className="App-header">
        <p>Hvem er en flot magisk fyr?</p>
        <img src="/ice_t_wanna_be.jpg" width="400" alt="" />
        <p>
          <b>{name ? name : "Du"}</b> er en flot magisk fyr!
        </p>
      </header>
      <footer className="App-footer">
        <div className="col">
          Lavet af <a href="sinding.dev">Simon Sinding</a> til <b>dig</b>!
        </div>
        <div className="col">Del med en anden flot magisk fyr!</div>
      </footer>
    </div>
  );
}

export default App;
