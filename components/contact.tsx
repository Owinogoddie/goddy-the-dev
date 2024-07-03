import React from 'react';

const Contact = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl text-center font-bold mb-8">Contact Me</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded bg-transparent" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded bg-transparent" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea id="message" rows={4} className="w-full p-2 border rounded bg-transparent"></textarea>
        </div>
        <button type="submit" className="bg-black-200 w-full text-white px-4 py-2 rounded">Send</button>
      </form>
    </section>
  );
};

export default Contact;