import React from 'react';
import './collection-items.styles.scss';


const CollectionItems=({name,id,imageUrl,price})=>(
    <div className='collection-item'>
        <div className='image' style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className='collection-footer'>
          <span className='name' key={id}>{name}</span>
          <span className='price'>{price}</span>

        </div>

    </div>
)

export default CollectionItems;