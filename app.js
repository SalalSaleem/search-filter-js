function searchFilter(event){
    var search = event.target.value;
    var mobileName = document.getElementsByClassName("mobileName").innerHTML;
    if(search.includes("i")){
        console.log("its iphone");
        
    }else{
        console.log("no its not iphone");
        }
}