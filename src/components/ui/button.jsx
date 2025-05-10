export function Button({ children, onClick, variant = 'default' }) {
  const styles = {
    default: 'padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 8px;',
    outline: 'padding: 0.5rem 1rem; background: white; color: #007bff; border: 2px solid #007bff; border-radius: 8px;'
  };
  return <button onClick={onClick} style={styles[variant]}>{children}</button>;
}
