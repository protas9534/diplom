let registration = document.querySelector('.reg__registration')
let regBlock = () => {
    document.querySelector('.reg__window-entry').style.display = 'none'
    document.querySelector('.reg__window-reg').style.display = 'flex'
}
registration.addEventListener('click', regBlock)

let entry = document.querySelector('.reg__entry-reg')
let entryBlock = () => {
    document.querySelector('.reg__window-entry').style.display = 'flex'
    document.querySelector('.reg__window-reg').style.display = 'none'
}
entry.addEventListener('click', entryBlock)



let users = []

let formReg = document.querySelector('.reg__form-reg')
formReg.onsubmit = (event) => {
    event.preventDefault()
    let email = document.querySelector('.reg__email-input-reg').value
    let tel = document.querySelector('.reg__tel-input-reg').value
    let pass1 = document.querySelector('.reg__pass-input-reg').value
    let pass2 = document.querySelector('.pass').value
    let checkPass = () => {
        if (pass1 === pass2){
        return pass1
        } else {
        document.querySelector('.reg__err').style.opacity = '1'
        }
    }
    let person = {
        email: email,
        tel: tel,
        pass: checkPass()
    }
    
    let pushUser = () => {
        if (!!person.pass == true){
            users.push(person)
            entryBlock()
        }
    }
    pushUser()
}





let form = document.querySelector('.reg__form')
form.onsubmit = (event) => {
    event.preventDefault()
    let email = document.querySelector('.reg__email-input').value
    let pass = document.querySelector('.reg__pass-input').value
    let allPass = users.map(person => person.pass)
    let allEmail = users.map(person => person.email)
    let checkUser = () => {
        if (allEmail.includes(email) && allPass.includes(pass)){
            document.querySelector('.registration').style.display = 'none'
        } else {
            document.querySelector('.reg__pass-err').style.opacity = '1'
        }
    }
    checkUser()
}

console.log('hellow')




function initMap() {
    const shop1 = { lat: 53.9042003, lng: 27.5527376 } // nemiga3
    const shop2 = { lat: 53.9085695, lng: 27.549071 }  // galery
    const shop3 = { lat: 53.8954505, lng: 27.5478191 } // stolica
    const shop4 = { lat: 53.890192, lng: 27.5543206 } // galileo
    const shop5 = { lat: 53.8750097, lng: 27.4983578 } // globo
    const shop6 = { lat: 53.8606445, lng: 27.4793797 } // titan
    const shop7 = { lat: 53.8598192, lng: 27.6742621 } // MOMO
    const shop8 = { lat: 53.9336285, lng: 27.6524721 } // danaMall
    const shop9 = { lat: 53.9463288, lng: 27.6882812 } // spectr
    const shop10 = { lat: 53.9643403, lng: 27.6242378 } // expobel
    const shop11 = { lat: 53.9166062, lng: 27.5799693 } // siluet
    const shop12 = { lat: 53.9263415, lng: 27.5178667 } // zamok
    const shop13 = { lat: 53.9079864, lng: 27.4845076 } // tivali
    const shop14 = { lat: 53.9380965, lng: 27.487932 } //arenaCity
    const shop15 = { lat: 53.9084426, lng: 27.4332802 } //green
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11.3,
        center: shop1
    })
 
    const marker = new google.maps.Marker({
        position: shop1,
        map: map,
        title: 'ТЦ НЕМИГА 3'
    })
    let infoMarker = new google.maps.InfoWindow({
        content: `<h5>2 этаж, павильон 228</h5><p>время работы: 09.00 - 19.00</p>`
    })
    marker.addListener('click', function(){
        infoMarker.open(map, marker)
    })


    const marker2 = new google.maps.Marker({
        position: shop2,
        map: map,
        title: 'ТРЦ Galleria Minsk',
    })
    let infoMarker2 = new google.maps.InfoWindow({
        content: `<h5>3 этаж, павильон 39</h5><p>время работы: 09.00 - 22.00</p>`
    })
    marker2.addListener('click', function(){
        infoMarker2.open(map, marker2)
    })


    const marker3 = new google.maps.Marker({
        position: shop3,
        map: map,
        title: 'ТЦ Столица',
    })
    let infoMarker3 = new google.maps.InfoWindow({
        content: `<h5>-2 этаж, павильон 201</h5><p>время работы: 09.00 - 20.00</p>`
    })
    marker3.addListener('click', function(){
        infoMarker3.open(map, marker3)
    })


    const marker4 = new google.maps.Marker({
        position: shop4,
        map: map,
        title: 'ТРЦ Galileo'
    })
    let infoMarker4 = new google.maps.InfoWindow({
        content: `<h5>2 этаж, павильон 23</h5><p>время работы: 09.00 - 21.30</p>`
    })
    marker4.addListener('click', function(){
        infoMarker4.open(map, marker4)
    })


    const marker5 = new google.maps.Marker({
        position: shop5,
        map: map,
        title: 'ТЦ Globo'
    })
    let infoMarker5 = new google.maps.InfoWindow({
        content: `<h5>1 этаж, павильон 7</h5><p>время работы: 09.00 - 19.00</p>`
    })
    marker5.addListener('click', function(){
        infoMarker5.open(map, marker5)
    })


    const marker6 = new google.maps.Marker({
        position: shop6,
        map: map,
        title: 'ТРЦ ТИТАН'
    })
    let infoMarker6 = new google.maps.InfoWindow({
        content: `<h5>-1 этаж, павильон 09</h5><p>время работы: 09.00 - 19.00</p>`
    })
    marker6.addListener('click', function(){
        infoMarker6.open(map, marker6)
    })


    const marker7 = new google.maps.Marker({
        position: shop7,
        map: map,
        title: 'ТЦ МОМО'
    })
    let infoMarker7 = new google.maps.InfoWindow({
        content: `<h5>3 этаж, павильон 34</h5><p>время работы: 09.00 - 19.00</p>`
    })
    marker7.addListener('click', function(){
        infoMarker7.open(map, marker7)
    })


    const marker8 = new google.maps.Marker({
        position: shop8,
        map: map,
        title: 'ТЦ Dana Mall'
    })
    let infoMarker8 = new google.maps.InfoWindow({
        content: `<h5>1 этаж, павильон 17</h5><p>время работы: 09.00 - 22.00</p>`
    })
    marker8.addListener('click', function(){
        infoMarker8.open(map, marker8)
    })


    const marker9 = new google.maps.Marker({
        position: shop9,
        map: map,
        title: 'ТЦ Спектр'
    })
    let infoMarker9 = new google.maps.InfoWindow({
        content: `<h5>2 этаж, павильон 175</h5><p>время работы: 09.00 - 18.30</p>`
    })
    marker9.addListener('click', function(){
        infoMarker9.open(map, marker9)
    })


    const marker10 = new google.maps.Marker({
        position: shop10,
        map: map,
        title: 'ТРЦ EXPOBEL'
    })
    let infoMarker10 = new google.maps.InfoWindow({
        content: `<h5>1 этаж, павильон 64</h5><p>время работы: 09.00 - 17.30</p>`
    })
    marker10.addListener('click', function(){
        infoMarker10.open(map, marker10)
    })


    const marker11 = new google.maps.Marker({
        position: shop11,
        map: map,
        title: 'ТЦ Силуэт'
    })
    let infoMarker11 = new google.maps.InfoWindow({
        content: `<h5>1 этаж, павильон 22</h5><p>время работы: 09.00 - 19.30</p>`
    })
    marker11.addListener('click', function(){
        infoMarker11.open(map, marker11)
    })


    const marker12 = new google.maps.Marker({
        position: shop12,
        map: map,
        title: 'ТЦ Замок'
    })
    let infoMarker12 = new google.maps.InfoWindow({
        content: `<h5>4 этаж, павильон 33</h5><p>время работы: 09.00 - 21.30</p>`
    })
    marker12.addListener('click', function(){
        infoMarker12.open(map, marker12)
    })

    const marker13 = new google.maps.Marker({
        position: shop13,
        map: map,
        title: 'ТЦ ТИВАЛИ'
    })
    let infoMarker13 = new google.maps.InfoWindow({
        content: `<h5>2 этаж, павильон 223</h5><p>время работы: 09.00 - 17.30</p>`
    })
    marker13.addListener('click', function(){
        infoMarker13.open(map, marker13)
    })


    const marker14 = new google.maps.Marker({
        position: shop14,
        map: map,
        title: 'ТЦ ARENA City'
    })
    let infoMarker14 = new google.maps.InfoWindow({
        content: `<h5>1 этаж, павильон 3</h5><p>время работы: 09.00 - 21.30</p>`
    })
    marker14.addListener('click', function(){
        infoMarker14.open(map, marker14)
    })


    const marker15 = new google.maps.Marker({
        position: shop15,
        map: map,
        title: 'ТРЦ Green City'
    })
    let infoMarker15 = new google.maps.InfoWindow({
        content: `<h5>1 этаж, павильон 12</h5><p>время работы: 09.00 - 22.00</p>`
    })
    marker15.addListener('click', function(){
        infoMarker15.open(map, marker15)
    })
}
initMap()
