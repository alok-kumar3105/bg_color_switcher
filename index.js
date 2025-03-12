let options_list=document.querySelectorAll('.available_options');
let body=document.querySelector('body');

console.log(options_list)

function change_bg(e){

    let colour=e.target.id;
    body.style.backgroundColor=colour;

}

options_list.forEach(function (option) {
    option.addEventListener('click', function (e){
        let colour=e.target.id;
        body.style.backgroundColor=colour;
    });
});
