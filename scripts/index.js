
const form = document.getElementById("form");

form.onsubmit= function(e) {
    e.preventDefault();
 
   fetch("https://httpbin.org/post ",
    {
        method:"POST",
        body: FormData(form),
        headers:{'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
    }).
    then(user=>user.json()).
    then(u=>console.log(u)).
    catch(error=>console.log(error));
    
  }
    
// Задание недели 18
/*   class Cat{
    constructor(name,breed,feed){
        this.name=name;
        this.breed=breed;
        this.feed=feed;
        
    }
}

const write=()=>{
    let Cname=document.getElementById("petname").value;
    let sel=document.getElementById("poroda").options.selectedIndex;
    let breed=document.getElementById("poroda").options[sel].text;
    let checkboxes = document.getElementsByClassName('checkbox');
    const  feed = []; 
  for (let f = 0; f < checkboxes.length; f++) {
     if (checkboxes[f].checked)
          feed.push(checkboxes[f].value); 
       
     }  
    
    const cat=new Cat(Cname,breed,feed);
    console.log(cat);

} */
