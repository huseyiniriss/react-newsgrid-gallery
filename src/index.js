import React from 'react'
import gridStyle from './styles.module.css'
import PropTypes from 'prop-types'

const getItemStyle = (data) => ({
  position: 'absolute',
  height: `${data.h}%`,
  width: `${data.w}%`,
  left: `${data.x}%`,
  top: `${data.y}%`,
  boxSizing: 'border-box',
  padding: 2,
})

const NewsGridGallery = ({ options, grid, data, renderItem, className }) => (
  <div
    style={{ ...options, ...{ position: 'relative' } }}
    className={`${gridStyle.grid} ${className}`}
  >
    {grid.length > 0 && (
      <div>
        <div className={gridStyle.firstGridItem} style={getItemStyle(grid[0])}>
          {data[0] ? renderItem(data[0]) : <p>Empty</p>}
        </div>
        <div className={gridStyle.gridItems}>
          {grid.slice(1).map((val, i) => (
            <div style={getItemStyle(val)} className={gridStyle.gridItem} key={i}>
              {data.slice(1)[i] ? renderItem(data.slice(1)[i]) : <p>Empty</p>}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
)

NewsGridGallery.propTypes = {
  options: PropTypes.object,
  grid: PropTypes.array,
  data: PropTypes.array,
  renderItem: PropTypes.func.isRequired,
  className: PropTypes.string,
}

NewsGridGallery.defaultProps = {
  options: { width: 720, height: 280 },
  grid: [],
  data: [],
  className: '',
}

export default NewsGridGallery
