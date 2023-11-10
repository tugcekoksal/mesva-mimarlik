function NelerYapiyoruz({ icon, title, description }) {
  const iconSize = {
    fontSize: "3rem",
  };
  return (
    <div className="card px-6 md:px-[50px] py-10 border hover:shadow-xl text-center bg-[#f5f5f5] hover:bg-white group">
      <div className="hover:scale-105 transition-all duration-300 ease-in-out">
        <span
          class="material-symbols-outlined mb-4 mx-auto   group-hover:text-blue-600"
          style={iconSize}
        >
          {icon}
        </span>

        <h2 className="font-semibold text-md mb-2 py-4 ">{title}</h2>
        <p className="font-light text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default NelerYapiyoruz;
