let myarray = [];

let addTask = (task)=>{ //This adds a string to the array 
    let length = myarray.push('task');
    console.log("Item "+task+ "Has been added to myarray");
    return length;
}


let listAllTasks =()=>{ //This prints out all item sin the arrsy to the console
    myarray.forEach((item)=>{
        console.log(item);
    })
    
}

let deleteTask =(task)=>{ // this deletes an item from the array using the splice method 
   let index = myarray.indexOf(task);
   if(index > -1 ){ //
    myarray.splice(index, 1);
    console.log("Item "+task+" has been removed from task");
   }else{
    console.log("Item "+task+" was not found in Task");
   }
 
   return myarray.length;
}

addTask("Learn JS!");
addTask("Learn React!");
listAllTasks();
deleteTask("Learn JS!")