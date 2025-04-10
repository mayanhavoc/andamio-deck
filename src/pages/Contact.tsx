'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    setLoading(true); // 👈 Start loading

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false); // 👈 Stop loading
    }
  };

  return (
    <div className="min-h-screen w-full bg-white px-6 py-16 text-slate-800 md:px-16">
      <div className="mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-primary mb-4 text-4xl font-bold md:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl">
            We’d love to hear from you. Whether you're an investor, contributor,
            or partner — let's connect.
          </p>
        </motion.div>
      </div>

      {!submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-2xl space-y-6"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              value={formData.name}
              className="focus:border-accent focus:ring-accent w-full rounded-md border border-gray-300 px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={formData.email}
              className="focus:border-accent focus:ring-accent w-full rounded-md border border-gray-300 px-4 py-3"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-semibold"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              onChange={handleChange}
              value={formData.message}
              className="focus:border-accent focus:ring-accent w-full rounded-md border border-gray-300 px-4 py-3"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-primary hover:bg-accent flex items-center justify-center rounded-md px-6 py-3 font-semibold text-white shadow transition duration-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <svg
                className="h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            ) : (
              'Send Message'
            )}
          </button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-12 text-center"
        >
          <h2 className="text-primary mb-4 text-3xl font-bold">Thank you!</h2>
          <p className="text-lg">
            Your message has been sent. We'll get back to you as soon as
            possible.
          </p>
        </motion.div>
      )}
    </div>
  );
}
