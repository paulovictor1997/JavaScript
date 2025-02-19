const qrCode = document.querySelector("#qrcode")
const downloadBtn = document.querySelector("#download-btn")
const shareBtn = document.querySelector("#share-btn")

// function who will genetare the QRcode 
function generateQRCode(){
    //Regex to take only the URL
    const urlRegex = /^(https?:\/\/)?([\w\d.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
    const text = document.querySelector("#textInput").value

    if(!urlRegex.test(text)){
        alert("A valid URL please !")
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

//download button
downloadBtn.addEventListener("click",()=>{
    const qrCanvas = qrCode.querySelector("canvas")
    if(qrCanvas){
        const link = document.createElement("a")
        link.href = qrCanvas.toDataURL("image/png")
        link.download = "qrcode.png"
        link.click()
    }
})

//share button
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