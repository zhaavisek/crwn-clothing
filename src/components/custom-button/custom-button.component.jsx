import React from 'react';
import './custom-button.styles.scss';

const CustomButton=({children,...OtherProps})=>(
      <div className='custom-button' {...OtherProps}>
          {children}
      </div>
)

export default CustomButton;