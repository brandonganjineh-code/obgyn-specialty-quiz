import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';

const questions = [
  { q: 'What kind of patient interactions energize you most?', options: [ { t: 'Urgent, high-stakes, fast-paced decisions', v: 'A' }, { t: 'Long-term relationships and counseling', v: 'B' }, { t: 'Detailed procedural or surgical work', v: 'C' }, { t: 'Helping patients through emotionally sensitive care', v: 'D' } ] },
  { q: 'Which part of your work do you find most rewarding?', options: [ { t: 'Solving complex clinical puzzles', v: 'A' }, { t: 'Performing intricate surgeries', v: 'B' }, { t: 'Supporting patients through life transitions', v: 'C' }, { t: 'Using science and technology to help people achieve goals', v: 'D' } ] },
  { q: 'How do you feel about emergencies and being called in after hours?', options: [ { t: 'Love the adrenaline and teamwork', v: 'A' }, { t: 'Don’t mind occasionally', v: 'B' }, { t: 'Prefer predictable hours', v: 'C' }, { t: 'Avoid if possible — I value schedule control', v: 'D' } ] },
  { q: 'What appeals to you most about OB/GYN?', options: [ { t: 'The mix of medicine and surgery', v: 'A' }, { t: 'Advocacy and social impact', v: 'B' }, { t: 'Women’s health innovation and research', v: 'C' }, { t: 'Procedural care with meaningful patient relationships', v: 'D' } ] },
  { q: 'In surgery, what do you value most?', options: [ { t: 'Speed and efficiency', v: 'A' }, { t: 'Technical precision and reconstruction', v: 'B' }, { t: 'Minimally invasive or fertility-preserving techniques', v: 'C' }, { t: 'Honestly, I’d rather be in clinic', v: 'D' } ] },
  { q: 'How do you handle emotionally heavy situations?', options: [ { t: 'I compartmentalize and stay focused', v: 'A' }, { t: 'I find meaning in supporting patients', v: 'B' }, { t: 'I get drained by frequent emotional intensity', v: 'C' }, { t: 'I prefer counseling-style discussions to acute crises', v: 'D' } ] },
  { q: 'What type of work environment do you see yourself thriving in?', options: [ { t: 'Academic center or tertiary hospital', v: 'A' }, { t: 'Outpatient clinic or IVF center', v: 'B' }, { t: 'Private practice or small group', v: 'C' }, { t: 'Hospitalist or shift-based model', v: 'D' } ] },
  { q: 'How do you feel about research and teaching?', options: [ { t: 'Love it — I want to publish and mentor', v: 'A' }, { t: 'I enjoy it sometimes but not my focus', v: 'B' }, { t: 'Not really my thing', v: 'C' }, { t: 'I’d like to teach clinically, not in a lab', v: 'D' } ] },
  { q: 'Which word best describes your approach to patient care?', options: [ { t: 'Decisive', v: 'A' }, { t: 'Empathic', v: 'B' }, { t: 'Precise', v: 'C' }, { t: 'Collaborative', v: 'D' } ] },
  { q: 'How do you feel about working with medically complex or critically ill patients?', options: [ { t: 'I enjoy it — I like acuity', v: 'A' }, { t: 'Prefer stable outpatient populations', v: 'B' }, { t: 'I can handle it but it’s not my favorite', v: 'C' }, { t: 'I’d rather focus on preventive or planned care', v: 'D' } ] },
  { q: 'Which type of procedure do you find most satisfying?', options: [ { t: 'Cesarean or complex surgery', v: 'A' }, { t: 'Hysteroscopic or fertility-related procedure', v: 'B' }, { t: 'Pelvic floor repair or minimally invasive work', v: 'C' }, { t: 'Contraceptive and early pregnancy procedures', v: 'D' } ] },
  { q: 'What’s most important to you in your future career?', options: [ { t: 'Variety and challenge', v: 'A' }, { t: 'Predictability and balance', v: 'B' }, { t: 'Mastery and excellence', v: 'C' }, { t: 'Advocacy and patient-centered care', v: 'D' } ] },
  { q: 'How comfortable are you managing life-and-death decisions?', options: [ { t: 'Comfortable — it’s part of the job', v: 'A' }, { t: 'Prefer to minimize them', v: 'B' }, { t: 'Okay occasionally', v: 'C' }, { t: 'I’d rather not — prefer lower acuity', v: 'D' } ] },
  { q: 'Which best describes your ideal week?', options: [ { t: 'Split between OR, L&D, and clinic', v: 'A' }, { t: 'Primarily outpatient with procedures', v: 'B' }, { t: 'Research, teaching, and subspecialty consults', v: 'C' }, { t: 'Outpatient counseling and advocacy work', v: 'D' } ] },
  { q: 'When you imagine your perfect day, how do you feel at the end?', options: [ { t: 'Tired but proud after saving or delivering a baby', v: 'A' }, { t: 'Content after helping patients achieve pregnancy', v: 'B' }, { t: 'Satisfied after a long, complex surgery', v: 'C' }, { t: 'Fulfilled after empowering patients through education and autonomy', v: 'D' } ] }
];

export default function Home({ setTheme, theme }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handle = (v) => {
    setAnswers(prev => [...prev, v]);
    if (step + 1 < questions.length) setStep(step + 1);
    else setStep('results');
  };

  const counts = answers.reduce((acc, v) => { acc[v] = (acc[v]||0)+1; return acc; }, {});
  const max = Object.keys(counts).length ? Object.keys(counts).reduce((a,b)=>counts[a]>counts[b]?a:b) : null;

  const resultText = () => {
    switch(max) {
      case 'A': return 'You might thrive in Maternal-Fetal Medicine or General OB Hospitalist work — fast-paced, team-oriented, and decisive.';
      case 'B': return 'You seem suited for Gynecologic Oncology or Urogynecology — you value mastery, technical excellence, and surgical depth.';
      case 'C': return 'You might enjoy Reproductive Endocrinology & Infertility or minimally invasive gynecology — precision, science, and balance.';
      case 'D': return 'You’d likely fit Family Planning or outpatient general practice — patient-centered, advocacy-driven, and lifestyle-friendly.';
      default: return 'Balanced profile — generalist OB/GYN may offer the mix you want.';
    }
  };

  return (
    <div className="min-h-screen bg-mauve-50 dark:bg-gray-900 transition-colors">
      <header className="max-w-3xl mx-auto flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold text-pink-700 dark:text-pink-300">OB/GYN Specialty Fit Quiz</h1>
        <div className="flex gap-3 items-center">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-6">
        {step !== 'results' ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Question {step+1} of {questions.length}</h2>
            <p className="mt-3 text-gray-700 dark:text-gray-200">{questions[step].q}</p>
            <div className="mt-4 grid gap-3">
              {questions[step].options.map((opt, i) => (
                <button key={i} onClick={() => handle(opt.v)} className="text-left p-3 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-mauve-100 dark:hover:bg-gray-700">
                  {opt.t}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
            <h2 className="text-xl font-bold text-pink-700 dark:text-pink-300">Your OB/GYN Match</h2>
            <p className="mt-3 text-gray-700 dark:text-gray-200">{resultText()}</p>
            <div className="mt-6 flex justify-center gap-3">
              <button onClick={() => { setAnswers([]); setStep(0); }} className="px-4 py-2 rounded bg-pink-600 text-white">Retake Quiz</button>
            </div>
          </div>
        )}
      </main>

      <footer className="max-w-3xl mx-auto p-6 text-center text-sm text-gray-500">
        Share this quiz with colleagues or residents to explore where you fit best in OB/GYN.
      </footer>
    </div>
  );
}
