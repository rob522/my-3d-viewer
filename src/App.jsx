import React, { useEffect } from "react";
import "@google/model-viewer";
import "./styles.css";

export default function App() {
  useEffect(() => {
    const modelViewer = document.querySelector("model-viewer");

    const handleResize = () => {
      modelViewer.style.width = `${window.innerWidth}px`;
      modelViewer.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    if (modelViewer) {
      modelViewer.exposure = 0.2;
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-container">
      <img
        src="/Outland-Logo_Outland-Logo-Black.png"
        alt="Company Logo"
        className="company-logo"
      />

      <model-viewer
        src="/Pool%20Slot%20GLB%20Test.glb"
        alt="A 3D model"
        auto-rotate
        camera-controls
        environment-image="/modern_bathroom_1k.hdr"
        shadow-intensity="0"
        camera-orbit="0deg 75deg auto"
        style={{
          backgroundColor: "#EBE8DF",
          filter: `contrast(1.3)`,
        }}
        class="model-viewer-container"
      ></model-viewer>
    </div>
  );
}
