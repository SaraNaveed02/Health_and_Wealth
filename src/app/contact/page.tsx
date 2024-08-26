import Image from "next/image";
import yello from '../../../public/image/yello.jpeg'
const Contact = () => {
  return (
   <section className="max-w-screen-lg px-4 py-3">
      <form action={"https://formspree.io/f/mqazerzr"} method="POST">
   <div className=" gap-7 flex flex-col justify-center items-center">
     <h1 className="text-4xl font-bold text-center ">Contact</h1>
     <div className=" ">
       <input
         required
         type="text"
         placeholder="Name"
         className="border border-yellow-400 bg-amber-50 p-2 rounded-lg text-center w-auto text-black"
       />
     </div>
     <div className=" ">
       <input
         required
         type="email"
         placeholder="Email"
         className="border border-yellow-400 bg-amber-50 p-2  w-auto rounded-lg text-center text-black"
       />
     </div>
     <div className="">
       <textarea
         required
         id="message"
         name="message"
         placeholder="Mesage"
         className="border border-yellow-400 bg-amber-50 p-2 px-8 text-black rounded-lg  text-center w-auto outline-none resize-none"
         rows={6}
       />
     </div>
     <div className="text-center mb-5">
       <button className="ring-1  ring-yellow-400 rounded-md bg-[#e4a800]  py-3 px-2 w-56 text-center">
         Submit
       </button>
     </div>
   </div>
 </form>
   </section> );
};

export default Contact;
