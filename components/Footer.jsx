import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <h1 className="text-xl font-bold mb-2">MesVA</h1>
        <p className="mb-2">© 2023 Mesva. Tüm hakları saklıdır.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">
            Anasayfa
          </a>
          <a href="/" className="hover:text-gray-400">
            Hakkımızda
          </a>
          <Link href="/iletisim" className="hover:text-gray-400">
            İletişim
          </Link>
          <Link href="#" className="hover:text-gray-400">
            Gizlilik Politikası
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
