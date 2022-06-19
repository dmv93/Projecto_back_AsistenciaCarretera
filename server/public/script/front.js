
const botones = document.getElementsByClassName("btn");
//console.log(botones[0])
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", () => {
        
        let respuesta = { id: botones[i].id, action: botones[i].name }
        

        fetch('http://127.0.0.1:3000/dashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(respuesta),
        })
        .then(() => location.reload())
            


    })
};