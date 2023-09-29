import { useState } from "react";
function IletisimFormu() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_pzj24ye",
        "template_p3xtgqh",
        e.target,
        "ajNw8hHBtWDc-5DQT"
      );
      if (result.text === "OK") {
        console.log("E-posta başarıyla gönderildi.");
      } else {
        console.error("E-posta gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("E-posta gönderilirken bir hata oluştu:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto p-4 space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2 font-semibold text-gray-700">
          Adınız:
        </label>
        <input
          type="text"
          id="name"
          name="user_name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 font-semibold text-gray-700">
          E-posta:
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 font-semibold text-gray-700">
          Mesajınız:
        </label>
        <textarea
          id="message"
          name="user_message"
          value={formData.message}
          onChange={handleChange}
          className="p-2 border rounded-md"
          rows="4"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full p-2 font-semibold bg-slate-500 text-white rounded-md hover:bg-slate-600 transition-colors duration-300"
      >
        Gönder
      </button>
    </form>
  );
}

export default IletisimFormu;
