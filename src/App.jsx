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
      <p className="colophon">
        Est. in the year of our Lord, 2026<br/>
        San Francisco, California
      </p>
    </div>
  </div>
))

// =============================================================================
// PRODUCT PAGE - The Highwayman with floating illustration
// =============================================================================

const ProductPage = forwardRef((props, ref) => (
  <div className="page paper" ref={ref}>
    <div className="product-page">
      {/* Header */}
      <div className="product-header">
        <span className="product-name">THE HIGHWAYMAN</span>
        <span className="product-price">$299</span>
      </div>
      
      {/* Illustration */}
      <div className="product-illustration-wrap">
        <img 
          src="/cowboy.svg" 
          alt="The Highwayman"
          className="product-illustration"
        />
      </div>
      
      {/* Footer */}
      <p className="product-verse">"What you carry will be weighed."</p>
      <p className="product-specs">
        Black Cavalry Twill · Western Yoke · Contrast Stitching
      </p>
    </div>
  </div>
))

// =============================================================================
// DETAILS PAGE - Tech pack photos, glued-in look
// =============================================================================

const DetailsPage = forwardRef((props, ref) => (
  <div className="page paper" ref={ref}>
    <div className="details-page">
      <h2 className="details-title">CONSTRUCTION</h2>
      
      <div className="spec-block">
        <p className="spec-item"><span>SHELL</span> 100% Cotton Cavalry Twill</p>
        <p className="spec-item"><span>COLOR</span> Black (PANTONE 19-4006 TCX)</p>
        <p className="spec-item"><span>COLLAR</span> Black Suede</p>
        <p className="spec-item"><span>STITCH</span> Contrast Thread, Saddle Pattern</p>
        <p className="spec-item"><span>BACK</span> Vertebrae Spine Detail</p>
        <p className="spec-item"><span>YOKE</span> Wheat Symbol (Famine)</p>
        <p className="spec-item"><span>PLACKET</span> Diamond Chain Stitch</p>
      </div>
      
      <div className="sizing-note">
        <p>Sized true to chest measurement.</p>
        <p>S (36") · M (40") · L (44") · XL (48")</p>
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
