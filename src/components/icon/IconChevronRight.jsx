const IconChevronRight = ({
  size = 16,
  color = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      // 1. Mengatur ukuran dinamis
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // 2. Menerima className tambahan (untuk Tailwind)
      className={className}
      // 3. Spread sisa props (seperti onClick, style, dll)
      {...props}
    >
      <path
        d="M5.5 3L10.5 8L5.5 13"
        // 4. Warna diatur di sini (stroke).
        // Menggunakan "currentColor" agar mengikuti warna teks parent.
        stroke={color}
        // 5. PERHATIAN: Ubah atribut kebab-case menjadi camelCase untuk React
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconChevronRight;
