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
    <div className="inside-cover inside-cover-filled">
      <p className="epigraph">For those who ride between worlds.</p>
      <div className="inside-cover-ornament">&#10045;</div>
      <p className="colophon">
        Est. in the year of our Lord, 2026<br/>
        San Francisco, California
      </p>

      <hr className="inside-cover-rule" />

      <div className="inside-toc">
        <h3 className="inside-toc-title">CONTENTS</h3>
        <div className="toc-entry"><span className="toc-label">Page 1</span><span className="toc-dots"></span><span className="toc-dest">The Highwayman — Cavalry Jacket</span></div>
        <div className="toc-entry"><span className="toc-label">Page 2</span><span className="toc-dots"></span><span className="toc-dest">Construction &amp; Specifications</span></div>
        <div className="toc-entry"><span className="toc-label">Page 3</span><span className="toc-dots"></span><span className="toc-dest">The Desperado — Full-Length Duster</span></div>
        <div className="toc-entry"><span className="toc-label">Page 4</span><span className="toc-dots"></span><span className="toc-dest">Construction &amp; Technical Detail</span></div>
        <div className="toc-entry"><span className="toc-label">Pages 5–6</span><span className="toc-dots"></span><span className="toc-dest">Order Form &amp; Terms</span></div>
      </div>

      <hr className="inside-cover-rule" />

      <div className="inside-editor-note">
        <h3 className="editor-note-title">A NOTE FROM THE WORKSHOP</h3>
        <p className="editor-note-copy">
          This first volume of the <em>Dante's Outlaw Supply</em> catalogue
          presents two garments from our <strong>Famine Collection</strong> —
          each one cut, stitched, and finished by hand in our San Francisco
          workshop. We do not employ machines where a craftsman's hand will
          serve. We do not cut corners where a rider's life may depend on
          the integrity of a seam. Every pattern herein was drafted from
          original cavalry specifications, improved upon through years of
          hard use on the trail. We invite you to examine the work, read the
          details, and judge for yourself whether this is the standard to
          which your wardrobe ought to be held.
        </p>
        <p className="editor-note-sign">
          — <em>The Editors, San Francisco, MMXXVI</em>
        </p>
      </div>

      <div className="inside-cover-ornament">&#10045;</div>
      <p className="inside-cover-footer">
        ALL ITEMS GUARANTEED · SATISFACTION OR FULL CREDIT<br/>
        <em>Catalogue No. 1 · Famine Collection · Limited Printing</em>
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

      {/* Unified content flow — title, price, illustration, and text as one composition */}
      <div className="product-content">
        <h2 className="product-name">THE HIGHWAYMAN</h2>
        <div className="product-tagline">A Cavalry Jacket for the Discerning Rider</div>
        <div className="product-price product-price-float">
          <span className="product-price-dollar">$</span>
          <span className="product-price-amount">299</span>
        </div>
        <p className="product-copy">
          DANTE'S OUTLAW SUPPLY is proud to present <em>the finest riding jacket
          ever offered through this catalogue</em>. Fashioned after patterns
          secured from the <strong>cavalry workshops of Fort Huachuca</strong>, and improved
          upon by our master cutter in San Francisco. We invite the
          discerning rider to examine every detail herein described.
        </p>
        <p className="product-copy">
          A jacket of superior construction, <em>designed for those
          who ride between worlds</em>. Cut from the finest black
          <strong>Cavalry Twill</strong> with contrast stitching in the <strong>Western
          Saddle Pattern</strong> throughout. Every stitch placed by the
          hand of a craftsman who learned his trade on the
          frontier, where <em>a poorly-sewn seam could mean the
          difference between warmth and ruin</em>.
        </p>
        <p className="product-copy">
          The back panel features our signature <strong>vertebrae
          detail</strong> — hand-stitched in contrast thread to resemble
          a spine made visible. <strong>Black suede collar</strong>. <strong>Diamond
          chain stitch placket</strong>. <strong>Wheat symbol</strong> at the yoke — mark
          of the Famine rider. <em>These details are not ornament;
          they are the language of the trail</em>, read by those
          who know what to look for.
        </p>
        <img
          src="/IMG_1147_clean.png"
          alt="The Highwayman"
          className="product-illustration"
          style={{
            shapeOutside: 'url(/IMG_1147_clean.png)'
          }}
        />
        <p className="product-copy">
          Every seam is <strong>double-felled</strong> for durability on the
          trail. The <strong>saddle-pattern stitching</strong>, rendered in
          <strong>bone-white thread</strong>, runs continuous from shoulder
          to cuff — <em>a hallmark of authentic Western craft</em>
          dating to the earliest cavalry workshops of the
          Arizona Territory. We import our thread from
          the same <strong>New England mills</strong> that supplied the
          Union cavalry, spun tight and waxed for weather.
        </p>
        <p className="product-copy">
          The shell is <strong>one hundred percent cotton cavalry
          twill</strong>, woven at <strong>fourteen ounces to the yard</strong> —
          <em>a cloth so dense it turns a light rain without
          treatment</em>. The <strong>suede collar</strong> is cut from a single
          hide, matched for grain and color. We accept no
          seconds; every panel is inspected under lamp
          before cutting begins.
        </p>
        <p className="product-copy">
          Offered in four measured sizes, each cut to permit
          a full range of motion in the saddle. The collar
          folds to a sharp point; the placket runs straight
          and true. <em>This is not a garment of fashion — it is
          a garment of purpose</em>, built for those who ride hard
          and answer to no man. The <strong>armscye</strong> is set forward
          for mounted posture; the <strong>back yoke</strong> is widened
          two inches over civilian patterns.
        </p>
        <p className="product-copy">
          Pair with the <strong>Dante's riding boot</strong> and <strong>broadcloth
          trouser</strong> for the complete outfit. Each jacket ships
          in a <strong>waxed canvas sleeve</strong>, sealed with the Dante's
          mark. Inquire within for custom sizing or
          monogramming at additional charge. Our workshop
          maintains patterns for over two hundred chest
          measurements, <em>ensuring a fit that is both precise
          and forgiving in the manner required by hard use</em>.
        </p>
        <p className="product-copy">
          Available only through <strong>authorized Dante's agents</strong>
          or by direct correspondence. Each piece is numbered
          and registered in the <strong>Famine ledger</strong>. Satisfaction
          guaranteed or return within thirty days for full
          credit toward any item in the catalogue. <em>We have
          outfitted riders from Tombstone to Deadwood</em>, and
          not one has returned a garment for want of quality.
        </p>
        <p className="product-copy">
          Sizes correspond to chest measurement in inches.
          Allow one inch of ease for layering. The collar
          stands <strong>one and three-quarter inches</strong>; the body length
          measures <strong>twenty-six inches at center back</strong> for size
          Medium. Sleeve length is adjusted to <em>quarter-inch
          precision</em> at the factory. Shoulder slope is drafted
          to three standard grades; specify erect, regular,
          or sloping when ordering by mail.
        </p>
        <p className="product-copy">
          Care: brush clean with <strong>horsehair</strong>. Do not launder.
          Spot treat with damp cloth. Store flat or hang on
          broad wooden hanger. Re-wax collar and cuffs as
          needed with <strong>Dante's Saddle Compound</strong>, sold
          separately (see page 7). <em>With proper attention, this
          jacket will outlast its owner and pass to the next
          rider in the line</em> — as all good garments should.
        </p>
        <p className="product-copy">
          The Highwayman is crafted in our <strong>San Francisco workshop</strong> from patterns drafted by hand. <em>No two cuts are identical.</em> We maintain a record of every jacket's measurements in the <strong>Famine ledger</strong> — proof that each garment was made for its rider alone. Write for our full-line catalogue of boots, trousers, and accessories. Mention this volume for priority dispatch.
        </p>
        <p className="product-copy">
          The buttons are forged from <strong>blackened brass</strong>, each
          one cast in a mould taken from an original
          cavalry issue of 1874. The lining is left raw — <em>no
          silk, no satin</em> — so the cloth may breathe as its
          maker intended. <em>A man who trusts his coat trusts
          his life to the thread that holds it.</em>
        </p>
        <p className="product-copy">
          We guarantee every Highwayman against defect in
          material and workmanship <em>for the natural life of
          the garment</em>. Should any seam fail, any button
          loosen, any panel wear through before its time,
          return the jacket to our workshop and we will
          repair or replace it <strong>without charge or question</strong>.
          <em>This is the Dante's promise, kept since our founding.</em>
        </p>
        <p className="product-copy">
          Our workshop foreman inspects each finished jacket
          under lamp before it leaves the cutting table. <em>Every
          seam is tested under load; every button is set twice.</em>
          The Highwayman has been worn by <strong>cattlemen, lawmen,
          and riders of every stripe</strong> from the Pecos to the
          Platte — and not one has been returned for failure
          of construction. We keep a ledger of every jacket
          sold, and <em>we stand behind each entry</em>.
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
          The thread count per inch exceeds <strong>forty-two in both warp
          and weft</strong> — <em>a density unmatched by any competitor in the
          Western territories</em>. Each jacket requires eleven yards of
          thread for the saddle-pattern stitching alone. Our cutters
          work by <strong>gas-lamp</strong>, tracing patterns that have not been
          altered since the original cavalry specifications were
          obtained in 1874. <em>No machine touches the garment until
          the final pressing.</em>
        </p>
        <p className="product-copy">
          <em>Notation for dealers and outfitters</em>: wholesale terms
          available on orders of six or more. Catalogue pricing
          is net; no further discount applies. <strong>Freight charges</strong>
          assessed per the current express schedule. All claims
          must be filed within ten days of receipt. Dante's
          reserves the right to substitute <strong>materials of equal
          or superior quality</strong> when stocks are depleted. Write
          to our San Francisco office for current availability.
        </p>
        <p className="product-specs-inline">
          <strong>SHELL:</strong> 100% Cotton Cavalry Twill. <strong>COLOR:</strong> Black (PANTONE 19-4006). <strong>COLLAR:</strong> Black Suede. <strong>STITCH:</strong> Contrast, Saddle Pattern. <strong>BACK:</strong> Vertebrae Spine Detail. <strong>YOKE:</strong> Wheat Symbol — Famine. <strong>PLACKET:</strong> Diamond Chain Stitch.
        </p>
      </div>

      {/* Accessory illustrations */}
      <div className="product-accessories">
        <div className="product-accessory">
          <img src="/Copy_of_Dantes_Graphics_ps_zip_-_3.png" alt="" />
          <span>DANTE'S SEAL</span>
        </div>
        <div className="product-accessory">
          <img src="/IMG_1147_clean.png" alt="" />
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
        <p className="callout-item"><span className="callout-letter">F.</span> 12-SPI lockstitch throughout; 8-SPI at stress points</p>
        <p className="callout-item"><span className="callout-letter">G.</span> Antique brass shanked buttons, lost-wax cast, each stamped D.O.S.</p>
        <p className="callout-item"><span className="callout-letter">H.</span> Full cotton sateen lining, cut on the bias for drape</p>
        <p className="callout-item"><span className="callout-letter">I.</span> Felled seams double-pressed; bar-tacked at pocket mouth &amp; cuff</p>
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

      {/* Unified content flow — title, price, illustration, and text as one composition */}
      <div className="product-content">
        <h2 className="product-name">THE DESPERADO</h2>
        <div className="product-tagline">A Full-Length Duster for the Open Road</div>
        <div className="product-price product-price-float">
          <span className="product-price-dollar">$</span>
          <span className="product-price-amount">399</span>
        </div>
        <p className="product-copy">
          A riding coat of unusual length and purpose. Cut
          to fall below the knee, <em>the Desperado shields its
          wearer from dust, rain, and the gaze of lawmen</em>.
          <strong>Waxed cotton canvas</strong>, <strong>ten-ounce weight</strong>, hand-finished
          in our San Francisco workshop. This is the duster
          that made the frontier legend — <em>worn by men who rode
          long and answered to nothing but the horizon</em>.
        </p>
        <p className="product-copy">
          <strong>Storm cape</strong> at the shoulders doubles as a rain
          shield. Deep <strong>walking vent</strong> at the rear allows a
          full stride — or a clean mount. <strong>Interior carry
          pocket</strong>, left breast. <strong>Blackened brass snap closures</strong>
          from throat to hem. The cape is cut wide enough
          to cover the arms in a downpour yet <em>lies flat
          against the back in dry weather</em>, adding not an
          ounce of unnecessary bulk.
        </p>
        <p className="product-copy">
          The canvas is <strong>waxed by hand</strong> in our San Francisco
          workshop — each coat brushed in <strong>three layers</strong> until
          the surface holds <em>a muted sheen that repels water
          and wind alike</em>. In time, the finish wears to reveal
          the raw cotton beneath, <em>telling the story of every
          mile traveled</em>. We source our canvas from the same
          <strong>Carolina mills</strong> that once supplied wagon covers to
          the overland freight companies.
        </p>
        <img
          src="/cowboy.png"
          alt="The Desperado"
          className="product-illustration product-illustration-wide"
          style={{
            shapeOutside: 'url(/cowboy.png)'
          }}
        />
        <p className="product-copy">
          Thirteen <strong>blackened brass snaps</strong> run throat to hem,
          each one forged and tumbled to resist corrosion in
          salt air and desert dust. The storm cape doubles as
          a rain shield; the walking vent permits a clean mount.
          <em>A coat for men who do not come back the same way
          they left.</em> Each snap is tested under a <strong>fifty-pound
          pull</strong> before it leaves the forge.
        </p>
        <p className="product-copy">
          The duster is cut from a <strong>single bolt of ten-ounce
          waxed cotton canvas</strong> — no piecing, no patchwork. Every
          panel is laid out by hand on our cutting table, chalk-
          marked against patterns that have not changed since
          our founding year. The seams are <strong>felled twice</strong> and
          pressed flat with a <strong>hot iron</strong> so <em>they lie smooth against
          the body and shed water at every join</em>.
        </p>
        <p className="product-copy">
          Sized generously to fit over a jacket or vest. The
          duster pairs with any garment in the <strong>Famine collection</strong>.
          Ships folded in a <strong>canvas field bag</strong> with the Dante's mark
          branded into the flap. Allow four to six weeks for
          delivery by overland post. <em>Custom lengths available upon
          request</em>; inquire by mail. We carry patterns from
          thirty-six to fifty-two inches at the chest.
        </p>
        <p className="product-copy">
          <em>No two dusters wear alike.</em> The wax takes on the
          character of its owner — <em>each crease and fade a
          record of the roads traveled</em>. Sold exclusively
          through the Dante's catalogue. Returns accepted
          within thirty days; include original field bag.
          We have seen coats return to our workshop after
          <strong>twenty years of hard use</strong>, and the cloth still sound.
        </p>
        <p className="product-copy">
          The interior is left <strong>unlined by design</strong> — <em>no silk,
          no flannel, nothing to trap moisture against the
          body</em>. The raw seams are sealed with <strong>beeswax</strong> to
          prevent fraying. A single breast pocket, concealed
          behind the left panel, is sized to hold papers,
          currency, or a small-caliber sidearm. The pocket
          mouth is reinforced with <strong>leather binding</strong>.
        </p>
        <p className="product-copy">
          Measurements for size Medium: body length
          <strong>forty-four inches</strong>, chest <strong>fifty inches</strong>, sleeve
          <strong>thirty-four inches</strong> from shoulder. The storm cape
          extends twelve inches from collar in all directions.
          Walking vent runs eighteen inches from hem. <em>Each
          size is drafted independently</em> — not merely graded
          from a single pattern — to ensure correct proportion
          at every measurement.
        </p>
        <p className="product-copy">
          Our workshop foreman examines every finished duster
          under lamp before it ships. <em>The snaps are tested,
          the seams inspected, the wax finish checked for
          evenness.</em> We keep a <strong>ledger entry</strong> for each coat —
          date of completion, cutter's name, and the chest
          measurement to which it was built. <em>This is
          the Dante's standard, and we do not waver from it.</em>
        </p>
        <p className="product-copy">
          We guarantee the Desperado against defect in
          material and workmanship <em>for the natural life of
          the garment</em>. Should any seam open, any snap fail,
          any panel wear through before its time, return
          the coat to our workshop and we shall repair it
          <strong>without charge</strong>. <em>This promise has held since our
          founding, and no rider has yet found its limit.</em>
        </p>
        <p className="product-copy">
          Care: re-wax annually with <strong>Dante's Canvas
          Compound</strong>. Brush dry mud with <strong>stiff bristle</strong>. Hang
          to dry after rain — <em>do not fold wet</em>. The wax will
          soften and redistribute with body heat. Repairs
          available by post; include return postage. Order
          through any <strong>authorized Dante's agent</strong> or by direct
          correspondence to our San Francisco office.
        </p>
        <p className="product-copy">
          The <strong>storm cape</strong> is cut from a separate panel of the
          same bolt, matched for weight and grain. It is
          attached at the <strong>shoulder yoke</strong> with a double row of
          stitching — <em>one visible, one concealed</em> — so that the
          cape may bear its own weight in a soaking rain
          without pulling at the collar. The leading edge is
          turned and <strong>bar-tacked</strong> at intervals of two inches to
          prevent the wind from catching beneath. <em>Riders who
          have crossed the Staked Plains in a norther will
          appreciate this detail above all others.</em> The cape
          extends fourteen inches from the neckline and
          falls in a clean drape over the upper arms.
        </p>
        <p className="product-copy">
          <em>Notation for agents and dealers</em>: the Desperado is
          offered at <strong>wholesale terms</strong> on orders of four or more
          coats. Specify measurements for each coat individually;
          we do not cut to standard blocks. <strong>Freight is assessed</strong>
          per the current express schedule — <em>heavy canvas ships
          at double the catalogue rate</em>. All claims must reach
          our office within fourteen days of receipt. We reserve
          the right to substitute <strong>materials of equal or superior
          quality</strong> when stocks run short. <em>Our current bolt of
          Carolina canvas will supply orders through the end of
          this quarter; write early to ensure your allotment.</em>
        </p>
        <p className="product-specs-inline">
          <strong>SHELL:</strong> Waxed Cotton Canvas (10oz). <strong>COLOR:</strong> Burnt Umber (PANTONE 19-1217). <strong>LINING:</strong> Unlined / Raw Seam. <strong>CAPE:</strong> Storm Cape, Double-Layer. <strong>VENT:</strong> Center Back Walking Vent. <strong>CLOSURE:</strong> Blackened Brass Snaps. <strong>LENGTH:</strong> Below Knee, Full Duster.
        </p>
      </div>

      {/* Accessory illustrations */}
      <div className="product-accessories">
        <div className="product-accessory">
          <img src="/Copy_of_Dantes_Graphics_ps_zip_-_3.png" alt="" />
          <span>DANTE'S SEAL</span>
        </div>
        <div className="product-accessory">
          <img src="/cowboy.png" alt="" />
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
        <p className="callout-item"><span className="callout-letter">F.</span> Triple-waxed flat-felled seams; beeswax-sealed raw edges</p>
        <p className="callout-item"><span className="callout-letter">G.</span> Blackened brass snaps, 50-lb pull-tested, tumble-finished</p>
        <p className="callout-item"><span className="callout-letter">H.</span> Unlined body; raw seam construction per original 1880s pattern</p>
        <p className="callout-item"><span className="callout-letter">I.</span> Bar-tacked reinforcement at cape join, vent apex &amp; pocket mouth</p>
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
        
        {/* Custom sizing & measurement notes */}
        <div className="order-form-notes">
          <p className="order-form-note-line"><strong>CUSTOM SIZING:</strong> Non-standard measurements accommodated at no additional charge. Supply chest, sleeve, and body length with order. Allow two additional weeks for custom work.</p>
          <p className="order-form-note-line" style={{marginTop: '4px'}}><strong>IMPORTANT — MEASUREMENT INSTRUCTIONS:</strong> Measure over a shirt, arms at sides. Chest: fullest point, tape level. Sleeve: center back of neck to wrist, arm slightly bent. Errors in measurement are the responsibility of the purchaser.</p>
          <p className="order-form-note-promo" style={{marginTop: '6px'}}>Order both garments and receive complimentary <strong>Dante's Canvas Compound</strong> (4 oz. tin) — our proprietary beeswax &amp; linseed formula for field re-waterproofing. A $24 value, included with dual orders only.</p>
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
      <div className="order-page order-page-dense">
        <h2 className="order-title">HOW TO ORDER</h2>

        <div className="order-instructions">
          <div className="order-section">
            <h4 className="order-section-title">BY POST</h4>
            <p className="order-section-copy">
              Complete the order form on the preceding page. Enclose payment in full
              and post to: <strong>Dante's Outlaw Supply, 42 Montgomery Street,
              San Francisco, California 94104</strong>. Include your name, shipping address,
              item number, size, and quantity. Print clearly in ink.
              Orders received without full payment will be held until remittance arrives.
            </p>
          </div>

          <div className="order-section">
            <h4 className="order-section-title">BY TELEGRAPH OR EMAIL</h4>
            <p className="order-section-copy">
              Wire orders accepted via Western Union, addressed DANTES SF.
              Include item, size, and full name. Payment must follow by post within
              seven days or the order will be released. Electronic correspondence:
              <strong> orders@dantesoutlaw.com</strong>. Direct message: <strong>@dantesoutlaw</strong> on Instagram.
            </p>
          </div>

          <div className="order-section">
            <h4 className="order-section-title">ACCEPTED PAYMENT</h4>
            <p className="order-section-copy">
              Postal money order (preferred). Bank draft drawn on any U.S. bank.
              Personal cheque — allow ten days for clearance before shipment.
              Currency at sender's risk; we recommend registered post. Payment
              processor for card transactions available at our online store.
              No C.O.D. shipments. All prices are in U.S. dollars, net.
            </p>
          </div>

          <div className="order-section">
            <h4 className="order-section-title">SHIPPING &amp; DELIVERY</h4>
            <p className="order-section-copy">
              All orders ship from our San Francisco workshop. Allow <strong>six to
              eight weeks</strong> for standard delivery by overland express. Rush
              orders honored at additional charge of $15.00 — allow two to three
              weeks. Freight charges assessed by weight and distance per the
              current express schedule. We ship to all U.S. states and territories.
              Foreign orders: write for rates.
            </p>
          </div>

          <div className="order-section">
            <h4 className="order-section-title">RETURNS &amp; EXCHANGES</h4>
            <p className="order-section-copy">
              Returns accepted within <strong>thirty days</strong> of receipt for full
              credit toward any item in the catalogue. Garments must be unworn,
              in original packaging, with tags attached. Exchanges for size
              processed at no additional charge — include a note specifying
              the new size. Return postage is the responsibility of the buyer.
              Defective goods replaced without charge; see our guarantee.
            </p>
          </div>

          <div className="order-section">
            <h4 className="order-section-title">SIZE GUIDE</h4>
            <p className="order-section-copy">
              Measure the chest at its fullest point, arms relaxed at sides.
              Allow <strong>one inch of ease</strong> for layering. If between sizes,
              order the larger. Specify shoulder slope (erect, regular, or sloping)
              for mail orders. Sleeve length measured from shoulder point to wrist.
              Custom sizing available at $25.00 surcharge — include all measurements.
            </p>
          </div>

          <div className="order-section">
            <h4 className="order-section-title">TERMS &amp; CONDITIONS</h4>
            <p className="order-section-copy">
              All goods are guaranteed against defect in material and workmanship
              for the natural life of the garment. Dante's reserves the right
              to substitute materials of equal or superior quality when stocks
              are depleted. Catalogue prices subject to change without notice.
              Wholesale terms on application for orders of six or more. All
              claims must be filed within ten days of receipt. This catalogue
              supersedes all prior editions.
            </p>
          </div>

          <div className="order-page-tagline">
            <div className="inside-cover-ornament">&#10045;</div>
            <p className="order-tagline-text">
              <em>Built by hand. Worn with purpose. Guaranteed for life.</em>
            </p>
            <p className="order-tagline-sub">DANTE'S OUTLAW SUPPLY · SAN FRANCISCO · EST. MMXXVI</p>
          </div>
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
    <div className="back-cover back-cover-full">
      <img
        src="/Copy_of_Dantes_Graphics_ps_zip_-_3.png"
        alt=""
        className="back-cover-seal"
      />
      <h2 className="back-cover-brand">Dante's</h2>
      <h3 className="back-cover-sub">Outlaw Supply</h3>
      <p className="back-cover-tagline">Garments for the Discerning Rider</p>
      <div className="back-cover-rule"></div>
      <p className="back-cover-copy">
        Handcrafted in San Francisco from original cavalry patterns.<br/>
        Every garment numbered, registered, and guaranteed for life.
      </p>
      <span className="back-cover-volume">Vol. I — MMXXVI</span>
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
