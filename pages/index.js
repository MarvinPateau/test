import EmotionWheel from '../components/EmotionWheel';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Emotion Wheel App</h1>
      <p>Bienvenue dans l'application de suivi des émotions.</p>
      <EmotionWheel />
    </div>
  );
}
