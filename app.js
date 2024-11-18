function searchFilter(event){
    var search = event.target.value;
    var mobileName = document.getElementsByClassName("mobileName").innerHTML;
    if(search === "iphone"){
        console.log("its iphone");
        console.log(mobileName);
        
    }else{
        console.log("no its not iphone");
        }
}