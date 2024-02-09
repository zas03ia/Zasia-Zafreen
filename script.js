document.onreadystatechange = function () {
            if (document.readyState !== "complete") {
                document.querySelector(
                    "body").style.visibility = "hidden";
                document.querySelector(
                    "#loader").style.visibility = "visible";
            } else {
                document.querySelector(
                    "#loader").style.display = "none";
                document.querySelector(
                    "body").style.visibility = "visible";
            }
        };
function expand(id) {
    var source=`${id}.html`
  document.getElementById("iframe").src = source;  
  var popup = document.getElementById('content');
  popup.style.display = "block";
  var header = document.getElementsByTagName("header")[0];

  header.style.display = "none";
  scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop;
scrollLeft =
            window.pageXOffset ||
            document.documentElement.scrollLeft,

            // if any scroll is attempted,
            // set this to the previous value
                window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };

};
function closepop(){
    var popup = document.getElementById('content');
    popup.style.display = "none";
    var header = document.getElementsByTagName("header")[0];
    header.style.display = "block";
    document.getElementById("iframe").src = '';  
    window.onscroll = function () { };
};

var prev='';
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(id) {
    var popup = document.getElementById(id);
    if(prev==''){
        popup.style.display = "block";
        prev=id; 
    }
    else if (prev==id){
        popup.style.display = "none";
        prev=''
    }
    else {
        document.getElementById(prev).style.display = "none";
        popup.style.display = "block";
        prev=id;
    }
    
}
    
