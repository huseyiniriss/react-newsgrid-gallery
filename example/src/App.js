import React from 'react'

import NewsGridGallery from 'react-newsgrid-gallery'
import 'react-newsgrid-gallery/dist/index.css'

const styles = {
  galleryItem: {
    width: '100%',
    height: '100%',
    position: 'relative',
    boxSizing: 'border-box',
  },
  galleryImg: {
    width: '100%',
    height: '100%',
  },
  galleryInfo: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: 4,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
  content:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
};

const GalleryItem = ({image, title, date}) => (
  <div style={styles.galleryItem} >
    <img src={image} style={styles.galleryImg}/>
    <div style={styles.galleryInfo}>
      <span>{title}</span>
      <span>{date}</span>
    </div>
  </div>
);

const data = [
  {
    image: 'https://live.staticflickr.com/8298/7861351302_74a45956dd_o_d.jpg',
    title: 'Image Title 1',
    date: 'Today'
  },
  {
    image: 'https://live.staticflickr.com/7431/13303401343_370bd40f75_o_d.jpg',
    title: 'Image Title 2',
    date: '18.04.2020'
  },
  {
    image: 'https://live.staticflickr.com/2644/3874078574_1e299541f4_o_d.jpg',
    title: 'Image Title 3',
    date: 'Lasy year'
  },
  {
    image: 'https://live.staticflickr.com/4014/4665078919_7c60303c91_o_d.jpg',
    title: 'Image Title 4',
    date: 'One minute ago'
  },
  {
    image: 'https://live.staticflickr.com/7219/7247943540_2483cbff17_o_d.jpg',
    title: 'Image Title 5',
    date: 'Today'
  },
  {
    image: 'https://live.staticflickr.com/4552/38253475222_0e3ae586be_k_d.jpg',
    title: 'Image Title 5',
    date: 'Today'
  },
  {
    image: 'https://live.staticflickr.com/213/491726079_b4b6c2771f_o_d.jpg',
    title: 'Image Title 5',
    date: 'Today'
  },
];

const App = () => (<div style={styles.content}>
  <div>
    <h3>Gallery 1</h3>
    <NewsGridGallery
      data={data}
      renderItem={({image, title, date}) => (
        <div style={styles.galleryItem} >
          <img src={image} style={styles.galleryImg}/>
          <div style={styles.galleryInfo}>
            <span>{title}</span>
            <span>{date}</span>
          </div>
        </div>
      )}
      grid={[
        {w: 30, h: 50, x: 0, y: 0},
        {w: 40, h: 100, x: 30, y: 0},
        {w: 30, h: 50, x: 70, y: 0},
        {w: 30, h: 50, x: 0, y: 50},
        {w: 30, h: 50, x: 70, y: 50},
      ]}
    />
    <hr/>

    <h3>Gallery 2</h3>
    <NewsGridGallery
      data={data}
      renderItem={GalleryItem}
      grid={[
        {w: 50, h: 70, x: 0, y: 0},
        {w: 50, h: 70, x: 50, y: 0},
        {w: 20, h: 30, x: 0, y: 70},
        {w: 20, h: 30, x: 20, y: 70},
        {w: 20, h: 30, x: 40, y: 70},
        {w: 20, h: 30, x: 60, y: 70},
        {w: 20, h: 30, x: 80, y: 70},
      ]}
      options={{width: 800, height: 360}}
    />
    <hr/>
    <h3>Gallery 3</h3>
    <NewsGridGallery
      data={data}
      renderItem={GalleryItem}
      grid={[
        {w: 33.3, h: 66.6, x: 0, y: 0,},
        {w: 33.3, h: 33.3, x: 33.3, y: 0},
        {w: 33.3, h: 33.3, x: 66.6, y: 0},
        {w: 33.3, h: 33.3, x: 33.3, y: 33.3},
        {w: 33.3, h: 33.3, x: 66.6, y: 33.3},
        {w: 33.3, h: 33.3, x: 0, y: 66.6},
        {w: 33.3, h: 33.3, x: 33.3, y: 66.6},
        {w: 33.3, h: 33.3, x: 66.6, y: 66.6},
      ]}
      options={{width: 800, height: 360}}
    />
    <hr/>
    <h3>Gallery 4</h3>
    <NewsGridGallery
      data={[{title: 'title 1'}, {title: 'title 2'}, {title: 'title 3'}, {title: 'title 4'}]}
      renderItem={({title}) => (<div>{title}</div>)}
      grid={[
        {w: 30, h: 50, x: 0, y: 0},
        {w: 40, h: 100, x: 30, y: 0},
        {w: 30, h: 50, x: 70, y: 0},
        {w: 30, h: 50, x: 0, y: 50},
        {w: 30, h: 50, x: 70, y: 50},
      ]}
    />
  </div>
</div>);

export default App
