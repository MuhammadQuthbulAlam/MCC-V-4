import logo from "../assets/images/LOGO MCC_120822.png";
const Footer = () => {
  return (
    <div className="footer bg-slate-950 shadow mt-20" id="social">
      <div className="pt-5 md:mx-24 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-3 text-sm sm:mx-3">
        <p className="mx-4 bg-slate-950 text-white px-4 text-left pt-5 pb-5">
          <img src={logo} alt="logo" className="w-28" />
          Creative Center, Jl. Suha, Majalengka Wetan, Kec. Majalengka,
          Kabupaten Majalengka, Jawa Barat 45411 <br />
          <div className="pt-3 social-footer flex items-center sm:gap-7 gap-1">
            <a href="https://www.facebook.com/profile.php?id=61558329437743">
              <i className="ri-facebook-circle-fill text-2xl hover:text-sky-700"></i>
            </a>
            <a href="https://wa.me/6282312001695">
              <i className="ri-whatsapp-fill text-2xl hover:text-green-400"></i>
            </a>
            <a href="https://youtube.com/@komiteekrafmajalengka?si=1C31zZP2ZtZp59F8">
              <i className="ri-youtube-fill text-2xl hover:text-red-600"></i>
            </a>
            <a href="https://www.instagram.com/ekrafmjlka.official/">
              <i className="ri-instagram-fill text-2xl hover:text-pink-500"></i>
            </a>
            <a href="https://www.tiktok.com/@ekrafmjlka.official?_t=8rHT4Cf6N9U&_r=1">
              <i className="ri-tiktok-fill text-2xl hover:text-green-300"></i>
            </a>
          </div>
        </p>
        <p className="mx-4 bg-slate-950 text-white px-4 text-left pt-5 pb-5 font-bold">
          Komite Ekonomi Kreatif <br />
          <a href="#Tentang-Ekraf">
            <span className="font-normal">Tentang Komite Ekraf</span>
          </a>
          <br />
          <a href="#visimisi">
            <span className="font-normal">Visi & Misi</span>
          </a>
          <br />
          <a href="#struktur">
            <span className="font-normal">Struktur Organisasi</span>
          </a>
          <br />
          <a href="#perencanaan">
            <span className="font-normal">
              Perencanaan Pengembangan Potensi Ekraf
            </span>
          </a>
        </p>
        <p className="mx-4 bg-slate-950 text-white px-4 text-left pt-5 pb-5 font-bold">
          Gedung MCC
          <br />
          <span className="font-normal">Fasilitas Gedung</span>
          <br />
          <span className="font-normal">Alur Pengajuan Gedung</span>
          <br />
          <span className="font-normal">Registrasi Pelaku Ekraf</span>
          <br />
          <span className="font-normal">Desa Tematik Kreatif</span>
        </p>
      </div>
      <hr />
      <div className="container mx-auto px-4 items-center justify-between text-white text-center">
        <p className="py-4">
          Copyright &copy; 2024
          <span className="font-bold">
            {" "}
            Majalengka <span className="text-sky-400">Creative Center</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
