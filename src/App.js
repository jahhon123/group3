import React, { Component } from 'react'
import './appStyle.css'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='birinchi'>

          <div className='box-1'>

         <h2 className='jahon'> <i class="fa fa-user"></i></h2>
          <h1>Jahongir</h1>
          </div>
          <div className='box-2'>
         <h2 className='jahon'> <i class="fa fa-angellist"></i>  </h2>
          <h1>welcome</h1>
         </div>
              <div className='box-3'>
              <h2 className='jahon'>   <i class="fa fa-apple"></i></h2>
          <h1>iPhone</h1>
              </div>

         </div>
<br></br>
<br></br>
         <div>
           <div className='ikkinchi'>
           <div className='box-4'>

 <h4>Jahongir</h4>
           <i class="fa fa-address-book"></i>
 </div>
 <div className='box-5'>
 <h4>welcome</h4>
 <i class="fa fa-american-sign-language-interpreting"></i>
</div>
     <div className='box-6'>
 <h4>iPhone</h4>
     <i class="fa fa-address-card"></i>
     </div>
           </div>
         </div>
        </div>
      </div>
    )
  }
}

