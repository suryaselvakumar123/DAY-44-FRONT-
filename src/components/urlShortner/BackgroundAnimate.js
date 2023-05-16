const BackgroundAnimate = () => {
   return (
     <div className="background">
       {Array.from({ length: 22 }, (_, index) => (
         <span key={index}></span>
       ))}
     </div>
   );
 }
 
 export default BackgroundAnimate;
 