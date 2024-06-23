import React from 'react'
import { useState } from 'react'


 function Inuser() {

    const [nameuser, setName] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState()
    const [lunguse,setLungues]=useState('')
    const[color,setColor]=useState('');
    const [font,setFont]=useState(12);
    const [submit, setSubmit] = useState(false);


    const Submits = (e) => {
        e.preventDefault();
        setSubmit(true);
      };
    
  return (
    <>

        <div className='bg-zinc-300'>
        {!submit ? (

    <form className="space-y-4  flex flex-col m-0 p-5" >
    <label className="input input-bordered flex items-center gap-2 ">
  <input type="text" className="grow" placeholder="Enter your name:"  value={nameuser} onChange={(e)=>{setName(e.target.value)}} />
</label>
<br></br>
<lable  className='p-1'>Choose Gender?  </lable>  
        <input type="radio" value={gender} onChange={(e)=>{setGender(e.target.value)}} /> female
        <input type="radio" value={gender} onChange={(e)=>{setGender(e.target.value)}} className='m-1'/>male
        <br></br>
        <br></br>

        <label for="country">choose the City:</label>
        <select value={city} onChange={(e)=>{setCity(e.target.value)}}type='text' placeholder='choose the City ' className='w-full p-2 border border-gray-300 rounded'>
        <option value="p" selected>--Please choose City--</option>
        <option value="saudi arabia">saudi arabia</option>
                     <option value="London">London</option>
                     <option value="Paris">Paris</option>
                     <option value="Dubai">Dubai</option>
                    <option value="Qatar">Qatar</option>
                    </select>
                    <br></br>

<div className="mt-32 max-w-xl mx-auto">
    <label className="text-white">  Chose lunguse </label>
    <input id="range" type="range" class="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"  value={lunguse} onChange={(e)=>{setLungues(e.target.value)}} />
</div>
<button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>

        
</form>  
   ) : (
    <>
    <div className="">
    <div>
      <input type="color" value={color}
      onChange={(e) => setColor(e.target.value)}/>
    </div>
    <div>
      <label> Change Fonts:</label>
      <input type="number" value={fontS} min="10" max="40"
      onChange={(e) => setFont(parseInt(e.target.value))}/>
    </div>
    <div className='' style={{ backgroundColor: color, fontSize: ${font}px }}>
      <p>Name: {nameuser}</p>
      <p>gender: {gender}</p>
      <p>city: {city}</p>
      <p> lunguse : {lunguse}</p>
    </div>
  </div>
)}

</div>
   );
   </>

};
export default Inuser