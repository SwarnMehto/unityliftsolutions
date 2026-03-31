import { useState } from "react";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";

export default function AskUnityChatbot() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "Hello 👋 Welcome to Unity Lift Solutions.\n\nWe provide lift installation, maintenance & panel solutions.\n👉 Ask anything or submit your enquiry in the Enquiry tab.",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // ✅ CHAT LOGIC UPDATED
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    let botReply =
      "Thank you for your message 😊\n\nWe provide lift installation, maintenance and panel solutions.\n👉 Please submit your enquiry in the Enquiry tab for quick response.";

    const text = input.toLowerCase();

    if (text.includes("price") || text.includes("cost")) {
      botReply =
        "💰 Lift pricing depends on:\n• Floors\n• Lift type\n• Features\n\n👉 Submit your enquiry to get exact quotation.";
    } else if (text.includes("panel")) {
      botReply =
        "⚡ Lift Control Panels:\n• Automatic Panels\n• Smart Controllers\n• Safety Systems\n\n👉 Submit enquiry to get full details.";
    } else if (
      text.includes("service") ||
      text.includes("repair") ||
      text.includes("maintenance")
    ) {
      botReply =
        "🔧 We provide 24/7 lift service & maintenance.\n\n👉 Submit your enquiry and our team will contact you quickly.";
    } else if (text.includes("installation") || text.includes("new lift")) {
      botReply =
        "🏗️ We provide complete lift installation.\n\n👉 Share your requirement in enquiry form.";
    } else if (text.includes("contact") || text.includes("number")) {
      botReply =
        "📞 Call us at +91 8700116436\n\n👉 Or submit enquiry and we will contact you.";
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        sender: "bot",
        text: botReply,
      },
    ]);

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ ENQUIRY SUBMIT UPDATED
  const handleEnquirySubmit = (e) => {
    e.preventDefault();

    console.log("Chatbot enquiry submitted:", formData);

    alert("Enquiry Submitted Successfully!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    setActiveTab("chat");

    // 👇 CHAT ME THANK YOU MESSAGE
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text:
          "✅ Thank you for submitting your enquiry!\n\nOur team will contact you shortly.\n\n📞 You can also call us at +91 8700116436",
      },
    ]);
  };

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 left-5 z-[9999] flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.4)] transition hover:scale-105"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          {open ? <FaTimes /> : <FaRobot />}
        </span>
        Ask Unity
      </button>

      {/* POPUP */}
      {open && (
        <div className="fixed bottom-24 left-5 z-[9999] flex h-[520px] w-[350px] flex-col overflow-hidden rounded-3xl border bg-white shadow-2xl md:w-[400px]">
          
          {/* HEADER */}
          <div className="bg-gradient-to-r from-[#0f3cc9] to-[#2563eb] px-5 py-4 text-white">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">Ask Unity</h3>
                <p className="text-xs">Lift support assistant</p>
              </div>

              <button onClick={() => setOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {/* TABS */}
            <div className="mt-3 flex rounded-xl bg-white/20 p-1">
              <button
                onClick={() => setActiveTab("chat")}
                className={`flex-1 rounded-lg py-1 ${
                  activeTab === "chat" ? "bg-white text-blue-600" : ""
                }`}
              >
                Chat
              </button>

              <button
                onClick={() => setActiveTab("enquiry")}
                className={`flex-1 rounded-lg py-1 ${
                  activeTab === "enquiry" ? "bg-white text-blue-600" : ""
                }`}
              >
                Enquiry
              </button>
            </div>
          </div>

          {/* CHAT */}
          {activeTab === "chat" ? (
            <>
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {messages.map((msg, i) => (
                  <div key={i} className={`mb-3 ${msg.sender === "user" ? "text-right" : ""}`}>
                    <div
                      className={`inline-block rounded-xl px-3 py-2 text-sm ${
                        msg.sender === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-white"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 border-t flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type..."
                  className="flex-1 border px-3 py-2 rounded-lg"
                />
                <button
                  onClick={handleSend}
                  className="bg-blue-600 text-white p-2 rounded-full"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </>
          ) : (
            /* ENQUIRY FORM */
            <div className="p-4 space-y-3">
              <form onSubmit={handleEnquirySubmit}>
                <input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border p-2 rounded"
                />
                <input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border p-2 rounded mt-2"
                />
                <input
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mt-2"
                />
                <textarea
                  name="message"
                  placeholder="Requirement"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border p-2 rounded mt-2"
                />
                <button
                  type="submit"
                  className="w-full mt-3 bg-blue-600 text-white py-2 rounded"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}