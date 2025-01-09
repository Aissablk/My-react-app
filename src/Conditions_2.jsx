function Check(props){
    return (
        <div>
    {props.Animals.map((animal) => {
        return  animal.startsWith("L") && <div key ={animal}> {animal} </div>;
    }

    )

}

</div>
    )};


function Affichage(){
    const Animals=["Lion","Dog","Mouton","Cat"]
    return  (
        <h1 > this is my Animal 
            <Check Animals={Animals} />

        </h1>
    )
}
export default Affichage;