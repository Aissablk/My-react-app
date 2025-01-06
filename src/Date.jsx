function FormatDate() {
    const today = new Date();
  return ( 
  <h1> 
    To Do List for {' '} 
    {new Intl.DateTimeFormat('en-US',{ weekday: 'long' }).format(today)} 

  </h1>
  );
} 
export default FormatDate;
//export default function TodoList() {
    //const today = new Date();
    //return (
      //<h1>
        //To Do List for{' '}
        //{new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(today)}
      //</h1>
    //);
  //}
  

///////////////
//////export default function TodoList() {
  ////////return (
   /////// <h1>To Do List for {formatDate(today)}</h1>
  ///);///////
////}
//////////////////