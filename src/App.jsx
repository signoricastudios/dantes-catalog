import React, { useState, useRef, useEffect, forwardRef } from 'react'
import HTMLFlipBook from 'react-pageflip'

// =============================================================================
// COVER - Black with wax seal
// =============================================================================

const CoverPage = forwardRef((props, ref) => (
  <div className="page cover" ref={ref}>
    <div className="cover-inner">
      <img 
        src="/Copy_of_Dantes_Graphics_ps_zip_-_3.png" 
        alt=""
        className="cover-seal"
      />
      <h1 className="cover-title">Dante's</h1>
      <h2 className="cover-subtitle">Outlaw Supply</h2>
      <p className="cover-tagline">Garments for the Discerning Rider</p>
      <span className="cover-volume">Vol. I — MMXXVI</span>
    </div>
  </div>
))

// =============================================================================
// INSIDE COVER - Epigraph
// =============================================================================

const InsideCover = forwardRef((props, ref) => (
  <div className="page paper" ref={ref}>
    <div className="inside-cover">
      <p className="epigraph">For those who ride between worlds.</p>
      <div className="inside-cover-ornament">&#10045;</div>
      <p className="colophon">
        Est. in the year of our Lord, 2026<br/>
        San Francisco, California
      </p>
      <span className="page-number">i</span>
    </div>
  </div>
))

// =============================================================================
// PRODUCT PAGE - The Highwayman (Gambler-style catalog layout)
// =============================================================================

const ProductPage = forwardRef((props, ref) => (
  <div className="page paper" ref={ref}>
    <div className="product-page">
      {/* Catalog header line */}
      <div className="product-catalog-line">
        <span className="product-item-no">No. 001</span>
        <span className="product-collection">FAMINE COLLECTION · VOL. I</span>
      </div>

      {/* Title → Tagline → Price (stacked vertically) */}
      <div className="product-title-bar">
        <h2 className="product-name">THE HIGHWAYMAN</h2>
        <div className="product-tagline">A Cavalry Jacket for the Discerning Rider</div>
        <div className="product-price">
          <span className="product-price-dollar">$</span>
          <span className="product-price-amount">299</span>
        </div>
      </div>

      <hr className="catalog-rule" />

      {/* Main content — float-based text wrap */}
      <div className="product-content">
        <img
          src="/IMG_1147_clean.png"
          alt="The Highwayman"
          className="product-illustration"
        />
        <p className="product-copy">
          A jacket of superior construction, designed for those
          who ride between worlds. Cut from the finest black
          Cavalry Twill with contrast stitching in the Western
          Saddle Pattern throughout.
        </p>
        <p className="product-copy">
          The back panel features our signature vertebrae
          detail — hand-stitched in contrast thread to resemble
          a spine made visible. Black suede collar. Diamond
          chain stitch placket. Wheat symbol at the yoke — mark
          of the Famine rider.
        </p>
        <div className="product-ornament">&middot; &middot; &middot;</div>
        <hr className="product-spec-divider" />
        <div className="product-spec-list">
          <p><span>SHELL</span> 100% Cotton Cavalry Twill</p>
          <p><span>COLOR</span> Black (PANTONE 19-4006)</p>
          <p><span>COLLAR</span> Black Suede</p>
          <p><span>STITCH</span> Contrast, Saddle Pattern</p>
          <p><span>BACK</span> Vertebrae Spine Detail</p>
          <p><span>YOKE</span> Wheat Symbol — Famine</p>
          <p><span>PLACKET</span> Diamond Chain Stitch</p>
        </div>
        <p className="product-sizing">S (36") · M (40") · L (44") · XL (48")</p>
      </div>

      {/* Bottom verse */}
      <div className="product-footer">
        <hr className="catalog-rule" />
        <div className="product-footer-row">
          <p className="product-verse">"What you carry will be weighed."</p>
          <div className="product-seal">
            <img src="/Copy_of_Dantes_Graphics_ps_zip_-_3.png" alt="" className="product-seal-img" />
          </div>
        </div>
      </div>
      <span className="page-number">1</span>
    </div>
  </div>
))

// =============================================================================
// DETAILS PAGE - Construction with tech pack photos (right side of spread)
// =============================================================================

const DetailsPage = forwardRef((props, ref) => (
  <div className="page paper" ref={ref}>
    <div className="details-page">
      <div className="details-header">
        <h2 className="details-title">CONSTRUCTION</h2>
        <span className="details-subtitle">Specifications & Technical Detail</span>
      </div>

      <hr className="catalog-rule" />

      {/* Tech pack photos side by side */}
      <div className="details-photos">
        <div className="details-photo-wrap">
          <img src="/IMG_0851.jpeg" alt="Front view" className="details-photo" />
          <span className="details-photo-label">Fig. A — Front</span>
        </div>
        <div className="details-photo-wrap">
          <img src="/IMG_0852.jpeg" alt="Back view" className="details-photo" />
          <span className="details-photo-label">Fig. B — Back</span>
        </div>
      </div>

      <hr className="catalog-rule" />

      {/* Construction callouts */}
      <div className="details-callouts">
        <p className="callout-item"><span className="callout-letter">A.</span> Diamond chain stitch placket with contrast thread</p>
        <p className="callout-item"><span className="callout-letter">B.</span> Vertebrae spine detail, hand-stitched, center back</p>
        <p className="callout-item"><span className="callout-letter">C.</span> Wheat symbol at yoke — mark of Famine</p>
        <p className="callout-item"><span className="callout-letter">D.</span> Western saddle-pattern contrast stitching</p>
        <p className="callout-item"><span className="callout-letter">E.</span> Black suede collar, folded point</p>
      </div>

      {/* Sizing */}
      <div className="details-sizing">
        <span className="details-sizing-label">SIZING</span>
        <span>Sized true to chest measurement</span>
        <div className="details-size-grid">
          <span>S — 36"</span>
          <span>M — 40"</span>
          <span>L — 44"</span>
          <span>XL — 48"</span>
        </div>
      </div>
      <span className="page-number">2</span>
    </div>
  </div>
))

// =============================================================================
// PRODUCT PAGE - The Desperado (Duster Coat)
// =============================================================================

const ProductPageDesperado = forwardRef((props, ref) => (
  <div className="page paper" ref={ref}>
    <div className="product-page">
      {/* Catalog header line */}
      <div className="product-catalog-line">
        <span className="product-item-no">No. 002</span>
        <span className="product-collection">FAMINE COLLECTION · VOL. I</span>
      </div>

      {/* Title → Tagline → Price (stacked vertically) */}
      <div className="product-title-bar">
        <h2 className="product-name">THE DESPERADO</h2>
        <div className="product-tagline">A Full-Length Duster for the Open Road</div>
        <div className="product-price">
          <span className="product-price-dollar">$</span>
          <span className="product-price-amount">399</span>
        </div>
      </div>

      <hr className="catalog-rule" />

      {/* Main content — float-based text wrap */}
      <div className="product-content">
        <img
          src="/cowboy.svg"
          alt="The Desperado"
          className="product-illustration"
        />
        <p className="product-copy">
          A riding coat of unusual length and purpose. Cut
          to fall below the knee, the Desperado shields its
          wearer from dust, rain, and the gaze of lawmen.
          Waxed cotton canvas, ten-ounce weight, hand-finished.
        </p>
        <p className="product-copy">
          Storm cape at the shoulders doubles as a rain
          shield. Deep walking vent at the rear allows a
          full stride — or a clean mount. Interior carry
          pocket, left breast. Blackened brass snap closures
          from throat to hem.
        </p>
        <div className="product-ornament">&middot; &middot; &middot;</div>
        <hr className="product-spec-divider" />
        <div className="product-spec-list">
          <p><span>SHELL</span> Waxed Cotton Canvas (10oz)</p>
          <p><span>COLOR</span> Burnt Umber (PANTONE 19-1217)</p>
          <p><span>LINING</span> Unlined / Raw Seam</p>
          <p><span>CAPE</span> Storm Cape, Double-Layer</p>
          <p><span>VENT</span> Center Back Walking Vent</p>
          <p><span>CLOSURE</span> Blackened Brass Snaps</p>
          <p><span>LENGTH</span> Below Knee, Full Duster</p>
        </div>
        <p className="product-sizing">S (38") · M (42") · L (46") · XL (50")</p>
      </div>

      {/* Bottom verse */}
      <div className="product-footer">
        <hr className="catalog-rule" />
        <div className="product-footer-row">
          <p className="product-verse">"He who walks in dust shall vanish into it."</p>
          <div className="product-seal">
            <img src="/Copy_of_Dantes_Graphics_ps_zip_-_3.png" alt="" className="product-seal-img" />
          </div>
        </div>
      </div>
      <span className="page-number">3</span>
    </div>
  </div>
))

// =============================================================================
// DETAILS PAGE - The Desperado Construction
// =============================================================================

const DetailsPageDesperado = forwardRef((props, ref) => (
  <div className="page paper" ref={ref}>
    <div className="details-page">
      <div className="details-header">
        <h2 className="details-title">CONSTRUCTION</h2>
        <span className="details-subtitle">The Desperado — Technical Detail</span>
      </div>

      <hr className="catalog-rule" />

      {/* Illustration in lieu of tech pack photos */}
      <div className="details-photos">
        <div className="details-photo-wrap">
          <img src="/cowboy.svg" alt="Full-length view" className="details-photo" />
          <span className="details-photo-label">Fig. A — Full Length</span>
        </div>
        <div className="details-photo-wrap">
          <img src="/cowboy.svg" alt="Detail view" className="details-photo" />
          <span className="details-photo-label">Fig. B — Detail</span>
        </div>
      </div>

      <hr className="catalog-rule" />

      {/* Construction callouts */}
      <div className="details-callouts">
        <p className="callout-item"><span className="callout-letter">A.</span> Waxed cotton canvas, 10oz, hand-brushed finish</p>
        <p className="callout-item"><span className="callout-letter">B.</span> Storm cape at shoulders, double-layer, rain shield</p>
        <p className="callout-item"><span className="callout-letter">C.</span> Blackened brass snap closures, throat to hem</p>
        <p className="callout-item"><span className="callout-letter">D.</span> Center back walking vent, 18" deep</p>
        <p className="callout-item"><span className="callout-letter">E.</span> Interior carry pocket, left breast, concealed</p>
      </div>

      {/* Sizing */}
      <div className="details-sizing">
        <span className="details-sizing-label">SIZING</span>
        <span>Sized true to chest measurement</span>
        <div className="details-size-grid">
          <span>S — 38"</span>
          <span>M — 42"</span>
          <span>L — 46"</span>
          <span>XL — 50"</span>
        </div>
      </div>
      <span className="page-number">4</span>
    </div>
  </div>
))

// =============================================================================
// ORDER FORM - Page 1
// =============================================================================

const OrderFormPage1 = forwardRef(({ formData, setFormData }, ref) => {
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }
  
  return (
    <div className="page paper" ref={ref}>
      <div className="order-page">
        <h2 className="order-title">ORDER FORM</h2>
        
        {/* Item */}
        <div className="form-row">
          <label className="form-label">ITEM</label>
          <div className="form-value">
            <span>The Highwayman</span>
            <span className="form-price">$299.00</span>
          </div>
        </div>
        
        {/* Size */}
        <div className="form-row">
          <label className="form-label">SIZE</label>
          <div className="size-boxes">
            {['S', 'M', 'L', 'XL'].map(size => (
              <button 
                key={size}
                className={`size-box ${formData.size === size ? 'selected' : ''}`}
                onClick={() => handleChange('size', size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        {/* Quantity */}
        <div className="form-row">
          <label className="form-label">QTY</label>
          <input 
            type="text"
            className="form-input small"
            value={formData.qty}
            onChange={(e) => handleChange('qty', e.target.value)}
          />
        </div>
        
        {/* Name */}
        <div className="form-row split">
          <div>
            <label className="form-label">LAST NAME</label>
            <input 
              type="text"
              className="form-input"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">FIRST NAME</label>
            <input 
              type="text"
              className="form-input"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
            />
          </div>
        </div>
        
        {/* Address */}
        <div className="form-row">
          <label className="form-label">STREET ADDRESS</label>
          <input 
            type="text"
            className="form-input"
            value={formData.street}
            onChange={(e) => handleChange('street', e.target.value)}
          />
        </div>
        
        <div className="form-row triple">
          <div className="flex-2">
            <label className="form-label">CITY</label>
            <input 
              type="text"
              className="form-input"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">STATE</label>
            <input 
              type="text"
              className="form-input"
              value={formData.state}
              onChange={(e) => handleChange('state', e.target.value.toUpperCase().slice(0, 2))}
            />
          </div>
          <div>
            <label className="form-label">ZIP</label>
            <input 
              type="text"
              className="form-input"
              value={formData.zip}
              onChange={(e) => handleChange('zip', e.target.value.replace(/\D/g, '').slice(0, 5))}
            />
          </div>
        </div>
        
        <div className="order-page-bottom">
          <span className="page-number">5</span>
          <p className="page-turn-hint">TURN OVER →</p>
        </div>
      </div>
    </div>
  )
})

// =============================================================================
// ORDER FORM - Page 2 (Payment)
// =============================================================================

const OrderFormPage2 = forwardRef((props, ref) => {
  return (
    <div className="page paper" ref={ref}>
      <div className="order-page">
        <h2 className="order-title">HOW TO ORDER</h2>

        <div className="how-to-order">
          <p className="order-intro">To place your order, contact us:</p>

          <div className="contact-method">
            <span className="contact-label">EMAIL</span>
            <span className="contact-value">orders@dantesoutlaw.com</span>
          </div>

          <div className="contact-method">
            <span className="contact-label">INSTAGRAM</span>
            <span className="contact-value">@dantesoutlaw</span>
          </div>

          <div className="contact-method">
            <span className="contact-label">ONLINE</span>
            <a className="contact-value contact-link" href="#" onClick={(e) => e.preventDefault()}>
              Visit our online store
            </a>
          </div>
        </div>

        <div className="seal-placeholder">
          <span>OFFICIAL USE ONLY</span>
        </div>
        <span className="page-number">6</span>
      </div>
    </div>
  )
})

// =============================================================================
// BACK COVER
// =============================================================================

const BackCover = forwardRef((props, ref) => (
  <div className="page cover" ref={ref}>
    <div className="back-cover">
      <span>DANTE'S OUTLAW SUPPLY</span>
    </div>
  </div>
))

// =============================================================================
// MAIN APP
// =============================================================================

function App() {
  const bookRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 400, height: 550 })
  
  const [formData, setFormData] = useState({
    size: '',
    qty: '1',
    lastName: '',
    firstName: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  })
  
  // Responsive sizing
  useEffect(() => {
    const resize = () => {
      const vh = window.innerHeight
      const vw = window.innerWidth
      const maxH = vh * 0.92
      const maxW = vw * 0.50
      let h = maxH
      let w = h * 0.72
      if (w > maxW) { w = maxW; h = w / 0.72 }
      setDimensions({ width: Math.floor(w), height: Math.floor(h) })
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <div className="catalog-wrapper">
      <HTMLFlipBook
        ref={bookRef}
        width={dimensions.width}
        height={dimensions.height}
        size="fixed"
        minWidth={280}
        maxWidth={750}
        minHeight={380}
        maxHeight={1000}
        showCover={true}
        mobileScrollSupport={false}
        className="catalog-book"
        maxShadowOpacity={0.25}
        drawShadow={true}
        flippingTime={700}
        usePortrait={false}
        autoSize={false}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
      >
        <CoverPage />
        <InsideCover />
        <ProductPage />
        <DetailsPage />
        <ProductPageDesperado />
        <DetailsPageDesperado />
        <OrderFormPage1 formData={formData} setFormData={setFormData} />
        <OrderFormPage2 />
        <BackCover />
      </HTMLFlipBook>
      
    </div>
  )
}

export default App
