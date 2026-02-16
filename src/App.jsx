import React, { useState, useRef, useCallback, useEffect, forwardRef } from 'react'
import HTMLFlipBook from 'react-pageflip'

// =============================================================================
// PAGE COMPONENTS
// =============================================================================

// Each page must be wrapped in forwardRef for react-pageflip
const Page = forwardRef(({ children, className = '' }, ref) => {
  return (
    <div className={`page ${className}`} ref={ref}>
      {children}
    </div>
  )
})

// Cover Page
const CoverPage = forwardRef((props, ref) => {
  return (
    <div className="page hard cover-page" ref={ref}>
      {/* Wax seal as visual anchor */}
      <img 
        src="/Copy_of_Dantes_Graphics_ps_zip_-_3.png" 
        alt="Seal"
        style={{
          width: '80px',
          height: '80px',
          objectFit: 'contain',
          marginBottom: '24px',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
        }}
      />
      <div className="brand-name">Dante's Outlaw Supply</div>
      <div className="tagline">Garments for the Discerning Rider</div>
      <div className="volume">Vol. I — MMXXVI</div>
    </div>
  )
})

// Inside Cover / Blank
const InsideCover = forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontFamily: "'IM Fell English', serif",
        fontStyle: 'italic',
        color: 'var(--ink-ghost)',
        fontSize: 'var(--type-sm)',
        textAlign: 'center',
        lineHeight: 1.8
      }}>
        <div>
          <p style={{ marginBottom: '1em' }}>For those who ride between worlds.</p>
          <p style={{ fontSize: '0.65rem', opacity: 0.6 }}>
            Est. in the year of our Lord, 2026<br/>
            San Francisco, California
          </p>
        </div>
      </div>
    </div>
  )
})

// Cowboy Illustration Page
const CowboyPage = forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content cowboy-page">
        {/* The illustration container - breathing animation */}
        <div className="cinemagraph-container">
          <div className="cowboy-illustration breathing">
            <img 
              src="/IMG_1147.jpeg" 
              alt="The Highwayman" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'sepia(15%) contrast(1.1)',
              }}
            />
          </div>
        </div>
        
        {/* Thematic verse - weighing/scales motif */}
        <div className="verse-text">
          "What you carry will be weighed."
        </div>
        
        {/* Price - weighted with intention */}
        <div className="price-display">$299.00</div>
      </div>
    </div>
  )
})

// Details Page with Glued Photos
const DetailsPage = forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content details-page">
        <h2>The Highwayman</h2>
        
        <div className="photo-grid">
          {/* Front view - full jacket */}
          <div className="glued-photo">
            <div className="photo-crop">
              <img 
                src="/IMG_0851.jpeg" 
                alt="Front View"
              />
            </div>
            <div className="photo-caption">Front View</div>
          </div>
          
          {/* Back view - spine detail */}
          <div className="glued-photo">
            <div className="photo-crop">
              <img 
                src="/IMG_0852.jpeg" 
                alt="Back View - Spine Detail"
              />
            </div>
            <div className="photo-caption">Vertebrae Stitching</div>
          </div>
          
          {/* Front detail crop - diamond chain placket */}
          <div className="glued-photo">
            <div className="photo-crop zoom">
              <img 
                src="/IMG_0851.jpeg" 
                alt="Diamond Chain Detail"
                style={{ objectPosition: 'center 40%' }}
              />
            </div>
            <div className="photo-caption">Diamond Chain</div>
          </div>
          
          {/* Back detail crop - wheat symbol at yoke */}
          <div className="glued-photo">
            <div className="photo-crop zoom">
              <img 
                src="/IMG_0852.jpeg" 
                alt="Wheat Symbol"
                style={{ objectPosition: 'center 8%' }}
              />
            </div>
            <div className="photo-caption">Wheat Symbol</div>
          </div>
        </div>
        
        <div className="materials-list">
          Black Cavalry Twill · Contrast Stitching<br/>
          Black Suede Collar · Western Yoke
        </div>
      </div>
    </div>
  )
})

// Order Form Front
const OrderFormFront = forwardRef(({ formData, setFormData, onTurn }, ref) => {
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }
  
  const handleSizeSelect = (size) => {
    setFormData(prev => ({ ...prev, size }))
  }
  
  return (
    <div className="page" ref={ref}>
      <div className="page-content order-form-page">
        <h2>Order Form</h2>
        
        {/* Box 1: Item (pre-filled) */}
        <div className="form-box">
          <span className="box-number">1</span>
          <span className="box-label">Item</span>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            fontFamily: "'Special Elite', monospace",
            fontSize: 'var(--type-sm)',
            color: 'var(--ink-black)'
          }}>
            <span>THE HIGHWAYMAN</span>
            <span>$299.00</span>
          </div>
        </div>
        
        {/* Box 2: Size */}
        <div className="form-box">
          <span className="box-number">2</span>
          <span className="box-label">Size</span>
          <div className="size-options">
            {['S', 'M', 'L', 'XL'].map(size => (
              <label key={size} className="size-option" onClick={() => handleSizeSelect(size)}>
                <div className={`size-checkbox ${formData.size === size ? 'checked' : ''}`}></div>
                <span className="size-label">{size}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Box 3: Quantity */}
        <div className="form-box">
          <span className="box-number">3</span>
          <span className="box-label">Qty</span>
          <input 
            type="text" 
            className="form-input"
            value={formData.qty}
            onChange={(e) => handleChange('qty', e.target.value)}
            placeholder="1"
          />
        </div>
        
        {/* Box 4: Name */}
        <div className="form-box inline-group">
          <div style={{ position: 'relative' }}>
            <span className="box-number">4a</span>
            <span className="box-label">Last Name</span>
            <input 
              type="text" 
              className="form-input"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <span className="box-label">First Name</span>
            <input 
              type="text" 
              className="form-input"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
            />
          </div>
        </div>
        
        {/* Box 5: Address */}
        <div className="form-box">
          <span className="box-number">5a</span>
          <span className="box-label">Street Address</span>
          <input 
            type="text" 
            className="form-input"
            value={formData.street}
            onChange={(e) => handleChange('street', e.target.value)}
          />
        </div>
        
        <div className="form-box inline-group">
          <div style={{ position: 'relative', flex: 2 }}>
            <span className="box-number">5b</span>
            <span className="box-label">City</span>
            <input 
              type="text" 
              className="form-input"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
            />
          </div>
          <div style={{ position: 'relative', flex: 1 }}>
            <span className="box-label">State</span>
            <input 
              type="text" 
              className="form-input"
              value={formData.state}
              onChange={(e) => handleChange('state', e.target.value)}
              maxLength={2}
            />
          </div>
          <div style={{ position: 'relative', flex: 1 }}>
            <span className="box-label">ZIP</span>
            <input 
              type="text" 
              className="form-input"
              value={formData.zip}
              onChange={(e) => handleChange('zip', e.target.value)}
            />
          </div>
        </div>
        
        {/* Official Use Only - where wax seal will be physically placed */}
        <div className="official-use">
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '1px dashed var(--ink-ghost)',
            borderRadius: '50%',
            margin: '0 auto 6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '0.4rem' }}>SEAL</span>
          </div>
          <span>OFFICIAL USE ONLY</span>
        </div>
        
        {/* Turn prompt */}
        <div className="turn-prompt" onClick={onTurn}>
          TURN OVER →
        </div>
      </div>
    </div>
  )
})

// Order Form Back - Payment & Signature
const OrderFormBack = forwardRef(({ formData, setFormData, signatureRef, onOrder, isFormValid }, ref) => {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasSignature, setHasSignature] = useState(false)
  
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }
  
  const toggleBillingSame = () => {
    setFormData(prev => ({ ...prev, billingSame: !prev.billingSame }))
  }
  
  // Signature canvas handlers
  const getCoords = (e) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    }
  }
  
  const startDrawing = (e) => {
    e.preventDefault()
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const coords = getCoords(e)
    
    ctx.beginPath()
    ctx.moveTo(coords.x, coords.y)
    ctx.strokeStyle = '#1a1612'
    ctx.lineWidth = 1.5
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    
    setIsDrawing(true)
  }
  
  const draw = (e) => {
    if (!isDrawing) return
    e.preventDefault()
    
    const ctx = canvasRef.current.getContext('2d')
    const coords = getCoords(e)
    
    ctx.lineTo(coords.x, coords.y)
    ctx.stroke()
    setHasSignature(true)
  }
  
  const stopDrawing = () => {
    if (isDrawing) {
      canvasRef.current.getContext('2d').closePath()
      setIsDrawing(false)
      
      // Store signature data
      if (signatureRef) {
        signatureRef.current = canvasRef.current.toDataURL()
      }
    }
  }
  
  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      // Set canvas resolution
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * 2
      canvas.height = rect.height * 2
      
      const ctx = canvas.getContext('2d')
      ctx.scale(2, 2)
    }
  }, [])
  
  const formComplete = isFormValid && hasSignature
  
  return (
    <div className="page" ref={ref}>
      <div className="page-content order-form-page">
        {/* Billing same checkbox */}
        <label className="billing-same" onClick={toggleBillingSame}>
          <div className={`checkbox ${formData.billingSame ? 'checked' : ''}`}></div>
          <span>Billing address same as shipping</span>
        </label>
        
        {/* Billing fields (greyed if same) */}
        <div className={`billing-fields ${formData.billingSame ? 'disabled' : ''}`}>
          <div className="form-box">
            <span className="box-number">7a</span>
            <span className="box-label">Billing Street</span>
            <input 
              type="text" 
              className="form-input"
              value={formData.billingStreet}
              onChange={(e) => handleChange('billingStreet', e.target.value)}
              disabled={formData.billingSame}
            />
          </div>
          
          <div className="form-box inline-group">
            <div style={{ position: 'relative', flex: 2 }}>
              <span className="box-label">City</span>
              <input 
                type="text" 
                className="form-input"
                value={formData.billingCity}
                onChange={(e) => handleChange('billingCity', e.target.value)}
                disabled={formData.billingSame}
              />
            </div>
            <div style={{ position: 'relative', flex: 1 }}>
              <span className="box-label">State</span>
              <input 
                type="text" 
                className="form-input"
                value={formData.billingState}
                onChange={(e) => handleChange('billingState', e.target.value)}
                disabled={formData.billingSame}
                maxLength={2}
              />
            </div>
            <div style={{ position: 'relative', flex: 1 }}>
              <span className="box-label">ZIP</span>
              <input 
                type="text" 
                className="form-input"
                value={formData.billingZip}
                onChange={(e) => handleChange('billingZip', e.target.value)}
                disabled={formData.billingSame}
              />
            </div>
          </div>
        </div>
        
        {/* Payment fields */}
        <div className="form-box">
          <span className="box-number">8</span>
          <span className="box-label">Card Number</span>
          <input 
            type="text" 
            className="form-input"
            value={formData.cardNumber}
            onChange={(e) => handleChange('cardNumber', e.target.value.replace(/\D/g, '').slice(0, 16))}
            placeholder="•••• •••• •••• ••••"
          />
        </div>
        
        <div className="form-box inline-group">
          <div style={{ position: 'relative' }}>
            <span className="box-number">9a</span>
            <span className="box-label">Exp. Date</span>
            <input 
              type="text" 
              className="form-input"
              value={formData.expDate}
              onChange={(e) => handleChange('expDate', e.target.value)}
              placeholder="MM/YY"
              maxLength={5}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <span className="box-label">Security Code</span>
            <input 
              type="text" 
              className="form-input"
              value={formData.cvv}
              onChange={(e) => handleChange('cvv', e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder="•••"
            />
          </div>
        </div>
        
        {/* Signature section - the weighing moment */}
        <div className="signature-section">
          <div className="signature-disclaimer">
            By my hand, I accept the weight of this garment<br/>
            and all it carries upon my shoulders.
          </div>
          
          <div className="signature-canvas-wrapper">
            <canvas 
              ref={canvasRef}
              className="signature-canvas"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />
            <span className="signature-x">✕</span>
            <div className="signature-line"></div>
          </div>
        </div>
        
        {/* Order button - silent validation */}
        <button 
          className={`order-button ${formComplete ? '' : 'disabled'}`}
          onClick={formComplete ? onOrder : undefined}
        >
          Place Order
        </button>
      </div>
    </div>
  )
})

// Back Cover
const BackCover = forwardRef((props, ref) => {
  return (
    <div className="page hard cover-page" ref={ref}>
      <div style={{ 
        fontFamily: "'Cinzel', serif",
        fontSize: 'var(--type-xs)',
        letterSpacing: '0.2em',
        opacity: 0.5
      }}>
        DANTE'S OUTLAW SUPPLY
      </div>
    </div>
  )
})

// =============================================================================
// MAIN APP COMPONENT
// =============================================================================

function App() {
  const bookRef = useRef(null)
  const signatureRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 400, height: 550 })
  
  // Form state
  const [formData, setFormData] = useState({
    size: '',
    qty: '1',
    lastName: '',
    firstName: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    billingSame: true,
    billingStreet: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  })
  
  // Index items
  const indexItems = [
    { label: 'Cover', page: 0 },
    { label: 'The Highwayman', page: 2 },
    { label: 'Details', page: 3 },
    { label: 'Order Form', page: 4 },
  ]
  
  // Calculate book dimensions based on viewport
  useEffect(() => {
    const updateDimensions = () => {
      const vh = window.innerHeight
      const vw = window.innerWidth
      
      // Book should be ~80% of viewport height, maintain aspect ratio
      const maxHeight = vh * 0.85
      const maxWidth = vw * 0.42 // Single page width (half of spread)
      
      // Aspect ratio roughly 3:4
      let height = maxHeight
      let width = height * 0.72
      
      // If too wide, constrain by width
      if (width > maxWidth) {
        width = maxWidth
        height = width / 0.72
      }
      
      setDimensions({ width: Math.floor(width), height: Math.floor(height) })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])
  
  // Navigate to page
  const goToPage = useCallback((pageNum) => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flip(pageNum)
    }
  }, [])
  
  // Handle page turn from order form
  const handleTurnToBack = useCallback(() => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext()
    }
  }, [])
  
  // Validate form (silent - just returns boolean)
  const isFormValid = useCallback(() => {
    const required = ['size', 'lastName', 'firstName', 'street', 'city', 'state', 'zip', 'cardNumber', 'expDate', 'cvv']
    return required.every(field => formData[field] && formData[field].trim() !== '')
  }, [formData])
  
  // Handle order submission
  const handleOrder = useCallback(() => {
    // In production: process payment, send signature to backend
    console.log('Order submitted:', formData)
    console.log('Signature:', signatureRef.current)
    setShowConfirmation(true)
  }, [formData])
  
  // Track current page
  const onFlip = useCallback((e) => {
    setCurrentPage(e.data)
  }, [])
  
  return (
    <div className="catalog-wrapper">
      {/* Floating Index */}
      <nav className="catalog-index">
        <h3>Contents</h3>
        <ul>
          {indexItems.map((item, i) => (
            <li 
              key={i}
              className={currentPage >= item.page && (i === indexItems.length - 1 || currentPage < indexItems[i + 1]?.page) ? 'active' : ''}
              onClick={() => goToPage(item.page)}
            >
              <span>{item.label}</span>
              <span className="page-num">{item.page + 1}</span>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* The Catalog */}
      <HTMLFlipBook
        ref={bookRef}
        width={dimensions.width}
        height={dimensions.height}
        size="fixed"
        minWidth={300}
        maxWidth={600}
        minHeight={400}
        maxHeight={800}
        showCover={true}
        mobileScrollSupport={false}
        onFlip={onFlip}
        className="catalog-book"
        style={{ margin: '0 auto' }}
        maxShadowOpacity={0.3}
        drawShadow={true}
        flippingTime={800}
        usePortrait={false}
        startZIndex={0}
        autoSize={false}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
      >
        {/* Page 0: Cover */}
        <CoverPage />
        
        {/* Page 1: Inside Cover */}
        <InsideCover />
        
        {/* Page 2: Cowboy Illustration */}
        <CowboyPage />
        
        {/* Page 3: Details */}
        <DetailsPage />
        
        {/* Page 4: Order Form Front */}
        <OrderFormFront 
          formData={formData}
          setFormData={setFormData}
          onTurn={handleTurnToBack}
        />
        
        {/* Page 5: Order Form Back */}
        <OrderFormBack 
          formData={formData}
          setFormData={setFormData}
          signatureRef={signatureRef}
          onOrder={handleOrder}
          isFormValid={isFormValid()}
        />
        
        {/* Page 6: Back Cover */}
        <BackCover />
      </HTMLFlipBook>
      
      {/* Order Confirmation */}
      {showConfirmation && (
        <div className="confirmation-overlay" onClick={() => setShowConfirmation(false)}>
          <div className="confirmation-content">
            <h2>Order Received</h2>
            <p>Your Highwayman will arrive sealed and documented.</p>
            <p style={{ 
              fontFamily: "'IM Fell English', serif", 
              fontStyle: 'italic', 
              fontSize: '0.7rem', 
              opacity: 0.6, 
              marginTop: '16px' 
            }}>
              "What you carry will be weighed."
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
