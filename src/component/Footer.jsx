const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">
          Copyright &copy; 2024
          <span className="font-bold">
            {" "}
            Majalengka <span className="text-sky-400">Creative Center</span>
          </span>
        </p>
        <div className="social-footer flex items-center sm:gap-7 gap-1">
          <a href="https://www.facebook.com/profile.php?id=61558329437743">
            <i className="ri-facebook-circle-fill text-2xl hover:text-sky-700"></i>
          </a>
          <a href="https://wa.me/082312001695">
            <i className="ri-whatsapp-fill text-2xl hover:text-green-400"></i>
          </a>
          <a href="https://youtube.com/@komiteekrafmajalengka?si=1C31zZP2ZtZp59F8">
            <i className="ri-youtube-fill text-2xl hover:text-red-600"></i>
          </a>
          <a href="https://www.instagram.com/ekrafmjlka.official/">
            <i className="ri-instagram-fill text-2xl hover:text-pink-500"></i>
          </a>
          <a href="https://www.tiktok.com/@ekrafmjlka.official?_t=8rHT4Cf6N9U&_r=1">
            <i className="ri-tiktok-fill text-2xl hover:text-pink-500"></i>
          </a>
        </div>
      </div>
      <p className="mx-4 bg-slate-950 text-white px-4 text-center pt-5 pb-5">
        Creative Center, Jl. Suha, Majalengka Wetan, Kec. Majalengka, Kabupaten
        Majalengka, Jawa Barat 45411
      </p>
    </div>
  );
};

export default Footer;
