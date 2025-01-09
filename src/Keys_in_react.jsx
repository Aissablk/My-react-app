const ListOftasks=[
    {Task: " do ur work home", id : crypto.randomUUID()},
    {Task :"go home and ask ur mother if she is okeyy", id :crypto.randomUUID()},
    {Task:"play a game ", id: crypto.randomUUID()}

];
function TodoList(){
    return <div>
        {ListOftasks.map((task) => <div key={task.id}> {task.Task}</div>)} 
    
    </div> 
}
