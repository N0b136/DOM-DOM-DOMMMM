document.addEventListener('DOMContentLoaded', function () {
    let btn = document.createElement('button');
    let btnLabel = document.createTextNode('Add Square');
    btn.appendChild(btnLabel);
    document.body.appendChild(btn);

    let ctner = document.createElement('div');
    ctner.id = 'container';
    document.body.appendChild(ctner);

    
    //add black square divs
    btn.addEventListener('click', function() {
        let div = document.createElement('div');
        div.className = "blackbox";
        let divI = document.getElementsByClassName('blackbox').length;
        div.id = divI
        let idText = document.createTextNode(divI);
        div.appendChild(idText);
        ctner.appendChild(div);

        //change box colors
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
        
            //delete boxes
            function remoxeBoxes(e) {
                let cTarget = e.target;
                let nextSib = e.target.nextSibling;
                let prevSib = e.target.previousSibling;
                let firstBox = ctner.firstChild;
                let lastBox = ctner.lastChild;
                firstBox.addEventListener('dblclick', function (){
                    alert('There is no previous box...');
                });
                lastBox.addEventListener('dblckick', function() {
                    alert ("There is no box after that one...");
                });

                if (divI%2 == 0 && cTarget !== lastBox) { ctner.removeChild(nextSib);}
                else if (divI%2 !== 0 && cTarget !== firstBox) { ctner.removeChild(prevSib);};
            }

            div.addEventListener('dblclick', remoxeBoxes, false);
        });
    });
});