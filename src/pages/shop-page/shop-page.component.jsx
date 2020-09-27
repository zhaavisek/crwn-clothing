import React from 'react';
import './shop-page.styles.scss';
import SHOP_DATA from './shop_data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class ShopPage extends React.Component{
    constructor(){
        super();
        this.state={
            collections:SHOP_DATA
    };
}
    render(){
        const {collections}=this.state;
        return(
          <div className='shop-page'>
              {
                  collections.map(({id,...otherComponents})=>(
                      <CollectionPreview key={id} {...otherComponents}/>
                  ))}
                      

            </div>


        );
      }
    }

export default ShopPage;