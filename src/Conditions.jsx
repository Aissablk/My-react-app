function Lion(){
    const Animals=['Lion','Vache','dog','mouton'];
    return(
    <div>
    {Animals.map((num, index) =>  num.startsWith('L') ? <div key={index}> this is {num}</div > : null )}
    
    </div> 
    
    );
 }
export default Lion; 
