function hasilLuas() {
    const luasInput = document.getElementById("luas");
    const sisi = parseFloat(luasInput.value);

    if (isNaN(sisi) || sisi <= 0) {
        alert("Masukkan Angka yang ingin dihitung");
        return;
    }
    const hasil = sisi * sisi;
    const resultLuas = document.getElementById("resultLuas");
    resultLuas.innerHTML = `Luas Persegi : <br>
                            L = S x S <br>
                            L = ${sisi} x ${sisi} <br>
                            L = ${hasil}`;

    document.getElementById("search-button1").disabled = false;
}
function resetResultp() {
    const luasInput = document.getElementById("luas");
    luasInput.value = "";
    const resultView = document.getElementById("resultLuas");
    resultView.innerHTML = "";
    document.getElementById("search-button1").disabled = true;
}

function hasilKeliling() {
    const kelilingInput = document.getElementById("keliling");
    const sisi = parseFloat(kelilingInput.value);
    if (isNaN(sisi) || sisi <= 0) {
        alert("Masukkan Angka yang ingin dihitung");
        return;
    }
    const hasil = sisi * sisi * sisi * sisi;
    const resultKeliling = document.getElementById("resultKeliling");
    resultKeliling.innerHTML = `Keliling Persegi : <br>
                            L = S x S x S x S<br>
                            L = ${sisi} x ${sisi} x ${sisi} x ${sisi}<br>
                            L = ${hasil}`;

    document.getElementById("search-button1").disabled = false;
}
function resetResult() {
    const kelilingInput = document.getElementById("keliling");
    kelilingInput.value = "";
    const resultView = document.getElementById("resultKeliling");
    resultView.innerHTML = "";
    document.getElementById("search-button1").disabled = true;
}

const design = document.getElementById('container')