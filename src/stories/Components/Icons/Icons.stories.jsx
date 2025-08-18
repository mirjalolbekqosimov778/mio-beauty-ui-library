import React, { useState } from "react";
import { Icon } from "./Icons";
import { ImIcons } from "../../assets/icons";

export default {
    title: "Example/Icons",
    component: Icon,
};

export const Default = () => {
    const [copied, setCopied] = useState("");

    const handleCopy = (text) => {
        if (!text) return;
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(text);
                setTimeout(() => setCopied(""), 1500);
            })
            .catch((err) => console.error("Failed to copy: ", err));
    };

    return (
        <div style={{ position: "relative" }}>

            {copied && (
                <div style={{
                    position: "absolute",
                    top: 30,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#333",
                    color: "#fff",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    fontSize: 12,
                    zIndex: 1000,
                    fontFamily: "sans-serif",
                    transition: "opacity 0.3s ease",
                }}>
                    Copied: {copied}
                </div>
            )}

            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "25px" }}>
                {Object.keys(ImIcons).map((name) => (
                    <div
                        key={name}
                        style={{
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                        onClick={() => handleCopy(name)}
                    >
                        <Icon name={name} size={25} fill='white' fallback={<div style={{ width: 25, height: 25 }} />} />
                        <div style={{ fontSize: 14, marginTop: 4, fontFamily: 'sans-serif' }}>{name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
