export default function TopBanner({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  if (!visible) return null;
  return (
    <div className="top-banner">
      <span style={{ marginRight: 8 }}>🚀</span>
      Education is empowerment. Final days to save up to 30% for the Spring 2026 cohort.
      <a href="#final-cta">Learn more.</a>
      <button className="close-banner" onClick={onClose} aria-label="Close">×</button>
    </div>
  );
}
