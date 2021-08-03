/** @format */

import React, { useState, useEffect } from 'react';
import './App.css';
import { SRLWrapper } from 'simple-react-lightbox';

const images = [
  { id: '1', imageName: 'img1.jpeg', tag: 'artiste1' },
  { id: '2', imageName: 'img2.jpeg', tag: 'artiste3' },
  { id: '3', imageName: 'img3.jpeg', tag: 'artiste2' },
  { id: '4', imageName: 'img4.jpeg', tag: 'artiste2' },
  { id: '5', imageName: 'img5.jpeg', tag: 'artiste1' },
  { id: '6', imageName: 'img6.jpeg', tag: 'artiste3' },
  { id: '7', imageName: 'img6.jpeg', tag: 'artiste2' },
  { id: '8', imageName: 'img8.jpeg', tag: 'artiste1' },
  { id: '9', imageName: 'img9.jpeg', tag: 'artiste3' },
  { id: '10', imageName: 'img10.jpeg', tag: 'artiste3' },
  { id: '11', imageName: 'img11.jpeg', tag: 'artiste3' },
  { id: '12', imageName: 'img12.jpeg', tag: 'artiste3' },
  { id: '13', imageName: 'img13.jpeg', tag: 'artiste1' },
  { id: '14', imageName: 'img14.jpeg', tag: 'artiste2' },
  { id: '15', imageName: 'img15.jpeg', tag: 'artiste1' },
  { id: '16', imageName: 'img16.jpeg', tag: 'artiste3' },
];
function App() {
  const [tag, setTag] = useState('all');
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    tag === 'all'
      ? setFilter(images)
      : setFilter(images.filter((image) => image.tag === tag));
  }, [tag]);

  const TagButton = ({ name, change, isActive }) => {
    return (
      <button
        className={`tag ${isActive ? 'active' : null}`}
        onClick={() => change(name)}>
        {name.toUpperCase()}
      </button>
    );
  };

  return (
    <div className='App'>
      <div className='tags'>
        <TagButton
          name='all'
          change={setTag}
          isActive={tag === 'all' ? true : false}
        />
        <TagButton
          name='artiste1'
          change={setTag}
          isActive={tag === 'artiste1' ? true : false}
        />
        <TagButton
          name='artiste2'
          change={setTag}
          isActive={tag === 'artiste2' ? true : false}
        />
        <TagButton
          name='artiste3'
          change={setTag}
          isActive={tag === 'artiste3' ? true : false}
        />
      </div>
      <SRLWrapper>
        <div className='container'>
          {filter.map((image) => (
            <div key={image.id} className='image-card'>
              <a href={`./images/${image.imageName}`}>
                <img
                  className='image'
                  src={`./images/${image.imageName}`}
                  alt=''
                />
              </a>
            </div>
          ))}
        </div>
      </SRLWrapper>
    </div>
  );
}

export default App;
