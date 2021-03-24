let select = document.getElementById("select");

select.addEventListener('change', () => {
    let selectedOption = select.value;
    
    switch (selectedOption) {
        case 'value1':
            document.querySelector(".image").setAttribute("src", "img/ranita_1.jpg");
            break;

        case 'value2':
            document.querySelector(".image").setAttribute("src", "img/ranita_2.jpg");
            break;

        case 'value3':
            document.querySelector(".image").setAttribute("src", "img/ranita_3.jpg");
            break;
    
        case 'value4':
            document.querySelector(".image").setAttribute("src", "img/ranita_4.jpg");
            break;

        case 'value5':
            document.querySelector(".image").setAttribute("src", "img/ranita_5.jpg");
            break;

        case 'value6':
            document.querySelector(".image").setAttribute("src", "img/ranita_6.jpg");
            break;

        case 'value7':
            document.querySelector(".image").setAttribute("src", "img/ranita_7.jpg");
            break;
    
        case 'value8':
            document.querySelector(".image").setAttribute("src", "img/ranita_8.jpg");
            break;
    
        case 'value9':
           document.querySelector(".image").setAttribute("src", "img/ranita_9.jpg");
            break;
        
        case 'value10':
            document.querySelector(".image").setAttribute("src", "img/ranita_10.jpg");
           break;
    
        case 'value11':
            document.querySelector(".image").setAttribute("src", "img/ranita_11.jpg");
            break;
    
        case 'value12':
            document.querySelector(".image").setAttribute("src", "img/ranita_12.jpg");
            break;
    }
});