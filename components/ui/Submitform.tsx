'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseclient'; // correct path if you're using alias

export default function SubmitForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.from('users').insert([formData]);

    if (error) {
      setStatus(`❌ Error: ${error.message}`);
    } else {
      setStatus('✅ Successfully submitted!');
      setFormData({ name: '', email: '' }); // clear form
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Submit Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Submit
        </button>
        {status && <p className="mt-2 text-sm">{status}</p>}
      </form>
    </div>
  );
}
