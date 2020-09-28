import React from 'react';
import './collection-preview.styles.scss';
import CollectionItems from '../collection-items/collection-items.component';


const CollectionPreview=({title,items})=>{
    return(
       <div className='collection-preview'>
         <div className='title'>
           <h1>{title.toUpperCase()}</h1>
           <div className='preview'>
               {
                   items.filter((item,idx)=>idx< 4).map(({id, ...itemsProps})=>(
                    <CollectionItems key={id} {...itemsProps}/>
                   ))
               }
            
           </div>
         </div>
       </div>

    );
}
export default CollectionPreview;