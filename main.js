
//function for changing text and background
function changeBackground1() 
{
    //document.body.style.background="whitesmoke";
    document.querySelectorAll('p').forEach(e=>e.style.color="#e320d1");
    document.querySelectorAll('h2').forEach(e=>e.style.color="#e320d1");
    document.querySelectorAll('a').forEach(e=>e.style.color="#e320d1");
    document.querySelectorAll('h3').forEach(e=>e.style.color="#e320d1");
    document.querySelectorAll('h4').forEach(e=>e.style.color="#e320d1");
}
function changeBackground2() 
{
   //document.body.style.background="brown";
    document.querySelectorAll('p').forEach(e=>e.style.color="#00ce9b");
    document.querySelectorAll('h2').forEach(e=>e.style.color="#00ce9b");
    document.querySelectorAll('a').forEach(e=>e.style.color="#00ce9b");
    document.querySelectorAll('h3').forEach(e=>e.style.color="#00ce9b");
    document.querySelectorAll('h4').forEach(e=>e.style.color="#00ce9b");
}
function changeBackground3() 
{
   // document.body.style.background="green";
    document.querySelectorAll('p').forEach(e=>e.style.color="#5446df");
    document.querySelectorAll('h2').forEach(e=>e.style.color="#5446df");
    document.querySelectorAll('a').forEach(e=>e.style.color="#5446df");
    document.querySelectorAll('h3').forEach(e=>e.style.color="#5446df");
    document.querySelectorAll('h4').forEach(e=>e.style.color="#5446df");
}
function changeBackground4() 
{
   // document.body.style.background="green";
    document.querySelectorAll('p').forEach(e=>e.style.color="#ffffff");
    document.querySelectorAll('h2').forEach(e=>e.style.color="#ffffff");
    document.querySelectorAll('a').forEach(e=>e.style.color="#ffffff");
    document.querySelectorAll('h3').forEach(e=>e.style.color="#ffffff");
    document.querySelectorAll('h4').forEach(e=>e.style.color="#ffffff");
}
//this is for  open  text box
document.addEventListener('DOMContentLoaded', function () {
    var siteHeaders = document.querySelectorAll('.site-header');

    siteHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            var content = this.nextElementSibling;
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        });
    });
});