export default function LogoIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* ==============================
          LAUREL IZQUIERDO
      ============================== */}

      <path
        d="M104 195
           C76 184 53 166 39 143
           C25 120 23 94 31 72
           C38 52 51 38 69 29"
        stroke="#3B2418"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* hojas izquierdas */}

      <path
        d="M43 169
           C32 166 25 159 22 150
           C32 151 40 156 43 169Z"
        fill="#3B2418"
      />

      <path
        d="M33 151
           C22 147 16 139 15 130
           C25 133 32 140 33 151Z"
        fill="#3B2418"
      />

      <path
        d="M27 131
           C17 126 12 117 13 108
           C23 112 28 120 27 131Z"
        fill="#3B2418"
      />

      <path
        d="M25 109
           C16 103 12 94 14 85
           C23 90 27 99 25 109Z"
        fill="#3B2418"
      />

      <path
        d="M29 88
           C21 80 20 71 24 63
           C32 70 34 79 29 88Z"
        fill="#3B2418"
      />

      <path
        d="M38 69
           C32 60 33 51 38 44
           C45 52 45 61 38 69Z"
        fill="#3B2418"
      />

      <path
        d="M51 52
           C47 43 50 35 56 29
           C61 38 59 46 51 52Z"
        fill="#3B2418"
      />

      <path
        d="M67 39
           C65 30 69 23 76 19
           C79 29 75 36 67 39Z"
        fill="#3B2418"
      />

      {/* ==============================
          LAUREL DERECHO
      ============================== */}

      <path
        d="M116 195
           C144 184 167 166 181 143
           C195 120 197 94 189 72
           C182 52 169 38 151 29"
        stroke="#3B2418"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* hojas derechas */}

      <path
        d="M177 169
           C188 166 195 159 198 150
           C188 151 180 156 177 169Z"
        fill="#3B2418"
      />

      <path
        d="M187 151
           C198 147 204 139 205 130
           C195 133 188 140 187 151Z"
        fill="#3B2418"
      />

      <path
        d="M193 131
           C203 126 208 117 207 108
           C197 112 192 120 193 131Z"
        fill="#3B2418"
      />

      <path
        d="M195 109
           C204 103 208 94 206 85
           C197 90 193 99 195 109Z"
        fill="#3B2418"
      />

      <path
        d="M191 88
           C199 80 200 71 196 63
           C188 70 186 79 191 88Z"
        fill="#3B2418"
      />

      <path
        d="M182 69
           C188 60 187 51 182 44
           C175 52 175 61 182 69Z"
        fill="#3B2418"
      />

      <path
        d="M169 52
           C173 43 170 35 164 29
           C159 38 161 46 169 52Z"
        fill="#3B2418"
      />

      <path
        d="M153 39
           C155 30 151 23 144 19
           C141 29 145 36 153 39Z"
        fill="#3B2418"
      />

      {/* ==============================
          TALLOS CRUZADOS
      ============================== */}

      <path
        d="M43 195 C67 181 84 168 110 151"
        stroke="#3B2418"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <path
        d="M177 195 C153 181 136 168 110 151"
        stroke="#3B2418"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* ==============================
          BALANZA
      ============================== */}

      {/* columna */}

      <line
        x1="110"
        y1="22"
        x2="110"
        y2="91"
        stroke="#3B2418"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* barra */}

      <line
        x1="67"
        y1="38"
        x2="153"
        y2="38"
        stroke="#3B2418"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* centro */}

      <circle
        cx="110"
        cy="38"
        r="4"
        fill="#3B2418"
      />

      {/* ==============================
          PLATILLO IZQUIERDO
      ============================== */}

      <line
        x1="67"
        y1="38"
        x2="55"
        y2="68"
        stroke="#3B2418"
        strokeWidth="2"
      />

      <line
        x1="67"
        y1="38"
        x2="79"
        y2="68"
        stroke="#3B2418"
        strokeWidth="2"
      />

      <path
        d="M51 68
           Q67 82 83 68"
        stroke="#3B2418"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* ==============================
          PLATILLO DERECHO
      ============================== */}

      <line
        x1="153"
        y1="38"
        x2="141"
        y2="68"
        stroke="#3B2418"
        strokeWidth="2"
      />

      <line
        x1="153"
        y1="38"
        x2="165"
        y2="68"
        stroke="#3B2418"
        strokeWidth="2"
      />

      <path
        d="M137 68
           Q153 82 169 68"
        stroke="#3B2418"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* ==============================
          BASE
      ============================== */}

      <line
        x1="110"
        y1="91"
        x2="110"
        y2="111"
        stroke="#3B2418"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <line
        x1="91"
        y1="111"
        x2="129"
        y2="111"
        stroke="#3B2418"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}