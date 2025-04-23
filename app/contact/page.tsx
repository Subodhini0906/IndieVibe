export default function ContactPage() {
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
  
        {/* Direct Email Option */}
        <p className="mb-4">
          You can also email us directly at{" "}
          <a href="mailto:hello@stitchandstyle.com" className="text-blue-600 underline">
            hello@stitchandstyle.com
          </a>
        </p>
  
        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              className="w-full border p-2 rounded"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  