import React, { useState, useRef, useCallback, useEffect, forwardRef } from 'react'
import HTMLFlipBook from 'react-pageflip'

// =============================================================================
// PAGE WRAPPER
// =============================================================================

const Page = forwardRef(({ children, className = '' }, ref) => (
  <div className={`page ${className}`} ref={ref}>
    {children}
  </div>
))

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
        
        <p className="page-turn-hint">TURN OVER →</p>
      </div>
    </div>
  )
})

// =============================================================================
// ORDER FORM - Page 2 (Payment)
// =============================================================================

const OrderFormPage2 = forwardRef(({ formData, setFormData, onOrder }, ref) => {
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }
  
  const isComplete = formData.size && formData.lastName && formData.firstName && 
    formData.street && formData.city && formData.state && formData.zip &&
    formData.cardNumber && formData.expDate && formData.cvv
  
  return (
    <div className="page paper" ref={ref}>
      <div className="order-page">
        <h2 className="order-title">PAYMENT</h2>
        
        {/* Card Number */}
        <div className="form-row">
          <label className="form-label">CARD NUMBER</label>
          <input 
            type="text"
            className="form-input"
            value={formData.cardNumber}
            onChange={(e) => {
              const v = e.target.value.replace(/\D/g, '').slice(0, 16)
              const formatted = v.replace(/(\d{4})(?=\d)/g, '$1 ')
              handleChange('cardNumber', formatted)
            }}
            placeholder="•••• •••• •••• ••••"
          />
        </div>
        
        {/* Exp / CVV */}
        <div className="form-row split">
          <div>
            <label className="form-label">EXPIRES</label>
            <input 
              type="text"
              className="form-input"
              value={formData.expDate}
              onChange={(e) => {
                let v = e.target.value.replace(/\D/g, '').slice(0, 4)
                if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2)
                handleChange('expDate', v)
              }}
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="form-label">SECURITY CODE</label>
            <input 
              type="text"
              className="form-input"
              value={formData.cvv}
              onChange={(e) => handleChange('cvv', e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder="•••"
            />
          </div>
        </div>
        
        {/* Attestation */}
        <div className="attestation">
          <p>By placing this order, I accept the weight<br/>of this garment and all it carries.</p>
        </div>
        
        {/* Submit */}
        <button 
          className={`order-btn ${isComplete ? '' : 'disabled'}`}
          onClick={isComplete ? onOrder : undefined}
        >
          PLACE ORDER
        </button>
        
        {/* Seal placeholder for physical orders */}
        <div className="seal-placeholder">
          <span>OFFICIAL USE ONLY</span>
        </div>
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
  const [currentPage, setCurrentPage] = useState(0)
  const [showConfirmation, setShowConfirmation] = useState(false)
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
    cardNumber: '',
    expDate: '',
    cvv: ''
  })
  
  // Responsive sizing
  useEffect(() => {
    const resize = () => {
      const vh = window.innerHeight
      const vw = window.innerWidth
      const maxH = vh * 0.88
      const maxW = vw * 0.42
      let h = maxH
      let w = h * 0.72
      if (w > maxW) { w = maxW; h = w / 0.72 }
      setDimensions({ width: Math.floor(w), height: Math.floor(h) })
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])
  
  const handleOrder = useCallback(() => {
    console.log('Order:', formData)
    setShowConfirmation(true)
  }, [formData])
  
  const onFlip = useCallback((e) => setCurrentPage(e.data), [])
  
  return (
    <div className="catalog-wrapper">
      <HTMLFlipBook
        ref={bookRef}
        width={dimensions.width}
        height={dimensions.height}
        size="fixed"
        minWidth={280}
        maxWidth={600}
        minHeight={380}
        maxHeight={800}
        showCover={true}
        mobileScrollSupport={false}
        onFlip={onFlip}
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
        <OrderFormPage1 formData={formData} setFormData={setFormData} />
        <OrderFormPage2 formData={formData} setFormData={setFormData} onOrder={handleOrder} />
        <BackCover />
      </HTMLFlipBook>
      
      {showConfirmation && (
        <div className="confirmation" onClick={() => setShowConfirmation(false)}>
          <div className="confirmation-box">
            <h2>Order Received</h2>
            <p>Your Highwayman will arrive sealed and documented.</p>
            <p className="confirmation-verse">"What you carry will be weighed."</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
