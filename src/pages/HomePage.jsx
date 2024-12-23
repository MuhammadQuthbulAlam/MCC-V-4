import HeroImage from "../assets/images/MCC.jpg";
import AboutImage from "../assets/images/MCC2.jpg";
import org from "../assets/images/struktur.png";
import komite from "../assets/images/komite-ekraf.png";
// Desa Tematik
import desa1 from "../assets/images/Desa/Borogojol.png";
import desa_2 from "../assets/images/Desa/Payung.png";
import desa_3 from "../assets/images/Desa/Cicenang.png";
import desa_4 from "../assets/images/Desa/Cisambeng.png";
import desa_5 from "../assets/images/Desa/Jatisur.png";
import desa_6 from "../assets/images/Desa/Leuwilaja.png";
import desa_7 from "../assets/images/Desa/Nanggerang.png";
import desa_8 from "../assets/images/Desa/Nunuk.png";
import desa_9 from "../assets/images/Desa/Pasiripis.png";
import desa_10 from "../assets/images/Desa/Putri Dalem.png";
import desa_11 from "../assets/images/Desa/Rajagaluh Kidul.png";
import desa12 from "../assets/images/Desa/Cimuncang.png";
// PPTX
import pptx_1 from "../assets/images/Gedung/1.1.jpg";
import pptx_2 from "../assets/images/Gedung/1.2.jpg";
import pptx_3 from "../assets/images/Gedung/1.3.jpg";
import pptx_4 from "../assets/images/Gedung/1.4.jpg";
import pptx_5 from "../assets/images/Gedung/1.5.jpg";
import pptx_6 from "../assets/images/Gedung/1.6.jpg";
import pptx_7 from "../assets/images/Gedung/1.7.jpg";
import pptx_8 from "../assets/images/Gedung/1.8.jpg";
import pptx_9 from "../assets/images/Gedung/1.9.jpg";
import pptx_10 from "../assets/images/Gedung/1.10.jpg";
import pptx_11 from "../assets/images/Gedung/1.11.jpg";
import pptx_12 from "../assets/images/Gedung/1.12.jpg";
import pptx_13 from "../assets/images/Gedung/1.13.jpg";
// File
import cimuncang from "../assets/DesaTematik/CIMUNCANG.pdf";
import borogojol from "../assets/DesaTematik/BOROGOJOL.pdf";
import cicenang from "../assets/DesaTematik/CICENANG.pdf";
import cisambeng from "../assets/DesaTematik/CISAMBENG.pdf";
import rajagaluh from "../assets/DesaTematik/RAJAGALUH KIDUL.pdf";
import nunuk from "../assets/DesaTematik/NUNUK.pdf";
import nanggerang from "../assets/DesaTematik/NANGGERANG.pdf";
import payung from "../assets/DesaTematik/PAYUNG.pdf";
import pasiripis from "../assets/DesaTematik/PASIRIPIS.pdf";
import putridalem from "../assets/DesaTematik/PUTRI DALEM.pdf";
import leuwilaja from "../assets/DesaTematik/LEUWILAJA.pdf";
import jatisura from "../assets/DesaTematik/JATISURA.pdf";
import "./Contact.css";
import Swal from "sweetalert2";
// Download
import alur_mcc from "../assets/images/alur_mcc.pdf";
// Fasilitas
import office from "../assets/images/office.jpeg";
import fashion from "../assets/images/gallery-fashion.jpeg";
import workshop from "../assets/images/workshop-office.jpeg";
import art from "../assets/images/gallery-art.jpeg";
import pameran from "../assets/images/Ruang-Pameran.jpeg";
import working from "../assets/images/Co-working-Space1.jpeg";
import working1 from "../assets/images/Co-working-Space.jpeg";
import pertemuan from "../assets/images/Ruang-pertemuan.jpeg";
import music from "../assets/images/gallery-music.jpeg";
// Situs Terkait
import opendata from "../assets/images/situs/opendata.png";
import pemerintah from "../assets/images/situs/majalengka.png";
import disparbud from "../assets/images/situs/jabar.png";
import kemenekraf from "../assets/images/situs/kemenekraf.png";
import diskominfo from "../assets/images/situs/diskominfo.png";
import kreasi from "../assets/images/situs/kreasi-jabar.png";

const HomePage = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "86f9b95d-65fa-41e0-8912-a7bed2873302");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Berhasil!",
        text: "Pesan Berhasil Terkirim!",
        icon: "success",
      });
    }
  };
  return (
    <div className="homepage pb-10" id="home">
      <div className="container mx-auto px-9 xl:px-20 lg:px-20">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Majalengka
              <span className="font-bold text-sky-400"> Creative Center</span>
            </h1>
            <p className="text-base/8 mb-7 text-justify">
              Majalengka Creative Center merupakan bentuk stimulasi yang
              diberikan kepada pelaku kreatif di Majalengka, terutama kepada
              generasi muda guna menunjang industri kreatif dalam meningkatkan
              ekonomi.
            </p>
            <a
              href="#about"
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full hover:scale-125"
            >
              Tentang Kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="md:w-full w-[400px] mx-auto  md:m-0 rounded-lg"
            />
          </div>
        </div>
        {/* SUbsektor Ekraf*/}
        <div className="container mx-auto pb-5 pt-5" id="Ekraf">
          <h2 className="text-2xl font-medium mb-4">
            17 Subsektor
            <span className="text-sky-400 font-bold"> Ekonomi Kreatif</span>
          </h2>
          <div className="box bg-white shadow rounded-lg flex flex-row gap-6 overflow-x-auto justify-between pt-5 pb-5 px-5">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-gamepad-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">
                Game Developer
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-scissors-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">Kriya</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-home-office-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">
                Desain Interior
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-music-2-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">Musik</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-brush-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">Seni Rupa</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-dropbox-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">
                Desain Produk
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-handbag-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">Fashion</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-bowl-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">Kuliner</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-scissors-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">
                Film, Animasi & Video
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-scissors-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">Fotografi</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-scissors-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">
                Desain Komunikasi Visual
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-scissors-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">
                Televisi & Radio
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-scissors-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">Arsitektur</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-scissors-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">Periklanan</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-scissors-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">
                Seni Pertunjukan
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-scissors-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">Penerbitan</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
                <i className="ri-scissors-line flex justify-center text-2xl text-white"></i>
              </div>
              <p className="text-center text-sm pt-3 font-medium">Aplikasi</p>
            </div>
            {/* Add more subsector items here */}
          </div>
        </div>
        {/*About*/}
        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-10 pt-5"
          id="about"
        >
          <div className="box md:order-1 order-2">
            <img
              src={AboutImage}
              alt="Aboout Image"
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto rounded-lg"
            />
          </div>
          <div className="pt-10 box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-2xl font-medium mb-7">
              Gedung Majalengka
              <span className="font-bold text-sky-400"> Creative Center</span>
            </h1>
            <p className="text-base/loose text-justify">
              <span className="font-bold">
                Gedung Majalengka Creative Center
              </span>{" "}
              telah berdiri di Kabupaten Majalengka. Bangunan yang ditujukan
              sebagai ruang industri kreatif tersebut diresmikan pada 11 Januari
              2023. Dalam proses peresmian, hadir Menteri Koperasi dan Usaha
              Kecil Menengah Teten Masduki, Wakil Gubernur Jabar Uu Ruzhanul
              Ulum, Bupati Majalengka Karna Sobahi, serta sejumlah tokoh
              Forkopimda. Kegiatan peresmian tersebut juga dihadiri Kepala Dinas
              Pariwisata dan Kebudayaan Provinsi Jawa Barat Benny Bachtiar yang
              diwakili Kepala Bidang Industri Pariwisata Rispiaga. Menurut
              Menteri Koperasi UMKM, keberadaan Gedung Creative Center
              Majalengka mejadi sebuah solusi dari ancaman resesi ekonomi.
              Masyarakat khususnya generasi muda bisa memanfaatkan Gedung
              Creative Center ini sebagai sarana pengembangan industri kreatif
              serta pemasaran produk-produk lokal.
            </p>
          </div>
        </div>

        {/*Struktur Organisasi Ekraf*/}
        <div className="pt-32" id="organisasi">
          <h1 className="text-center lg:text-2xl/tight text-2xl font-medium mb-7">
            Komite Ekonomi{" "}
            <span className="font-bold text-sky-400">Kreatif</span>
            <img
              src={komite}
              className="w-52 mx-auto mt-5"
              alt="komite ekraf"
            />
          </h1>
          {/*Tentang Ekraf*/}
          <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3">
            <div className="box pt-5">
              <div className="text-center bg-white shadow rounded-lg w-auto h-auto items-center">
                <h1
                  className="text-center lg:text-2xl/tight text-2xl font-medium mb-7"
                  id="Tentang-Ekraf"
                >
                  Tentang Komite{" "}
                  <span className="font-bold text-sky-400">Ekraf</span>
                </h1>
                <p className="text-center px-2 bg-white shadow rounded-lg w-auto h-auto items-center py-1.5 text-wrap">
                  Komite pengembangan ekonomi kreatif majalengka adalah lembaga
                  mitra pemerintahan dalam penyusunan kegiatan pengembangan,
                  mengarahkan serta mengawal pelaksanaan program aksi
                  pengembangan ekonomi kreatif di kabupaten majalengka sesuai
                  dengan keputusan bupati majalengka nomor
                  eka.02.01/kep.513-bapedalitbang/2023.
                </p>
              </div>
            </div>
            {/*Visi & Misi*/}
            <div className="box pt-5" id="visimisi">
              <div className="text-center bg-white shadow rounded-lg w-auto h-auto items-center">
                <h1 className="text-center lg:text-2xl/tight text-2xl font-medium mb-7">
                  Visi & Misi{" "}
                  <span className="font-bold text-sky-400">Ekraf</span>
                </h1>
                <h3 className="pt-1 text-2xl font-medium text-sky-400">Visi</h3>
                <p className="text-justify px-2 text-wrap">
                  Terwujudnya ekonomi kreatif sebagai sektor potensial unggulan
                  yang mendukung pertumbuhan ekonomi di kabupaten majalengka.
                </p>
                <h3 className="pt-5 text-2xl font-medium text-sky-400">Misi</h3>
                <p className="text-justify px-2 text-wrap">
                  <span className="font-bold">1.</span> Mengoptimalisasi
                  aktivasi gedung majalengka creative center sebagai ruang
                  edukasi kreasi dan ekspresi bagi para pelaku ekonomi kreatif
                  di kabupaten majalengka
                  <p>
                    <span className="font-bold">2.</span> Mendorong pertumbuhan
                    dan perkembangan ekosistem ekonomi kreatif di kabupaten
                    majalengka
                  </p>
                  <p>
                    <span className="font-bold">3.</span> Mendorong pemerintah
                    kab majalengka dalam menerbitkan peraturan daerah tentang
                    ekonomi kreatif sebagai payung hukum bagi tumbuh
                    kembangangnya ekosistem ekonomi kreatif di kabupaten
                    majalengka
                  </p>
                </p>
              </div>
            </div>
          </div>
          <h1
            className="pt-5 text-center lg:text-2xl/tight text-2xl font-medium mb-7"
            id="struktur"
          >
            Struktur Organisasi{" "}
            <span className="font-bold text-sky-400">Ekraf</span>
          </h1>
          <img
            src={org}
            alt="Struktur Organisasi"
            className="mt-10 text-center lg:w-[500px] w-[400px] md:m-50 mx-auto rounded-lg shadow"
          />
          <h2
            className="mt-10 text-center lg:text-2xl/tight text-1xl font-medium mb-2"
            id="perencanaan"
          >
            PERENCANAAN PENGEMBANGAN POTENSI EKONOMI KREATIF KABUPATEN
            MAJALENGKA
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 bg-white shadow rounded-lg px-2 py-2">
            <img src={pptx_1} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_2} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_3} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_4} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_5} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_6} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_7} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_8} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_9} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_10} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_11} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_12} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_13} alt="1" className="mt-10 rounded-lg" />
          </div>
        </div>
        {/*Fasilitas*/}
        <div className="pt-32" id="fasilitas">
          <h1 className="text-center lg:text-2xl/tight text-2xl font-medium mb-7">
            Fasilitasi Gedung{" "}
            <span className="font-bold text-sky-400">MCC</span>
          </h1>
          <p className="pt-1 text-center">
            Fasilitas Majalengka Creative Center
          </p>
          <div className="fasilitas-box pt-12 grid md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-6">
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={office} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Ruang Kantor
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={fashion} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Gallery Fashion
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={art} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Gallery Lukis
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={working1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                CO-Working Space
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={pameran} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Ruang Pameran
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={working} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                CO-Working Space
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={pertemuan} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Ruang Pertemuan
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={workshop} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Ruang Workshop
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={music} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Studio Musik
              </h3>
            </div>
          </div>
        </div>

        {/* Alur Pengajuan Gedung MCC */}
        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3">
          <div
            className="pt-10 mt-5 pb-5 bg-white shadow rounded-lg"
            id="pengajuan"
          >
            <h2 className="text-center lg:text-2xl/tight text-1xl font-medium mb-2">
              Download Alur Pengajuan Gedung Untuk Kegiatan MCC di bawah ini
            </h2>
            <i className="ri-download-cloud-2-line flex px-5 text-3xl justify-center"></i>
            <a href={alur_mcc}>
              <button
                type="submit"
                className="flex px-5 mt-3 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                Download File
              </button>
            </a>
          </div>
          {/* Link Pelaku Ekraf */}
          <div
            className="pt-10 mt-5 pb-5 bg-white shadow rounded-lg"
            id="registrasi"
          >
            <h2 className="text-center lg:text-2xl/tight text-1xl font-medium mb-2">
              Registrasi Pelaku Ekraf Majalengka
            </h2>
            <i className="ri-download-cloud-2-line flex px-5 text-3xl justify-center"></i>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSelUgFVqrPRqGerTgU7n5aXLraDRnkmlrwgw9adufF6T-E_ug/viewform">
              <button
                type="submit"
                className="flex px-5 mt-3 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                Registrasi Sekarang
              </button>
            </a>
          </div>
        </div>
        {/*Desa Kreatif*/}
        <div className="profile pt-32 z-50" id="profile">
          <h1 className="text-center lg:text-2xl/tight text-2xl font-medium mb-2">
            Desa <span className="font-bold text-sky-400">Tematik</span>
          </h1>
          <p className="text-center">Desa Tematik Kreatif</p>
          <div className="profile-box pt-12 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            {/* Profile 1 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa1} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Borogojol</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={borogojol}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>
                </button>
              </a>
            </div>
            {/* Profile 1 End*/}
            {/* Profile 2 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_2} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Payung</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={payung}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>
                </button>
              </a>
            </div>
            {/* Profile 2 End*/}
            {/* Profile 3 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_3} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Cicenang</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={cicenang}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>
                </button>
              </a>
            </div>
            {/* Profile 3 End*/}
            {/* Profile 4 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_4} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Cisambeng</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={cisambeng}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>
                </button>
              </a>
            </div>
            {/* Profile 4 End*/}
            {/* Profile 5 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_5} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Jatisura</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={jatisura}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 5 End*/}
            {/* Profile 6 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_6} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Leuwilaja</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={leuwilaja}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 6 End*/}
            {/* Profile 7 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_7} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Nanggerang</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={nanggerang}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 7 End*/}
            {/* Profile 8 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_8} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Nunuk Baru</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={nunuk}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 8 End*/}
            {/* Profile 9 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_9} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Pasiripis</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={pasiripis}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 9 End*/}
            {/* Profile 10 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_10} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Putri Dalem</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={putridalem}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 10 End*/}
            {/* Profile 11 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_11} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2 ">
                Desa Rajagaluh Kidul
              </h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={rajagaluh}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 11 End*/}
            {/* Profile 12 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa12} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Cimuncang</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={cimuncang}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 12 End*/}
          </div>
        </div>
        {/*Kontak*/}
        <div className="kontak pt-24" id="kontak">
          <h1 className="text-center lg:text-2xl/tight text-2xl font-medium mb-2">
            Kontak <span className="font-bold text-sky-400">Kami</span>
          </h1>
          <section className="contact">
            <form onSubmit={onSubmit}>
              <div className="input-box">
                <label>Nama Lengkap</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Masukkan Nama Anda"
                  name="name"
                  required
                />
              </div>
              <div className="input-box">
                <label>Email</label>
                <input
                  type="email"
                  className="field"
                  placeholder="Masukkan Email Anda"
                  name="email"
                  required
                />
              </div>
              <div className="input-box">
                <label>Pesan Anda</label>
                <textarea
                  name="message"
                  className="field mess"
                  placeholder="Masukkan Pesan Anda"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex px-5 mx-0 bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
        {/* Maps */}
        <div className="flex items-center rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.755440848336!2d108.23259038137675!3d-6.836432259248356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f2f86d8f48b7f%3A0x2608311136d4c262!2sGedung%20MCC%20(%20Majalengka%20Creative%20Center%20)!5e0!3m2!1sen!2sid!4v1731155851875!5m2!1sen!2sid"
            width="1350"
            height="350"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="flex items-center rounded-lg"
          ></iframe>
        </div>
        {/* Situs Terkait */}
        <div className="situs pt-10" id="situs">
          <h1 className="text-center lg:text-2xl/tight text-2xl font-medium mb-2">
            Situs <span className="font-bold text-sky-400">Terkait</span>
          </h1>
          <ul className="box px-5 bg-white shadow rounded-lg py-5 my-5">
            <div className="flex flex-row gap-24 justify-evenly overflow-x-auto pt-10 pb-40 my-1 mx-auto px-1">
              <li className="size-24 mx-5">
                <a href="https://kemenparekraf.go.id/">
                  <img src={kemenekraf} alt="Kemenekraf" />
                  <p className="text-center text-sm font-medium hover:text-sky-500 pt-8">
                    Kementrian Pariwisata dan Ekonomi Kreatif
                  </p>
                </a>
              </li>
              <li className="size-24">
                <a href="https://disparbud.jabarprov.go.id/">
                  <img src={disparbud} alt="Disparbud Jabar" />
                  <p className="text-center text-sm font-medium hover:text-sky-500 pt-8">
                    Dinas Pariwisata dan Kebudayaan Jawa Barat
                  </p>
                </a>
              </li>

              <li className="size-20">
                <a href="https://kreasijabar.id/ekraf?city_ids=252">
                  <img src={kreasi} alt="Pemerintah Kab. Majalengka" />
                  <p className="text-center text-sm font-medium hover:text-sky-500 pt-3">
                    Kreasi Jabar
                  </p>
                </a>
              </li>
              <li className="size-24">
                <a href="https://majalengkakab.go.id/">
                  <img src={pemerintah} alt="Pemerintah Kab. Majalengka" />
                  <p className="text-center text-sm font-medium hover:text-sky-500 pt-8">
                    Pemerintah Kabupaten Majalengka
                  </p>
                </a>
              </li>

              <li className="size-24">
                <a href="https://data.majalengkakab.go.id/">
                  <img src={opendata} alt="Open Data Kab. Majalengka" />
                  <p className="text-center text-sm font-medium hover:text-sky-500 pt-8">
                    Open Data Kabupaten Majalengka
                  </p>
                </a>
              </li>
              <li className="size-24">
                <a href="https://diskominfo.majalengkakab.go.id/">
                  <img src={diskominfo} alt="Diskominfo Kab. Majalengka" />
                  <p className="text-center text-sm font-medium hover:text-sky-500 pt-8">
                    Dinas Komunikasi dan Informatika Kabupaten Majalengka
                  </p>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
