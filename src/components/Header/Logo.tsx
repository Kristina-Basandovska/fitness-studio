import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <Link to="/">
        <span className="sr-only">Your Company</span>
        <svg
          width="56"
          height="36"
          viewBox="0 0 56 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="18" r="18" fill="#6366F1" />
          <rect x="24" y="16" width="13" height="3" fill="#72BD36" />
          <rect
            x="43"
            y="16"
            width="13"
            height="3"
            fill="#A7E476"
            fill-opacity="0.2"
          />
          <rect
            x="40.9995"
            y="20"
            width="13"
            height="3"
            transform="rotate(88.7006 40.9995 20)"
            fill="#A7E476"
          />
          <rect
            x="40.9995"
            y="1"
            width="13"
            height="3"
            transform="rotate(88.7006 40.9995 1)"
            fill="#68AC32"
          />
          <rect
            x="29.4143"
            y="5"
            width="13"
            height="3"
            transform="rotate(45 29.4143 5)"
            fill="#68AC32"
          />
          <rect
            x="43.4143"
            y="18"
            width="13"
            height="3"
            transform="rotate(45 43.4143 18)"
            fill="#A7E476"
            fill-opacity="0.6"
          />
          <rect
            x="28"
            y="27.1924"
            width="13"
            height="3"
            transform="rotate(-45 28 27.1924)"
            fill="#90D856"
          />
        </svg>
      </Link>
    </div>
  );
};
