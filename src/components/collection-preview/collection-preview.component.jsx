import React from 'react';
import './collection-preview.styles.scss';

const CollectionPreview=({title,items})=>{
    return(
       <div className='collection-preview'>
         <div className='title'>
           <h1>{title.toUpperCase()}</h1>
           <div className='preview'>
               {
                   items.filter((item,idx)=>idx< 4).map(item=>(
                    <div key={item.id}>{item.name}</div>
                   ))
               }
            
           </div>
         </div>
       </div>

    );
}
export default CollectionPreview;