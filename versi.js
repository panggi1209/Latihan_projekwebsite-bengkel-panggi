<script>
  window.onload = function () {
    var selecttema = document.getElementById("tema");

    // Tambahkan tema awal pas halaman dibuka
    document.body.classList.add("tema" + selecttema.value);

    // Saat pilihannya berubah
    selecttema.onchange = function () 
      
      // Buang semua tema dulu
      document.body.classList.remove("temaTerang", "temaGelap");

      // Tambahkan tema baru sesuai pilihan
      document.body.classList.add("tema" + this.value);
    };
  
</script>
