import ShortcutTile from './ShortcutTitle';

const shortcuts = [
  { name: 'ticketb', icon: 'b', url: '#' },
  { name: 'React App', icon: 'R', url: '#' },
  { name: 'Google Account', icon: 'G', url: '#' },
  { name: 'Web Store', icon: 'W', url: '#' },
  { name: 'Add shortcut', icon: '+', url: '#' },
];

function Shortcuts() {
  return (
    <div className="shortcuts">
      {shortcuts.map((item, idx) => (
        <ShortcutTile key={idx} name={item.name} icon={item.icon} url={item.url} />
      ))}
    </div>
  );
}


export default Shortcuts;