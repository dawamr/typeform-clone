import { useState } from 'react';

const questions = [
  { label: 'Nama Startup', name: 'startup_name', type: 'text' },
  { label: 'Tahun Berdiri', name: 'founded_year', type: 'number' },
  { label: 'Address', name: 'address', type: 'text' },
  { label: 'Address line 2', name: 'address_line2', type: 'text' },
  { label: 'City/Town', name: 'city', type: 'text' },
  { label: 'State/Region/Province', name: 'state', type: 'text' },
  { label: 'Zip/Post Code', name: 'zip', type: 'text' },
  { label: 'Country', name: 'country', type: 'text' },
  { label: 'Website', name: 'website', type: 'url' },
  { label: 'Nama Pendiri', name: 'founder_name', type: 'text' },
  { label: 'Email', name: 'founder_email', type: 'email' },
  { label: 'Nomor HP/WA', name: 'founder_phone', type: 'tel' },
  { label: 'Kontak Person Lain (opsional)', name: 'contact_person', type: 'text' },
  { label: 'Jabatan', name: 'contact_position', type: 'text' },
  { label: 'Email', name: 'contact_email', type: 'email' },
  { label: 'Nomor Telepon', name: 'contact_phone', type: 'tel' },
  { label: 'Deskripsi Startup (1 sentence Pitch)', name: 'pitch', type: 'text' },
  { label: 'Jelaskan secara singkat tentang startup Anda (maksimal 300 kata)', name: 'description', type: 'textarea' },
  { label: 'Apa masalah yang ingin dipecahkan oleh startup Anda?', name: 'problem', type: 'textarea' },
  { label: 'Apa solusi yang ditawarkan oleh startup Anda?', name: 'solution', type: 'textarea' },
  { label: 'Apa keunggulan kompetitif startup Anda?', name: 'competitive_advantage', type: 'textarea' },
  { label: 'Apa target pasar Anda?', name: 'target_market', type: 'text' },
  { label: 'Apakah startup Anda sudah menghasilkan revenue?', name: 'revenue', type: 'text' },
  { label: 'Apa pencapaian utama startup Anda sejauh ini?', name: 'achievements', type: 'textarea' },
  { label: 'Sebutkan tim inti startup Anda dan jelaskan peran mereka', name: 'team', type: 'textarea' },
  { label: 'Apakah startup Anda telah/pernah mendapatkan pendanaan?', name: 'funding', type: 'textarea' },
  { label: "Apa yang Anda harapkan dari partisipasi di 'AI Empower Connect'?", name: 'expectations', type: 'textarea' },
  { label: 'Apakah Anda sedang mencari pendanaan?', name: 'seeking_funding', type: 'text' },
  { label: 'Selain pendanaan Apakah Startup Anda mencari partnership?', name: 'partnership', type: 'textarea' },
  { label: 'Lampiran Pitch deck (Link Drive)', name: 'pitch_deck', type: 'url' },
  { label: 'Link video demo (opsional)', name: 'demo_video', type: 'url' },
];

const Form = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1);
  };
  const prevQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };
  return (
    <div class='w-full max-w-2xl'>
      <div class='mb-8'>
        <h1 class='text-4xl font-semibold mb-2'>
          {currentQuestion + 1}→ {questions[currentQuestion].label}
        </h1>
        <p class='text-xl opacity-80'>{questions[currentQuestion].description}</p>
      </div>
      <div class='relative'>
        <input
          type={questions[currentQuestion].type}
          placeholder='Ketik jawaban Anda di sini...'
          class='w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg text-2xl placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300'
        />
        <button
          class='absolute right-3 bottom-3 px-4 py-1 bg-white text-pink-600 rounded text-sm font-semibold hover:bg-opacity-90 transition-colors duration-200'
          onClick={nextQuestion}
        >
          OK <span class='text-xs opacity-70 ml-1'>press Enter ↵</span>
        </button>
        {currentQuestion > 0 && (
          <button
            class='absolute left-3 bottom-3 px-4 py-1 bg-white text-pink-600 rounded text-sm font-semibold hover:bg-opacity-90 transition-colors duration-200'
            onClick={prevQuestion}
          >
            Previous
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
