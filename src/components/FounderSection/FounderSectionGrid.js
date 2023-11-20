import React from 'react'

const FounderSectionGrid = ({imgSrc, heading, alt, paragraph}) => {
  return (
    <div className="col-md-4 text-center">
    <section class="card__section">
        <img
        class="card__image"
        src={imgSrc}
        alt={alt}
        />
        <div class="card__inner">
            <h5>{heading}</h5>
            <p>{paragraph}</p>
        </div>
    </section>
</div>
  )
}

export default FounderSectionGrid
