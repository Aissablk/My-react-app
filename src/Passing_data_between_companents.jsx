function Button(props){
    const buttonStyle={
        color : props.color,
        fontSize : props.fontSize +"px" 


    };
    return <div>
        <button style={buttonStyle}>
            {props.text}
        </button>
    </div>
}

export default function ButtonList(){
    return(
    <div>
        <Button color="red" fontSize={12} text="dont click now" />
        <Button   color="green" fontSize={12} text="click now"/> 
    </div>
    )
} 