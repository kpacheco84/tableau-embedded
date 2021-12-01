import React, { useRef, useEffect } from 'react'

const { tableau } = window

const USFundingVisual = (props) => {
  const ref = useRef(null)
  const url =
    'https://public.tableau.com/views/USFundingAnalysis/USFunding_1?:language=en-US&:display_count=n&:origin=viz_share_link'
  // 'https://public.tableau.com/views/USFundingAnalysis/USFundingAnalysis?:language=en-US&:display_count=n&:origin=viz_share_link'

  const options = {
    device: 'desktop',
  }

  function initViz() {
    new tableau.Viz(ref.current, url, options)
  }

  useEffect(() => {
    initViz()
  }, [])

  return (
    <div>
      <div ref={ref}></div>
    </div>
  )
}

export default USFundingVisual
