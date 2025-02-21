//Global variables 
const qrCode = document.querySelector("#qrcode")
const downloadBtn = document.querySelector("#download-btn")
const shareBtn = document.querySelector("#share-btn")
const form = document.querySelector("#form")
const textInput = document.querySelector("#textInput")

const urlRegex = /^(https?:\/\/)?([\w\d.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/

//Function who will generate QRcode 
const generateQRCode = () =>{
    const text = textInput.value

    if (text === "") {
        //console.log("Input vazio! Exibindo alerta...")
        alert("The field is empty.")
        return;
    }

    if(!urlRegex.test(text)){
        //console.log("URL inválida! Exibindo alerta...")
        alert("A valid URL please!")
        return
    }

    qrCode.innerHTML = ""
    const qr = new QRCode(qrCode,{
        text : text,
        width : 200,
        height: 200
    })

    setTimeout(()=>{
        downloadBtn.style.display = "block"
        shareBtn.style.display = navigator.share ? "block" : "none"
    },500)
}

//Form event
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    generateQRCode()
})

//Input event
textInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        e.preventDefault()
        generateQRCode()
    }
})

//Download button
downloadBtn.addEventListener("click",()=>{
    const qrCanvas = qrCode.querySelector("canvas")
    if(qrCanvas){
        const link = document.createElement("a")
        link.href = qrCanvas.toDataURL("image/png")
        link.download = "qrcode.png"
        link.click()
    }
})

//Share button
shareBtn.addEventListener("click",()=>{
    const text = document.querySelector("#textInput").value

    if(navigator.share){
        navigator.share({
            title: "QR Code",
            text:`Confira este QR Code : ${text}`,
            url: window.location.href
        })
    }
})