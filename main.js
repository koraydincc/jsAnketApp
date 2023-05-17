const newData = [];
let temp = '';
let counter = 0;
let partiler = document.getElementById('partiler');
let ad = document.getElementById('ad');
let soyad = document.getElementById('soyad');
let tc = document.getElementById('tc');
let veri = document.getElementById('veri');

document.getElementById('kaydet').addEventListener('click', function() {
    let secilenParti = partiler.value;
    


    if (ad.value === '' || soyad.value === '' || tc.value === '') {
        alert('Lütfen bütün alanları doldurunuz!');
        return false;
    }

    if (newData.indexOf(tc.value) > -1) {
        alert('Sadece bir kez oy kullanabilirsiniz!');
        ad.value = '';
        soyad.value = '';
        tc.value = '';
        return false;
    }

    if (tc.value.length > 11) {
        alert('Geçersiz TC kimlik numarası');
        ad.value = '';
        soyad.value = '';
        tc.value = '';
        return false;
    }

    newData.push(ad.value);
    newData.push(soyad.value);
    newData.push(tc.value);
    newData.push(secilenParti)
    
    temp += `<li>Sayın ${tc.value} kimlik numaralı ${ad.value.toUpperCase()} ${soyad.value.toUpperCase()}. Oyunuzu ${secilenParti}'den yana kullandınız.</li>`;
    veri.innerHTML = temp;
    ad.value = '';
    soyad.value = '';
    tc.value = '';

    console.log(newData);
});
