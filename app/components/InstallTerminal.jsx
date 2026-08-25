"use client";
import { useState } from "react";

export default function InstallTerminal({ variant = "default" }) {
  const [tab, setTab] = useState("npm");
  const commands = {
    npm: "npm install @nfsfu234/form-validation",
    cdn: '<script src="https://cdn.jsdelivr.net/npm/@nfsfu234/form-validation@latest/dist/js/nfsfu234FormValidation.js"></script>',
  };
  return (
    <div
      className="land-terminal"
      style={
        variant === "compact" ? { maxWidth: "24rem", margin: 0 } : undefined
      }
    >
      <div className="land-terminal-bar">
        <span />
        <span />
        <span />
        <div className="land-terminal-tabs">
          <button
            className={tab === "npm" ? "is-active" : ""}
            onClick={() => setTab("npm")}
          >
            npm
          </button>
          <button
            className={tab === "cdn" ? "is-active" : ""}
            onClick={() => setTab("cdn")}
          >
            CDN
          </button>
        </div>
      </div>
      <pre>
        <span className="land-prompt">{tab === "npm" ? "$" : ""}</span>
        {commands[tab]}
      </pre>
    </div>
  );
}
