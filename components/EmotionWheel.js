import { emotions } from '../data';

export default function EmotionWheel() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: 400 }}>
      {emotions.map((e) => (
        <div key={e.name} style={{ background: e.color, padding: 10, margin: 5 }}>
          {e.name}
        </div>
      ))}
    </div>
  );
}
