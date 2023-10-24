import React from 'react';
import "./styles.css";

const RevoluxOCJobDesc = () => {
    const figmaUrl = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkeS1y4OejeWxRbDBFk3iDy%2FRevolUX3.0-initial%3Fpage-id%3D9%253A8781%26type%3Ddesign%26node-id%3D28-9460%26viewport%3D-7373%252C3588%252C0.68%26t%3D2JDoTcb0oun6XIvD-1%26scaling%3Dscale-down%26starting-point-node-id%3D28%253A9854%26mode%3Ddesign";

    return (
        <div style={{width: '100vw', height: 'calc(100vh + 50px)', position: 'relative', background: 'rgb(0, 0, 0)' }}>
            <iframe
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.1)', position: 'relative', margin: '0',
                    padding: '0',
                    boxSizing: 'border-box',
                    overflow: 'hidden'
                }}
                width="100%"
                height="100%"
                src={figmaUrl}
                allowFullScreen
                title='RevolUX 3.0 OC Job Description'
            ></iframe>
        </div>
    );
};

export default RevoluxOCJobDesc;