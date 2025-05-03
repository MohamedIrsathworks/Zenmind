// src/pages/References.js or src/components/References.js
import React from "react";
import "../styles/references.css"; // optional, for styling

const References = () => {
  const pdfs = ["source1.pdf", "source2.pdf", "source3.pdf", "source4.pdf"];

  return (
    <div className="references-container">
      <h1>References</h1>
      <div className="pdf-grid">
        {pdfs.map((pdf, idx) => (
          <div className="pdf-viewer" key={idx}>
            <iframe
              src={`/pdfs/${pdf}`}
              width="100%"
              height="500px"
              title={`Source ${idx + 1}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;
