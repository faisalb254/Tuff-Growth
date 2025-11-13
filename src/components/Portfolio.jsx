import React from 'react'

export default function Portfolio(props) {
    const { brandimg, brandname } = props;
    return (
        <>
            <section>
                <div className="mt-0 md:mt-13">
                    <img src={brandimg} alt={brandname} />
                </div>
            </section>
        </>
    )
}
