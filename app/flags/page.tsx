import React from 'react';

export default function Page() {
  return (
    <div className="p-6 space-y-8">
      {/* Section 1: Flag Icons CSS */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Using Flag Icons CSS</h2>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css"
        />
        <div className="flex space-x-4 items-center">
          <span className="fi fi-nl" style={{ width: "48px" }}></span> <span>Netherlands</span>
        </div>
        <div className="flex space-x-4 items-center">
          <span className="fi fi-de" style={{ width: "48px" }}></span> <span>Germany</span>
        </div>
        <div className="flex space-x-4 items-center">
          <span className="fi fi-it" style={{ width: "48px" }}></span> <span>Italy</span>
        </div>
      </section>

      {/* Section 2: Using Emoji Flags */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Using Emoji Flags</h2>
        <div className="flex space-x-4 items-center">
          <span style={{ fontSize: '28px' }}>🇳🇱</span> <span>Netherlands</span>
        </div>
        <div className="flex space-x-4 items-center">
          <span style={{ fontSize: '28px' }}>🇩🇪</span> <span>Germany</span>
        </div>
        <div className="flex space-x-4 items-center">
          <span style={{ fontSize: '28px' }}>🇮🇹</span> <span>Italy</span>
        </div>
      </section>

      {/* Section 3: Using FlagCDN.com PNGs */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Using API and CDN (flagpedia.net, flagsapi.com)</h2>
        <div className="flex space-x-4 items-center">
          <img
            src="https://flagcdn.com/w40/nl.png"
            alt="Netherlands"
            style={{ width: "28px" }}
          />
          <span>Netherlands</span>
        </div>
        <div className="flex space-x-4 items-center">
          <img
            src="https://flagcdn.com/w40/de.png"
            alt="Germany"
            style={{ width: "28px" }}
          />
          <span>Germany</span>
        </div>
        <div className="flex space-x-4 items-center">
          <img
            src="https://flagcdn.com/w40/it.png"
            alt="Italy"
            style={{ width: "28px" }}
          />
          <span>Italy</span>
        </div>
      </section>

      {/* Section 4: Adding Flags as Image Files */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Using Image Files</h2>
        <div className="flex space-x-4 items-center">
          <img
            src="https://flagsapi.com/NL/flat/64.png" // your /static/images/flags/nl.svg (legacy sprite)
            alt="Netherlands"
            style={{ width: "28px" }}
          />
          <span>Netherlands</span>
        </div>
        <div className="flex space-x-4 items-center">
          <img
            src="https://flagsapi.com/DE/flat/64.png"
            alt="Germany"
            style={{ width: "28px" }}
          />
          <span>Germany</span>
        </div>
        <div className="flex space-x-4 items-center">
          <img
            src="https://flagsapi.com/IT/flat/64.png"
            alt="Italy"
            style={{ width: "28px" }}
          />
          <span>Italy</span>
        </div>
      </section>

      {/* Section 5: Using Inline SVGs */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Using Inline SVGs</h2>
        <div className="flex space-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            style={{ width: "28px" }}
          >
            <g fillRule="evenodd" strokeWidth="1pt">
              <path fill="#21468b" d="M0 0h640v480H0z" />
              <path fill="#fff" d="M0 0h640v320H0z" />
              <path fill="#ae1c28" d="M0 0h640v160H0z" />
            </g>
          </svg>
          <span>Netherlands</span>
        </div>
        <div className="flex space-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            style={{ width: "28px" }}
          >
            <g fillRule="evenodd" strokeWidth="1pt">
              <path fill="#000" d="M0 0h640v160H0z" />
              <path fill="#d00" d="M0 160h640v160H0z" />
              <path fill="#ffce00" d="M0 320h640v160H0z" />
            </g>
          </svg>
          <span>Germany</span>
        </div>
        <div className="flex space-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            style={{ width: "28px" }}
          >
            <g fillRule="evenodd" strokeWidth="1pt">
              <path fill="#fff" d="M0 0h640v480H0z" />
              <path fill="#009246" d="M0 0h213.3v480H0z" />
              <path fill="#ce2b37" d="M426.7 0H640v480H426.7z" />
            </g>
          </svg>
          <span>Italy</span>
        </div>
      </section>
    </div>
  );
}