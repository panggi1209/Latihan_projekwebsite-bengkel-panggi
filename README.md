# Latihan_projekwebsite-bengkel-panggi
ini adalah lhasil latihan pembuatan website bengkel menggunakan html dan css 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bengkel  Panjoel Garage </title>
  <link rel="stylesheet" href="bagian.css" />
</head>


<body>
  <br>
  <header>
    <nav class="navbar contoh">
      <div class="nav-container">
      <img src="logopanji.png" alt="panjoelgarage_07" width="250px" height="100px">
      
        <ul>
          <li><a href="#Home" title="Beranda">Beranda</a></li>
          <li class="dropdown">
            <a href="layanan.html" title="Lihat Layanan">Layanan</a>
            <ul class="submenu">
              <li><a href="service-motor-2-tak.html" title="Service Motor 2 Tak">SERVICE MOTOR (2STROKE)</a></li>
              <li><a href="service-motor-4-tak.html" title="Service Motor 4 Tak">SERVICE MOTOR (4STROKE)</a></li>
            </ul>
          </li>
          <li><a href="tentang.html" title="Tentang Bengkel Kami">Tentang Kami</a></li>
          <li><a href="kontak.html" title="Hubungi Kami">Kontak Kami</a></li>
        </ul>
      </div>
    </nav>
  </header>

  <br>

  <!-- Hero Section -->
  <section class="hero">
    <h3>Butuh bantuan?</h3>
    <h1>Layanan Bengkel <br>Online, Praktis & Terpercaya!</h1>
    <p>Perawatan dan perbaikan kendaraan langsung ke lokasi Anda. Cepat, transparan, dan fleksibel.</p>
    <a href="https://wa.me/6285938360301?text=Halo%20saya%20ingin%20booking%20servis"
       target="_blank"
       rel="noopener noreferrer"
       class="btn-wa"
       title="Hubungi Panjoel Garage di WhatsApp">
      Jadwalkan Sekarang
    </a>
  </section>

  <!-- Layanan -->
  <section class="layanan-container">
    <a href="service-motor-2-tak.html" class="layanan-box besar dua-tak" title="Service Motor 2 Stroke">
      <div class="teks-layanan">
        <h3>Motor 2 STROKE</h3>
        <p>Layanan servis motor besar yang profesional dan praktis. Teknisi berpengalaman kami siap datang ke lokasi Anda, memastikan performa motor tetap optimal tanpa repot ke bengkel.</p>
      </div>
    </a>

    <a href="service-motor-4-tak.html" class="layanan-box kecil empat-tak" title="Service Motor 4 Stroke">
      <div class="teks-layanan">
        <h3>Motor 4 STROKE</h3>
        <p>Layanan servis motor kecil yang cepat, praktis, dan berkualitas. Teknisi handal kami siap datang ke lokasi Anda, memastikan motor selalu dalam kondisi prima tanpa perlu ke bengkel.</p>
      </div>
    </a>
  </section>

  <!-- Tentang Kami -->
  <section id="Tentang Kami">
    <h2>Tentang Bengkel Panjoel Garage</h2>
    <p>Panjoel Garage memulai perjalanan usahanya sejak tahun 1995, berkomitmen memberikan pelayanan bengkel terbaik untuk segala jenis kerusakan sepeda motor Anda. Dengan tim yang profesional dan ramah, kami siap membantu Anda menjaga performa motor tetap prima. Kami beroperasi setiap hari selama <b  >8 jam</b>, dan <b>libur pada hari Jum’at.</b>
      Berkat kepercayaan dari pelanggan setia, Panjoel Garage telah menjadi bengkel pilihan yang <b backround color>sering direkomendasikan</b> dan dipercaya sepenuhnya oleh banyak pengendara. Kepuasan Anda adalah prioritas kami — datang dan rasakan sendiri layanan yang cepat, terpercaya, dan bersahabat!</p>
  </section>

  <!-- Lokasi -->
  <section id=".peta">
  <h2>Lokasi bengkel kami</h2>
  <iframe 
    title="Peta Lokasi Bengkel Panjoel"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.9469431647703!2d109.23536041101734!3d-7.359844592618524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655f4b61ac2347%3A0x8ed6fec2b8370128!2sPanjoel%20Garage!5e0!3m2!1sid!2sid!4v1752245880652!5m2!1sid!2sid"
    class="peta"
    allowfullscreen
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin">
  </iframe>
</section>


  <!-- Footer -->
  <footer>
    <section id="kontak">
      <h2>Kontak untuk menghubungi kami</h2>
      <a href="https://www.instagram.com/panjoelgarage_07/" target="_blank" rel="noopener noreferrer" title="Instagram Panjoel Garage">
        <button title="Instagram Panjoel Garage">
          <img src="https://img.freepik.com/premium-psd/instagram-logo_971166-164497.jpg?semt=ais_hybrid&w=740"
               width="35"
               height="35"
               alt="Instagram Logo" />
        </button>
      </a>

      <a href="https://wa.me/6285938360301" target="_blank" rel="noopener noreferrer" title="WhatsApp Panjoel Garage">
        <button title="WhatsApp Panjoel Garage">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png"
               width="35"
               height="35"
               alt="WhatsApp Logo" />
        </button>
      </a>
    </section>

    <p>&copy;2025 Panggi Yulian Permana. semua hak dilindungi.</p>
  </footer>

  <script>
    // Menambahkan class 'active' secara otomatis
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
      if (window.location.href.includes(link.getAttribute("href"))) {
        link.classList.add("active");
      }
    });
  </script>
  <style>
    /* RESET DASAR */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f8f8f8;
  color: #0a0c0c;
  padding-top: 80px; /* agar isi tidak ketiban navbar */
}

/* HEADER & NAVIGATION */
header {
  background-color: #00ffaa;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.peta {
  width: 100%;
  max-width: 600px;
  height: 450px;
  border: 0;
  display: block;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* opsional: tampilan elegan */
}



/* Container navbar */
.navbar {
  display: flex;
  align-items: center; /* Vertikal sejajar */
  justify-content: space-between; /* Logo kiri, menu kanan */
  background-color: rgb(67, 76, 82);
  padding: 10px 20px;
}

/* Logo */
.logo img {
  height: 40px;       /* Sesuaikan tinggi logo */
  vertical-align: middle;
}

/* Menu navigasi */
.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
}


.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  padding: 15px 20px;
}

.logo img {
  height: 55px;
  vertical-align: middle;
}

nav ul {
  list-style: none;
  display: flex;
  align-items: left;
  gap: 25px;
}

nav ul li {
  position: relative;
}

nav ul li a {
  color: white;
  text-decoration: none;
  
  padding: 8px 12px;
  font-weight: bold;
  transition: background 0.3s, color 0.3s;
}

nav ul li a:hover,
nav ul li a.active {
  background-color: #00ff88;
  color: #000;
  border-radius: 5px;
}




/* DROPDOWN */
.submenu {
  display: none;
  position: absolute;
  background-color: #333;
  background-size: covers;
  
  list-style: none;
  top: 100%;
  left: 0;
  min-width: 200px;
  z-index: 999;
}

.submenu li a {
  display: block;
  padding: 10px 15px;
  color: white;
}

.submenu li a:hover {
  background-color: #00ff88;
  color: black;
}

.dropdown:hover .submenu {
  display: block;
}

/* HERO SECTION */
.hero {
  background-image: url('bengkels.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding: 100px 30px;
  text-align: center;
  border-radius: 0; /* sudut tajam */
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* gelapkan agar teks terbaca */
  z-index: 0;
}

.hero h1,
.hero h3,
.hero p,
.hero a {
  position: relative;
  z-index: 1;
}

.hero h3 {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 400;
}

.hero h1 {
  font-size: 42px;
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 20px;
}

.hero p {
  font-size: 18px;
  margin-bottom: 30px;
}


.btn-wa {
  background-color: #25D366;
  color: white;
  padding: 12px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s;
}

.btn-wa:hover {
  background-color: #1ebe5b;
}

/* LAYANAN BOX */
.layanan-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 30px 15px;
  
}

.layanan-box.dua-tak {
  background-image: url('tampilan\ 2stroke.jpg');
  background-size: cover;
  background-position: center;
  color: white; /* agar teks terlihat jika gambar gelap */
  width: 30%;
  height: 400px;
}

.layanan-box.empat-tak {
  background-image: url('sempel4\ tak.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  width: 30%;
  height: 400px;

}

.kontak-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.layanan-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px;
  justify-content: center;
}

.layanan-box {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;
  color: white;
  padding: 20px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.layanan-box:hover {
  transform: scale(1.03);
}

.layanan-box.besar {
  width: 50%;
  height: 500px;
  background-image: url('tampilan\ 2stroke.jpg');
}

.layanan-box.kecil {
  width: 40%;
  height: 500px;
  background-image: url('sempel4\ tak.jpg');
}

.teks-layanan {
  background: rgba(0, 0, 0, 0.5); /* Lapisan gelap untuk keterbacaan teks */
  padding: 20px;
  border-radius: 8px;
}

.teks-layanan h3 {
  margin: 0 0 10px;
  font-size: 24px;
}

.teks-layanan p {
  margin: 0;
  font-size: 16px;
}


.kontak-btn img {
  vertical-align: middle;
}

.instagram {
  background-color: #e1306c;
  color: white;
}

.instagram:hover {
  background-color: #c72a5f;
}

.whatsapp {
  background-color: #25D366;
  color: white;
}

.whatsapp:hover {
  background-color: #1eb653;
}


.layanan-box:hover {
  transform: translateY(-5px);
}

.teks-layanan h3 {
  margin-bottom: 10px;
  color: #00aa66;
}

/* TABEL SERVIS */
table {
  width: 90%;
  margin: 30px auto;
  border-collapse: collapse;
  background: white;
}

table th,
table td {
  border: 1px solid #ddd;
  padding: 12px 15px;
  text-align: center;
}

table th {
  background-color: #00aa66;
  color: white;
}

.catatan {
  text-align: center;
  font-size: 0.95rem;
  padding: 10px 20px;
  margin-top: 10px;
}

/* FOOTER */
footer {
  background-color: rgb(64, 74, 80) ;
  color: white;
  text-align: center;
  padding: 30px 20px;
  margin-top: 40px;
}

footer section#kontak h2 {
  margin-bottom: 15px;
  font-size: 1.2rem;
}

footer button {
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 8px;
}

footer img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

footer img:hover {
  transform: scale(1.1);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    align-items: flex-start;
  }

  nav ul {
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }

  /* .layanan-container {
    flex-direction: column;
    align-items: center;
  } */

  table {
    font-size: 0.9rem;
  }

  .btn-wa {
  display: inline-block;
  background-color: #25D366; /* Warna hijau WhatsApp */
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-wa:hover {
  background-color: #1ebe5d;
}


}

@media (max-widht: 700px) {
 .btn-responsive {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #00ff88;
 }
}
  </style>
</body>
</html>
