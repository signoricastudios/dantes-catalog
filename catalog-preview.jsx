import React, { useState, useRef, useEffect } from 'react';

// Dante's Outlaw Supply - Vintage Catalog
// "What you carry will be weighed."

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Courier+Prime:wght@400;700&family=IM+Fell+English:ital@0;1&family=Cinzel:wght@400;500&display=swap');
  
  :root {
    --paper-base: #f4e8d3;
    --paper-aged: #e8d9c0;
    --paper-dark: #d4c4a8;
    --ink-black: #1a1612;
    --ink-faded: #3d3428;
    --ink-ghost: #8b7d6d;
    --seal-red: #6b2020;
  }
  
  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  .catalog-wrapper {
    width: 100vw;
    height: 100vh;
    background: var(--ink-black);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Courier Prime', monospace;
    overflow: hidden;
    position: relative;
  }
  
  .catalog-wrapper::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%);
    pointer-events: none;
    z-index: 100;
  }
  
  .book-container {
    perspective: 2000px;
    width: 700px;
    height: 480px;
  }
  
  .book {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
  }
  
  .page {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    background: var(--paper-base);
    background-image:
      url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.05'/%3E%3C/svg%3E"),
      radial-gradient(ellipse at 20% 80%, rgba(180, 160, 120, 0.15) 0%, transparent 50%),
      linear-gradient(to bottom, var(--paper-base) 0%, var(--paper-aged) 100%);
    box-shadow: inset -2px 0 10px rgba(0,0,0,0.1);
    transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform-style: preserve-3d;
    transform-origin: left center;
    cursor: pointer;
  }
  
  .page.right { right: 0; transform-origin: left center; }
  .page.left { left: 0; transform-origin: right center; }
  
  .page-front, .page-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    padding: 30px;
    display: flex;
    flex-direction: column;
  }
  
  .page-back {
    transform: rotateY(180deg);
  }
  
  .page.flipped { transform: rotateY(-180deg); }
  
  /* Cover */
  .cover {
    background: var(--ink-black);
    color: var(--paper-aged);
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .cover::before {
    content: '';
    position: absolute;
    inset: 15px;
    border: 1px solid rgba(244,232,211,0.2);
    pointer-events: none;
  }
  
  .brand-name {
    font-family: 'Cinzel', serif;
    font-size: 1.6rem;
    letter-spacing: 0.25em;
    margin-bottom: 0.5em;
  }
  
  .tagline {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    font-size: 0.8rem;
    opacity: 0.7;
  }
  
  .volume {
    position: absolute;
    bottom: 30px;
    font-family: 'Special Elite', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    opacity: 0.5;
  }
  
  /* Cowboy Page */
  .cowboy-page {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .illustration-frame {
    width: 180px;
    height: 240px;
    background: linear-gradient(135deg, var(--paper-dark) 0%, var(--paper-aged) 100%);
    border: 1px solid var(--ink-ghost);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15);
    animation: breathe 8s ease-in-out infinite;
    overflow: hidden;
  }
  
  @keyframes breathe {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.003); }
  }
  
  .illustration-placeholder {
    font-family: 'Special Elite', monospace;
    font-size: 0.5rem;
    color: var(--ink-ghost);
    letter-spacing: 0.1em;
  }
  
  .verse {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    font-size: 0.75rem;
    color: var(--ink-faded);
    margin-bottom: 12px;
    line-height: 1.6;
  }
  
  .price {
    font-family: 'Special Elite', monospace;
    font-size: 1.5rem;
    color: var(--ink-black);
  }
  
  /* Details Page */
  .details-page h2 {
    font-family: 'Cinzel', serif;
    font-size: 0.9rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 16px;
    color: var(--ink-black);
  }
  
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 16px;
  }
  
  .glued-photo {
    background: #faf8f3;
    padding: 5px;
    padding-bottom: 18px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    position: relative;
  }
  
  .glued-photo:nth-child(1) { transform: rotate(-2deg); }
  .glued-photo:nth-child(2) { transform: rotate(1.5deg); }
  .glued-photo:nth-child(3) { transform: rotate(0.5deg); }
  .glued-photo:nth-child(4) { transform: rotate(-1deg); }
  
  .photo-placeholder {
    width: 100%;
    aspect-ratio: 1;
    background: var(--paper-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Special Elite', monospace;
    font-size: 0.45rem;
    color: var(--ink-ghost);
  }
  
  .photo-caption {
    font-family: 'Special Elite', monospace;
    font-size: 0.55rem;
    color: var(--ink-faded);
    text-align: center;
    margin-top: 6px;
  }
  
  .glued-photo::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 8px;
    width: 14px;
    height: 14px;
    background: rgba(200, 180, 140, 0.6);
    transform: rotate(-5deg);
  }
  
  .materials {
    font-family: 'Courier Prime', monospace;
    font-size: 0.65rem;
    color: var(--ink-faded);
    text-align: center;
    line-height: 1.8;
  }
  
  /* Order Form */
  .order-page h2 {
    font-family: 'Cinzel', serif;
    font-size: 0.8rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 14px;
    color: var(--ink-black);
  }
  
  .form-box {
    border: 1px solid var(--ink-faded);
    padding: 6px 8px;
    margin-bottom: 8px;
    position: relative;
    background: rgba(255,255,255,0.3);
  }
  
  .box-num {
    position: absolute;
    top: -6px;
    left: -6px;
    width: 14px;
    height: 14px;
    background: var(--ink-black);
    color: var(--paper-base);
    font-family: 'Special Elite', monospace;
    font-size: 0.45rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .box-label {
    position: absolute;
    top: -6px;
    left: 12px;
    background: var(--paper-base);
    padding: 0 4px;
    font-family: 'Special Elite', monospace;
    font-size: 0.45rem;
    color: var(--ink-ghost);
    text-transform: uppercase;
  }
  
  .form-input {
    width: 100%;
    border: none;
    background: transparent;
    font-family: 'Special Elite', monospace;
    font-size: 0.7rem;
    color: var(--ink-black);
    padding: 2px 0;
    outline: none;
  }
  
  .form-input::placeholder {
    color: var(--ink-ghost);
    opacity: 0.4;
  }
  
  .size-options {
    display: flex;
    gap: 12px;
    justify-content: center;
    padding: 2px 0;
  }
  
  .size-opt {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
  }
  
  .size-box {
    width: 12px;
    height: 12px;
    border: 1px solid var(--ink-faded);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.5rem;
  }
  
  .size-box.checked::after { content: '✕'; }
  
  .size-label {
    font-family: 'Special Elite', monospace;
    font-size: 0.6rem;
    color: var(--ink-faded);
  }
  
  .official-box {
    border: 1px dashed var(--ink-ghost);
    padding: 10px;
    margin-top: 12px;
    text-align: center;
    opacity: 0.4;
  }
  
  .seal-circle {
    width: 30px;
    height: 30px;
    border: 1px dashed var(--ink-ghost);
    border-radius: 50%;
    margin: 0 auto 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.35rem;
  }
  
  .official-text {
    font-family: 'Special Elite', monospace;
    font-size: 0.4rem;
    letter-spacing: 0.1em;
    color: var(--ink-ghost);
  }
  
  /* Signature */
  .sig-section {
    margin-top: 12px;
    text-align: center;
  }
  
  .sig-disclaimer {
    font-family: 'IM Fell English', serif;
    font-style: italic;
    font-size: 0.6rem;
    color: var(--ink-faded);
    margin-bottom: 8px;
    line-height: 1.5;
  }
  
  .sig-canvas-wrap {
    border: 1px solid var(--ink-faded);
    background: rgba(255,255,255,0.5);
    height: 50px;
    position: relative;
    margin-bottom: 4px;
  }
  
  .sig-x {
    position: absolute;
    left: 6px;
    bottom: 6px;
    font-family: 'Special Elite', monospace;
    font-size: 0.7rem;
    color: var(--ink-ghost);
  }
  
  .sig-line {
    position: absolute;
    bottom: 10px;
    left: 18px;
    right: 10px;
    height: 1px;
    background: var(--ink-ghost);
  }
  
  .order-btn {
    width: 100%;
    padding: 10px;
    margin-top: 12px;
    background: var(--ink-black);
    color: var(--paper-base);
    border: none;
    font-family: 'Cinzel', serif;
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    cursor: pointer;
  }
  
  .order-btn:hover { opacity: 0.9; }
  
  /* Index */
  .index {
    position: fixed;
    top: 16px;
    left: 16px;
    z-index: 1000;
    background: var(--paper-aged);
    border: 1px solid var(--ink-ghost);
    padding: 10px 14px;
    font-family: 'Special Elite', monospace;
    font-size: 0.55rem;
    color: var(--ink-faded);
    box-shadow: 2px 2px 8px rgba(0,0,0,0.3);
  }
  
  .index h3 {
    font-family: 'Cinzel', serif;
    font-size: 0.55rem;
    letter-spacing: 0.1em;
    margin-bottom: 6px;
    color: var(--ink-black);
    border-bottom: 1px solid var(--ink-ghost);
    padding-bottom: 4px;
    text-transform: uppercase;
  }
  
  .index ul { list-style: none; }
  
  .index li {
    padding: 3px 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }
  
  .index li:hover { color: var(--ink-black); }
  .index li.active { color: var(--seal-red); }
  
  .page-num {
    font-size: 0.45rem;
    color: var(--ink-ghost);
  }
  
  /* Nav hint */
  .nav-hint {
    position: fixed;
    bottom: 16px;
    right: 16px;
    font-family: 'Special Elite', monospace;
    font-size: 0.55rem;
    color: var(--paper-aged);
    opacity: 0.5;
  }
`;

export default function DantesCatalog() {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  
  const spreads = [
    { left: 'cover', right: 'inside' },
    { left: 'cowboy', right: 'details' },
    { left: 'order1', right: 'order2' },
  ];
  
  const goToSpread = (idx) => {
    setCurrentSpread(Math.max(0, Math.min(spreads.length - 1, idx)));
  };
  
  const nextPage = () => goToSpread(currentSpread + 1);
  const prevPage = () => goToSpread(currentSpread - 1);
  
  return (
    <>
      <style>{styles}</style>
      <div className="catalog-wrapper" onClick={nextPage}>
        
        {/* Index */}
        <nav className="index" onClick={e => e.stopPropagation()}>
          <h3>Contents</h3>
          <ul>
            <li className={currentSpread === 0 ? 'active' : ''} onClick={() => goToSpread(0)}>
              <span>Cover</span><span className="page-num">1</span>
            </li>
            <li className={currentSpread === 1 ? 'active' : ''} onClick={() => goToSpread(1)}>
              <span>The Highwayman</span><span className="page-num">2</span>
            </li>
            <li className={currentSpread === 2 ? 'active' : ''} onClick={() => goToSpread(2)}>
              <span>Order Form</span><span className="page-num">3</span>
            </li>
          </ul>
        </nav>
        
        <div className="book-container">
          <div className="book">
            
            {/* Spread 0: Cover + Inside */}
            {currentSpread === 0 && (
              <>
                <div className="page left">
                  <div className="page-front cover">
                    <div className="brand-name">Dante's Outlaw Supply</div>
                    <div className="tagline">Garments for the Discerning Rider</div>
                    <div className="volume">Vol. I — MMXXVI</div>
                  </div>
                </div>
                <div className="page right">
                  <div className="page-front" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <p style={{ fontFamily: "'IM Fell English', serif", fontStyle: 'italic', color: 'var(--ink-ghost)', fontSize: '0.7rem', lineHeight: 1.8 }}>
                      For those who ride between worlds.
                    </p>
                    <p style={{ fontFamily: "'Special Elite', monospace", fontSize: '0.5rem', color: 'var(--ink-ghost)', marginTop: '16px', opacity: 0.6 }}>
                      Est. in the year of our Lord, 2026<br/>San Francisco, California
                    </p>
                  </div>
                </div>
              </>
            )}
            
            {/* Spread 1: Cowboy + Details */}
            {currentSpread === 1 && (
              <>
                <div className="page left">
                  <div className="page-front cowboy-page">
                    <div className="illustration-frame">
                      <span className="illustration-placeholder">[ COWBOY ILLUSTRATION ]</span>
                    </div>
                    <div className="verse">"What you carry will be weighed."</div>
                    <div className="price">$299.00</div>
                  </div>
                </div>
                <div className="page right">
                  <div className="page-front details-page">
                    <h2>The Highwayman</h2>
                    <div className="photo-grid">
                      <div className="glued-photo">
                        <div className="photo-placeholder">FRONT VIEW</div>
                        <div className="photo-caption">Front View</div>
                      </div>
                      <div className="glued-photo">
                        <div className="photo-placeholder">BACK VIEW</div>
                        <div className="photo-caption">Vertebrae Stitching</div>
                      </div>
                      <div className="glued-photo">
                        <div className="photo-placeholder">DETAIL</div>
                        <div className="photo-caption">Diamond Chain</div>
                      </div>
                      <div className="glued-photo">
                        <div className="photo-placeholder">YOKE</div>
                        <div className="photo-caption">Wheat Symbol</div>
                      </div>
                    </div>
                    <div className="materials">
                      Black Cavalry Twill · Contrast Stitching<br/>
                      Black Suede Collar · Western Yoke
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {/* Spread 2: Order Form */}
            {currentSpread === 2 && (
              <>
                <div className="page left" onClick={e => e.stopPropagation()}>
                  <div className="page-front order-page">
                    <h2>Order Form</h2>
                    
                    <div className="form-box">
                      <span className="box-num">1</span>
                      <span className="box-label">Item</span>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Special Elite', monospace", fontSize: '0.65rem' }}>
                        <span>THE HIGHWAYMAN</span>
                        <span>$299.00</span>
                      </div>
                    </div>
                    
                    <div className="form-box">
                      <span className="box-num">2</span>
                      <span className="box-label">Size</span>
                      <div className="size-options">
                        {['S', 'M', 'L', 'XL'].map(s => (
                          <label key={s} className="size-opt" onClick={() => setSelectedSize(s)}>
                            <div className={`size-box ${selectedSize === s ? 'checked' : ''}`}></div>
                            <span className="size-label">{s}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="form-box">
                      <span className="box-num">3</span>
                      <span className="box-label">Qty</span>
                      <input className="form-input" defaultValue="1" />
                    </div>
                    
                    <div className="form-box">
                      <span className="box-num">4</span>
                      <span className="box-label">Name</span>
                      <input className="form-input" placeholder="Last, First" />
                    </div>
                    
                    <div className="form-box">
                      <span className="box-num">5</span>
                      <span className="box-label">Address</span>
                      <input className="form-input" placeholder="Street, City, State ZIP" />
                    </div>
                    
                    <div className="official-box">
                      <div className="seal-circle"><span>SEAL</span></div>
                      <span className="official-text">OFFICIAL USE ONLY</span>
                    </div>
                  </div>
                </div>
                <div className="page right" onClick={e => e.stopPropagation()}>
                  <div className="page-front order-page">
                    
                    <div className="form-box">
                      <span className="box-num">6</span>
                      <span className="box-label">Card Number</span>
                      <input className="form-input" placeholder="•••• •••• •••• ••••" />
                    </div>
                    
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <div className="form-box" style={{ flex: 1 }}>
                        <span className="box-num">7</span>
                        <span className="box-label">Exp</span>
                        <input className="form-input" placeholder="MM/YY" />
                      </div>
                      <div className="form-box" style={{ flex: 1 }}>
                        <span className="box-label">CVV</span>
                        <input className="form-input" placeholder="•••" />
                      </div>
                    </div>
                    
                    <div className="sig-section">
                      <div className="sig-disclaimer">
                        I assume responsibility for this article and<br/>
                        acknowledge its properties upon receipt.
                      </div>
                      <div className="sig-canvas-wrap">
                        <span className="sig-x">✕</span>
                        <div className="sig-line"></div>
                      </div>
                    </div>
                    
                    <button className="order-btn">Order</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="nav-hint">Click to turn page</div>
      </div>
    </>
  );
}
