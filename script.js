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
        let idText = document.createTextNode(divI);
        div.appendChild(idText);
        document.body.appendChild(div);
        if (divI >= 0) {
            divI++
        };

        let colors = ['blue','red','orange','green','purple','tan','indigo','crimson'];
        div.addEventListener('click', function(){
            let randColor = colors[Math.floor(Math.random()*colors.length)];
            div.style.color = randColor;
            div.style.backgroundColor = randColor;
            div.addEventListener('mouseover', function(){
                div.style.color = 'white';
            });
            div.addEventListener('mouseout', function() {
                div.style.color = randColor;
            });
            div.addEventListener('dblclick', function(){
                if (divI%2 == 0) {
                    let nextSib = div.nextSibling;
                    if (nextSib == null) { alert ("There is no box after that one...")} else {
                    document.body.removeChild(nextSib);}
                    
                } else {
                    let prevSib = div.previousSibling;
                    if (prevSib == null) {alert('There is no previous box...')} else {
                    document.body.removeChild(prevSib);}
                    
                }
            })
        });
    });
});