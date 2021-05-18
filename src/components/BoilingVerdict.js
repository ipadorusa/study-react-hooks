import React from 'react'

function BoilingVerdict({props}) {
    return (
        <div>
            {celsius >= 100 && <p>The water would boil.</p>}
        </div>
    )
}

export default BoilingVerdict
