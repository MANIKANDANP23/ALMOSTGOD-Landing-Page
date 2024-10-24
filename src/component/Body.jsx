import React from 'react'




const Body = () => {
  return (
   <> 
   
    <div class="border rounded-3xl mt-8 max-w-7xl mx-auto">
        <div className='flex'>
            <ul>
                <li class="font-medium mt-40 mx-10">OVERVIEW</li>

                <li class="mt-6 mx-10 text-xl font-base font-body">This clothing brand draws inspiration from global markers of power, 
                    exploring the concept of power through the past, present, and future.They offer 
                    items such as shirts, pants, tanks, and polos, typically printed with images and 
                    logos associated with the brand. Focused on high-quality materials and attention to detail, ensuring both style and durability.
                </li>

            </ul>
            <img src="image7.jpg" class="h-96 w-72 ml-auto mt-20 mr-6 rounded-xl filter grayscale hover:grayscale-0 object-cover transition duration-500 hover:scale-110"/>
            <img src="image.png" class="h-96 w-72 ml-auto mt-52 mr-20 mb-10 rounded-xl filter grayscale hover:grayscale-0 object-cover transition duration-500 hover:scale-110"/>
        </div>

        <div className="w-[200px] h-[83px] left-[620px] top-[780px] absolute bg-white border-2 border-[#d9d9d9]">
            <div className="w-px h-[50px] left-0 top-[-9px] absolute" />
            
            <a className="left-[45px] top-[29px] absolute text-black font-medium font-['Albert Sans'] transition duration-700 hover:font-bold" href='https://almostgods.com/'>EXPLORE NOW!</a>
        </div>
    </div>
    </>
  )
}

export default Body