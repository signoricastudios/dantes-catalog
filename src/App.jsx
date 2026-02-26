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
          style={{
            shapeOutside: 'polygon(0% 0%, 28% 0%, 30% 1%, 38% 2%, 42% 3%, 44% 4%, 42% 5%, 38% 6%, 36% 7%, 34% 8%, 36% 9%, 38% 10%, 40% 11%, 42% 12%, 40% 14%, 38% 16%, 36% 18%, 38% 20%, 40% 22%, 42% 24%, 44% 26%, 46% 27%, 44% 28%, 40% 29%, 36% 30%, 34% 31%, 32% 32%, 30% 34%, 28% 36%, 26% 38%, 28% 40%, 30% 42%, 32% 43%, 34% 44%, 32% 45%, 30% 46%, 29% 48%, 30% 50%, 32% 52%, 36% 54%, 40% 56%, 42% 58%, 40% 60%, 36% 62%, 34% 64%, 32% 66%, 30% 68%, 28% 70%, 26% 72%, 24% 74%, 24% 76%, 26% 78%, 28% 80%, 30% 82%, 32% 84%, 30% 86%, 26% 88%, 24% 90%, 26% 92%, 30% 94%, 32% 96%, 26% 98%, 22% 100%, 0% 100%)',
            shapeMargin: '2px'
          }}
        />
        <p className="product-copy">
          DANTE'S OUTLAW SUPPLY is proud to present the finest riding jacket
          ever offered through this catalogue. Fashioned after patterns
          secured from the cavalry workshops of Fort Huachuca, and improved
          upon by our master cutter in San Francisco. We invite the
          discerning rider to examine every detail herein described.
        </p>
        <p className="product-copy">
          A jacket of superior construction, designed for those
          who ride between worlds. Cut from the finest black
          Cavalry Twill with contrast stitching in the Western
          Saddle Pattern throughout. Every stitch placed by the
          hand of a craftsman who learned his trade on the
          frontier, where a poorly-sewn seam could mean the
          difference between warmth and ruin.
        </p>
        <p className="product-copy">
          The back panel features our signature vertebrae
          detail — hand-stitched in contrast thread to resemble
          a spine made visible. Black suede collar. Diamond
          chain stitch placket. Wheat symbol at the yoke — mark
          of the Famine rider. These details are not ornament;
          they are the language of the trail, read by those
          who know what to look for.
        </p>
        <p className="product-copy">
          Every seam is double-felled for durability on the
          trail. The saddle-pattern stitching, rendered in
          bone-white thread, runs continuous from shoulder
          to cuff — a hallmark of authentic Western craft
          dating to the earliest cavalry workshops of the
          Arizona Territory. We import our thread from
          the same New England mills that supplied the
          Union cavalry, spun tight and waxed for weather.
        </p>
        <p className="product-copy">
          The shell is one hundred percent cotton cavalry
          twill, woven at fourteen ounces to the yard —
          a cloth so dense it turns a light rain without
          treatment. The suede collar is cut from a single
          hide, matched for grain and color. We accept no
          seconds; every panel is inspected under lamp
          before cutting begins.
        </p>
        <p className="product-copy">
          Offered in four measured sizes, each cut to permit
          a full range of motion in the saddle. The collar
          folds to a sharp point; the placket runs straight
          and true. This is not a garment of fashion — it is
          a garment of purpose, built for those who ride hard
          and answer to no man. The armscye is set forward
          for mounted posture; the back yoke is widened
          two inches over civilian patterns.
        </p>
        <p className="product-copy">
          Pair with the Dante's riding boot and broadcloth
          trouser for the complete outfit. Each jacket ships
          in a waxed canvas sleeve, sealed with the Dante's
          mark. Inquire within for custom sizing or
          monogramming at additional charge. Our workshop
          maintains patterns for over two hundred chest
          measurements, ensuring a fit that is both precise
          and forgiving in the manner required by hard use.
        </p>
        <p className="product-copy">
          Available only through authorized Dante's agents
          or by direct correspondence. Each piece is numbered
          and registered in the Famine ledger. Satisfaction
          guaranteed or return within thirty days for full
          credit toward any item in the catalogue. We have
          outfitted riders from Tombstone to Deadwood, and
          not one has returned a garment for want of quality.
        </p>
        <p className="product-copy">
          Sizes correspond to chest measurement in inches.
          Allow one inch of ease for layering. The collar
          stands one and three-quarter inches; the body length
          measures twenty-six inches at center back for size
          Medium. Sleeve length is adjusted to quarter-inch
          precision at the factory. Shoulder slope is drafted
          to three standard grades; specify erect, regular,
          or sloping when ordering by mail.
        </p>
        <p className="product-copy">
          Care: brush clean with horsehair. Do not launder.
          Spot treat with damp cloth. Store flat or hang on
          broad wooden hanger. Re-wax collar and cuffs as
          needed with Dante's Saddle Compound, sold
          separately (see page 7). With proper attention, this
          jacket will outlast its owner and pass to the next
          rider in the line — as all good garments should.
        </p>
        <p className="product-copy">
          The Highwayman is crafted in our San Francisco workshop from patterns drafted by hand. No two cuts are identical. We maintain a record of every jacket's measurements in the Famine ledger — proof that each garment was made for its rider alone. Write for our full-line catalogue of boots, trousers, and accessories. Mention this volume for priority dispatch.
        </p>
        <p className="product-copy">
          The buttons are forged from blackened brass, each
          one cast in a mould taken from an original
          cavalry issue of 1874. The lining is left raw — no
          silk, no satin — so the cloth may breathe as its
          maker intended. A man who trusts his coat trusts
          his life to the thread that holds it.
        </p>
        <p className="product-copy">
          We guarantee every Highwayman against defect in
          material and workmanship for the natural life of
          the garment. Should any seam fail, any button
          loosen, any panel wear through before its time,
          return the jacket to our workshop and we will
          repair or replace it without charge or question.
          This is the Dante's promise, kept since our founding.
        </p>
        <p className="product-copy">
          Our workshop foreman inspects each finished jacket
          under lamp before it leaves the cutting table. Every
          seam is tested under load; every button is set twice.
          The Highwayman has been worn by cattlemen, lawmen,
          and riders of every stripe from the Pecos to the
          Platte — and not one has been returned for failure
          of construction. We keep a ledger of every jacket
          sold, and we stand behind each entry.
        </p>
        <p className="product-copy">
          Order by post or through any authorized Dante's
          agent west of the Mississippi. Enclose payment in
          full or arrange credit through our San Francisco
          office. Allow six to eight weeks for delivery by
          express coach. Rush orders honored at additional
          charge — inquire by telegraph. Specify chest, sleeve,
          and shoulder measurements with every order.
        </p>
        <p className="product-copy">
          The thread count per inch exceeds forty-two in both warp
          and weft — a density unmatched by any competitor in the
          Western territories. Each jacket requires eleven yards of
          thread for the saddle-pattern stitching alone. Our cutters
          work by gas-lamp, tracing patterns that have not been
          altered since the original cavalry specifications were
          obtained in 1874. No machine touches the garment until
          the final pressing.
        </p>
        <p className="product-copy">
          Notation for dealers and outfitters: wholesale terms
          available on orders of six or more. Catalogue pricing
          is net; no further discount applies. Freight charges
          assessed per the current express schedule. All claims
          must be filed within ten days of receipt. Dante's
          reserves the right to substitute materials of equal
          or superior quality when stocks are depleted. Write
          to our San Francisco office for current availability.
        </p>
        <div className="product-spec-list">
          <p><span>SHELL</span> 100% Cotton Cavalry Twill</p>
          <p><span>COLOR</span> Black (PANTONE 19-4006)</p>
          <p><span>COLLAR</span> Black Suede</p>
          <p><span>STITCH</span> Contrast, Saddle Pattern</p>
          <p><span>BACK</span> Vertebrae Spine Detail</p>
          <p><span>YOKE</span> Wheat Symbol — Famine</p>
          <p><span>PLACKET</span> Diamond Chain Stitch</p>
        </div>
      </div>

      {/* Accessory illustrations */}
      <div className="product-accessories">
        <div className="product-accessory">
          <img src="/Copy_of_Dantes_Graphics_ps_zip_-_3.png" alt="" />
          <span>DANTE'S SEAL</span>
        </div>
        <div className="product-accessory">
          <img src="/IMG_1147_clean.png" alt="" style={{maxHeight: '90px', opacity: 0.85}} />
          <span>DETAIL VIEW</span>
        </div>
        <div className="product-accessory">
          <img src="/Copy_of_Dantes_Graphics_ps_zip_-_3.png" alt="" />
          <span>AUTHENTICITY</span>
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
          src="/cowboy.png"
          alt="The Desperado"
          className="product-illustration"
          style={{
            width: '58%',
            height: '96%',
            shapeOutside: 'polygon(0% 0%, 48% 0%, 50% 1%, 55% 2%, 58% 3%, 55% 4%, 50% 5%, 45% 6%, 42% 7%, 40% 8%, 38% 9%, 36% 10%, 38% 11%, 45% 12%, 55% 13%, 65% 14%, 72% 15%, 78% 16%, 80% 17%, 78% 18%, 72% 19%, 65% 20%, 58% 21%, 54% 22%, 52% 23%, 50% 24%, 48% 25%, 46% 26%, 48% 27%, 50% 28%, 52% 29%, 53% 30%, 54% 32%, 55% 34%, 54% 36%, 52% 38%, 54% 40%, 56% 42%, 55% 44%, 52% 46%, 50% 48%, 48% 50%, 46% 52%, 44% 54%, 43% 56%, 42% 58%, 44% 60%, 46% 62%, 44% 64%, 42% 66%, 40% 68%, 38% 70%, 40% 72%, 42% 74%, 44% 76%, 42% 78%, 40% 80%, 38% 82%, 40% 84%, 42% 86%, 40% 88%, 36% 90%, 34% 92%, 38% 94%, 42% 96%, 36% 98%, 30% 100%, 0% 100%)',
            shapeMargin: '4px'
          }}
        />
        <p className="product-copy">
          A riding coat of unusual length and purpose. Cut
          to fall below the knee, the Desperado shields its
          wearer from dust, rain, and the gaze of lawmen.
          Waxed cotton canvas, ten-ounce weight, hand-finished
          in our San Francisco workshop. This is the duster
          that made the frontier legend — worn by men who rode
          long and answered to nothing but the horizon.
        </p>
        <p className="product-copy">
          Storm cape at the shoulders doubles as a rain
          shield. Deep walking vent at the rear allows a
          full stride — or a clean mount. Interior carry
          pocket, left breast. Blackened brass snap closures
          from throat to hem. The cape is cut wide enough
          to cover the arms in a downpour yet lies flat
          against the back in dry weather, adding not an
          ounce of unnecessary bulk.
        </p>
        <p className="product-copy">
          The canvas is waxed by hand in our San Francisco
          workshop — each coat brushed in three layers until
          the surface holds a muted sheen that repels water
          and wind alike. In time, the finish wears to reveal
          the raw cotton beneath, telling the story of every
          mile traveled. We source our canvas from the same
          Carolina mills that once supplied wagon covers to
          the overland freight companies.
        </p>
        <p className="product-copy">
          Thirteen blackened brass snaps run throat to hem,
          each one forged and tumbled to resist corrosion in
          salt air and desert dust. The storm cape doubles as
          a rain shield; the walking vent permits a clean mount.
          A coat for men who do not come back the same way
          they left. Each snap is tested under a fifty-pound
          pull before it leaves the forge.
        </p>
        <p className="product-copy">
          The duster is cut from a single bolt of ten-ounce
          waxed cotton canvas — no piecing, no patchwork. Every
          panel is laid out by hand on our cutting table, chalk-
          marked against patterns that have not changed since
          our founding year. The seams are felled twice and
          pressed flat with a hot iron so they lie smooth against
          the body and shed water at every join.
        </p>
        <p className="product-copy">
          Sized generously to fit over a jacket or vest. The
          duster pairs with any garment in the Famine collection.
          Ships folded in a canvas field bag with the Dante's mark
          branded into the flap. Allow four to six weeks for
          delivery by overland post. Custom lengths available upon
          request; inquire by mail. We carry patterns from
          thirty-six to fifty-two inches at the chest.
        </p>
        <p className="product-copy">
          No two dusters wear alike. The wax takes on the
          character of its owner — each crease and fade a
          record of the roads traveled. Sold exclusively
          through the Dante's catalogue. Returns accepted
          within thirty days; include original field bag.
          We have seen coats return to our workshop after
          twenty years of hard use, and the cloth still sound.
        </p>
        <p className="product-copy">
          The interior is left unlined by design — no silk,
          no flannel, nothing to trap moisture against the
          body. The raw seams are sealed with beeswax to
          prevent fraying. A single breast pocket, concealed
          behind the left panel, is sized to hold papers,
          currency, or a small-caliber sidearm. The pocket
          mouth is reinforced with leather binding.
        </p>
        <p className="product-copy">
          Measurements for size Medium: body length
          forty-four inches, chest fifty inches, sleeve
          thirty-four inches from shoulder. The storm cape
          extends twelve inches from collar in all directions.
          Walking vent runs eighteen inches from hem. Each
          size is drafted independently — not merely graded
          from a single pattern — to ensure correct proportion
          at every measurement.
        </p>
        <p className="product-copy">
          Our workshop foreman examines every finished duster
          under lamp before it ships. The snaps are tested,
          the seams inspected, the wax finish checked for
          evenness. We keep a ledger entry for each coat —
          date of completion, cutter's name, and the chest
          measurement to which it was built. This is
          the Dante's standard, and we do not waver from it.
        </p>
        <p className="product-copy">
          We guarantee the Desperado against defect in
          material and workmanship for the natural life of
          the garment. Should any seam open, any snap fail,
          any panel wear through before its time, return
          the coat to our workshop and we shall repair it
          without charge. This promise has held since our
          founding, and no rider has yet found its limit.
        </p>
        <p className="product-copy">
          Care: re-wax annually with Dante's Canvas
          Compound. Brush dry mud with stiff bristle. Hang
          to dry after rain — do not fold wet. The wax will
          soften and redistribute with body heat. Repairs
          available by post; include return postage. Order
          through any authorized Dante's agent or by direct
          correspondence to our San Francisco office.
        </p>
        <div className="product-spec-list">
          <p><span>SHELL</span> Waxed Cotton Canvas (10oz)</p>
          <p><span>COLOR</span> Burnt Umber (PANTONE 19-1217)</p>
          <p><span>LINING</span> Unlined / Raw Seam</p>
          <p><span>CAPE</span> Storm Cape, Double-Layer</p>
          <p><span>VENT</span> Center Back Walking Vent</p>
          <p><span>CLOSURE</span> Blackened Brass Snaps</p>
          <p><span>LENGTH</span> Below Knee, Full Duster</p>
        </div>
      </div>

      {/* Accessory illustrations */}
      <div className="product-accessories">
        <div className="product-accessory">
          <img src="/Copy_of_Dantes_Graphics_ps_zip_-_3.png" alt="" />
          <span>DANTE'S SEAL</span>
        </div>
        <div className="product-accessory">
          <img src="/cowboy.png" alt="" style={{maxHeight: '75px', opacity: 0.75}} />
          <span>DETAIL VIEW</span>
        </div>
        <div className="product-accessory">
          <img src="/Copy_of_Dantes_Graphics_ps_zip_-_3.png" alt="" />
          <span>AUTHENTICITY</span>
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
