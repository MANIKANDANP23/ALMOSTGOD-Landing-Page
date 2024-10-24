import React from 'react'

const Navbar = () => {
  return (
    <nav class="mt-4"> 
<div class="flex justify-between max-w-7xl mx-auto">  
  <div>
     <span class='text-black font-bold text-4xl ml-5'>ALMOSTGOD</span>
  </div>   

<div class="font-thin flex space-x-4"> 

  <ul class="flex space-x-36 font-normal">
    <li>
      <a href='#' class="hover:text-gray-400 transform ease-in-out duration-200">HOME</a>
    </li>

    <li>
      <a href='#' class=" hover:text-gray-400 transform ease-in-out duration-200">COLLECTION</a>
    </li>

    <li>
      <a href='#' class=" hover:text-gray-400 transform ease-in-out duration-200" >ABOUT US</a>
    </li>
  </ul>
</div>
</div>
</nav>
)
}

export default Navbar