import './component.css';
import React from 'react';
import Globe from 'react-globe.gl';
import { RecipeHighlights } from './RecipeHighlights';
import {scaleSequentialSqrt} from 'd3-scale';
import {interpolateYlOrRd} from 'd3-scale-chromatic';





function Main() {
    const { useState, useEffect, useMemo } = React;
    const [countries, setCountries] = useState({ features: []});
    const [hoverD, setHoverD] = useState();

    useEffect(() => {
      // load data
      fetch('../datasets/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(setCountries);
    }, []);

    const colorScale = scaleSequentialSqrt(interpolateYlOrRd);

    // GDP per capita (avoiding countries with small pop)
    const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);

    const maxVal = useMemo(
      () => Math.max(...countries.features.map(getVal)),
      [countries]
    );
    colorScale.domain([0, maxVal]);
  return (
    <div className='main'>
      <Globe
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    lineHoverPrecision={0}

    polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
    polygonAltitude={d => d === hoverD ? 0.12 : 0.06}
    polygonCapColor={d => d === hoverD ? 'steelblue' : colorScale(getVal(d))}
    polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
    polygonStrokeColor={() => '#111'}
    polygonLabel={({ properties: d }) => `
      <b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
      GDP: <i>${d.GDP_MD_EST}</i> M$<br/>
      Population: <i>${d.POP_EST}</i>
    `}
    onPolygonHover={setHoverD}
    polygonsTransitionDuration={300}
  />
  <RecipeHighlights />
    </div>

  );
}





export default Main

