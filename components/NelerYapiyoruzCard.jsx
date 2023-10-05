function NelerYapiyoruz({ icon, title, description }) {
  return (
    <div className="card px-2 md:px-[50px] py-10 border rounded-lg shadow-lg text-center bg-white ">
      <span class="material-symbols-outlined text-[8rem] mb-4 mx-auto ">
        {icon}
      </span>

      <h2 className="font-semibold text-lg mb-2 py-4 ">{title}</h2>
      <p className="font-light leading-relaxed">{description}</p>
    </div>
  );
}

export default NelerYapiyoruz;
