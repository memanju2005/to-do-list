
let pointer=0;
const tasks=[];
let list=document.getElementById("mylist");
// for(i=0;i<tasks.length;i++)
//     {
//         let li=document.createElement("li");
//         li.innerText=tasks[i];
//         list.appendChild(li);
//     }
function submit() 
{

    text = document.getElementById("task").value;
    console.log(text);
    pointer+=1;
    console.log(pointer)
    tasks.push(text);
    console.log(tasks);

    let item=document.createElement("div");
    item.style.display="flex";
    item.style.justifyContent="space-between";

        let li=document.createElement("li");
        li.innerText=text;
        item.appendChild(li);

        let checkbox = document.createElement('input');
        // Assigning the attributes to created checkbox
        checkbox.type = "checkbox";
        checkbox.name = "task"+pointer;
        checkbox.value = pointer;
        checkbox.id = pointer;
        checkbox.addEventListener("click",function()
        {
            if (checkbox.checked) {
                console.log("Checkbox is checked.");
                li.style.textDecoration="line-through";
              } else {
                console.log("Checkbox is unchecked.");
                li.style.textDecoration="none";
              }
        })
        item.appendChild(checkbox);

        
        list.appendChild(item);
        console.log(checkbox.id)



    }
