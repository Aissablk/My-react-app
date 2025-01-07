function HandleList(){
    const Animals=['Lion','loup','vache','chat'];
    return (
        <div>

        
        <h1>
            this is my animals {' '}
            {Animals.map((num,index) => <div key={index}> {num} </div>)}

        </h1>
        </div>
    )
}
export default HandleList ;