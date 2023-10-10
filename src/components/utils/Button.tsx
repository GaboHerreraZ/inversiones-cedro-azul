export const Button = ({
  onClick,
  label,
  isDark = false,
}: {
  onClick?: any;
  label: string;
  isDark?: boolean;
}) => {
  return (
    <button
      onClick={() => onClick()}
      className={`${isDark ? "button-dark" : "button"}`}
    >
      {label}
    </button>
  );
};
