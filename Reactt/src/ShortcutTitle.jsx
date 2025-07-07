function ShortcutTitle({ name, icon, url }) {
  return (
    <a href={url} className="shortcut-tile">
      <div className="icon">{icon}</div>
      <span>{name}</span>
    </a>
  );
}

export default ShortcutTitle;