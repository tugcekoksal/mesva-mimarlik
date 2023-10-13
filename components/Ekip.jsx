import EkipCard from "./EkipCard";

const Ekip = () => {
  return (
    <div className="flex flex-col mx-auto mb-10">
      <h1 className="container text-center text-xl font-semibold uppercase">
        Ekibimiz
      </h1>
      <div className="container  flex flex-wrap mx-auto my-8 justify-center filter grayscale">
        <EkipCard
          isim={"Sinem Çeri"}
          unvan={"Kurucu Mimar"}
          okul={"İstanbul Kültür Üniversitesi"}
          baseUrl={"/ekip/sinem.jpeg"}
        />
        <EkipCard
          isim={"Nurefşan Önal"}
          unvan={"Mimar"}
          okul={"İstanbul Kültür Üniversitesi"}
          baseUrl={"/ekip/avatar.jpeg"}
        />
        <EkipCard
          isim={"A. Merve Mercan"}
          unvan={"Mimar"}
          okul={"İstanbul Zaim Üniversitesi"}
          baseUrl={"/ekip/merve.jpeg"}
        />
      </div>
      <div className="container  flex flex-wrap mx-auto my-8 justify-center filter grayscale">
        <EkipCard
          isim={"Esra Misafir"}
          unvan={"Mimar"}
          okul={"Karadeniz Teknik Üniversitesi"}
          baseUrl={"/ekip/avatar.jpeg"}
        />
        <EkipCard
          isim={"Soner Çeri"}
          unvan={"Stajyer Mimar"}
          okul={"FSM Vakıf Üniversitesi"}
          baseUrl={"/ekip/soner.jpg"}
        />
      </div>
    </div>
  );
};

export default Ekip;
