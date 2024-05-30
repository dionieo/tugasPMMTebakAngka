let angkaRandom = Math.floor(Math.random() * 100) + 1;
let chance = 10;


function prosesTebakan(tebakan){
    chance --;
    let percobaan = document.getElementById('chanceLeft');
    let result = document.getElementById('benarSalah');
    let divPercobaan = document.getElementById('divPercobaan');
    let divGame = document.getElementById('divGame');
    let divMainLagi = document.getElementById('divMainLagi');

    if(chance >= 1){
        if(tebakan < angkaRandom){
            result.textContent = "Yah salah, angka terlalu kecil :("
        } else if (tebakan > angkaRandom) {
            result.textContent = "Yah salah, angka terlalu besar :(";
        } else {
            result.textContent = `Yeay jawaban benar, anda membutuhkan ${10-chance} kali percobaan untuk menebaknya!`;
            percobaan.textContent = "";
            divGame.classList.add("d-none");
            divPercobaan.classList.add("d-none");
            divMainLagi.classList.remove("d-none");
            return true;
        }
        percobaan.textContent = ` ${chance} ${angkaRandom}`;
        return false;
    } else {
        result.textContent = "Kesempatan anda sudah habis, game over";
        return false;
    }
}

function tebak(){
    let inputUser = document.getElementById('tebakan').value;
    let tebakan = parseInt(inputUser,10);

    if(isNaN(tebakan) || tebakan < 1 || tebakan > 100){
        document.getElementById('benarSalah').textContent = 'Masukkan angka yang valid (antara 1 - 100)';
        return;
    }

    prosesTebakan(tebakan);
}