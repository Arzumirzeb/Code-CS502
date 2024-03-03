let names = document.querySelector(".container")
async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    console.log(data);
    data.forEach(element => {
        const div = document.createElement("div")
        div.style.background = "pink"
        div.style.fontFamily = "Tahoma"
        div.style.fontSize = "18px"
        const div2 = document.createElement("div")
        div2.style.background = "pink"
        div2.style.fontFamily = "Tahoma"
        div2.style.fontSize = "18px"
        const div3 = document.createElement("div")
        div3.style.background = "pink"
        div3.style.fontFamily = "Tahoma"
        div3.style.fontSize = "18px"
        const div5 = document.createElement("div")
        div5.style.background = "pink"
        const div6 = document.createElement("div")
        div6.style.background = "white"


        div5.innerText = "\n"
        div6.innerText = "\n"
        div.innerText = `${"Username: "}` + element.name
        div2.innerText = `${"City: "}` + element.address.city
        let phone = element.phone
        let cphone = phone.slice(0, -4).split('').map(item => item = "*").join("")+ phone.slice(-4)
        console.log(cphone);
        
        div3.innerText = `${"Phone: "}` + cphone
        
       
        names.append(div5)
        names.append(div6)
        names.append(div)
        names.append(div2)
        names.append(div3)
        
      
    });
}
getData()

