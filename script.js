document.addEventListener('DOMContentLoaded', function () {
    let btn = document.createElement('button');
    let btnLabel = document.createTextNode('Add Square');
    btn.appendChild(btnLabel);
    document.body.appendChild(btn);

    let divI = 0;
    //add black square divs
    btn.addEventListener('click', function() {
        let div = document.createElement('div');
        div.className = "blackbox";
        div.id = divI
        document.body.appendChild(div);
        if (divI >= 1) {
            divI++
        }
        
    });
});