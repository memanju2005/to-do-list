
let pointer=0;
let completes=0;
let total=0;
let pixel;
const tasks=[];
let progress=document.getElementById("complete");
let list=document.getElementById("mylist");
let congrat=document.getElementById("congrat");
// for(i=0;i<tasks.length;i++)
//     {
//         let li=document.createElement("li");
//         li.innerText=tasks[i];
//         list.appendChild(li);
//     }
function display_congrats(){
  congrat.style.display="block";
  console.log("hello");
  setTimeout(() => {
    congrat.style.display = "none"; // Hide the message after 3 seconds
  }, 1000);
}
function progress_setter(){
  pixel=(completes/total)*100;
  p=String(pixel);
  p+="px"
  progress.style.width=p;
  console.log("done");
  
  // progress.style.width=pixel;
}
function submit() 
{
    total+=1;
    progress_setter();
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
              display_congrats();
                console.log("Checkbox is checked.");
                completes+=1;
                progress_setter();
                li.style.textDecoration="line-through";
                

              } else {
                console.log("Checkbox is unchecked.");
                completes-=1;
                progress_setter();
                li.style.textDecoration="none";
                congrat.style.display="none";
              }
        })
        item.appendChild(checkbox);

        
        list.appendChild(item);
        console.log(checkbox.id)

    }
