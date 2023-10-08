function NelerYapiyoruz({ icon, title, description }) {
  const iconSize = {
    fontSize: "3rem",
  };
  return (
    <div className="card px-6 md:px-[50px] py-10 border rounded-lg shadow-lg text-center bg-white ">
      <span class="material-symbols-outlined mb-4 mx-auto " style={iconSize}>
        {icon}
      </span>

      <h2 className="font-semibold text-lg mb-2 py-4 ">{title}</h2>
      <p className="font-light leading-relaxed">{description}</p>
    </div>
  );
}

export default NelerYapiyoruz;
