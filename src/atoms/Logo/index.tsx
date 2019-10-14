import React from 'react';
import * as styles from './styles.css';

const Logo: React.FC<React.AllHTMLAttributes<SVGElement>> = props => {
  return (
    <svg className={styles.logo} {...props} viewBox="0 0 446 195" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M185.723 143.934C184.945 143.934 184.556 143.055 184.556 141.297C184.556 139.914 184.772 138.991 185.205 138.53C185.637 138.069 186.012 137.839 186.329 137.839C189.931 137.839 191.977 137.507 192.467 136.844C192.64 136.614 192.726 136.326 192.726 135.98V88.3863H185.075C184.21 88.3575 183.663 87.6514 183.432 86.2681C183.375 85.8647 183.331 85.4324 183.303 84.9713C183.303 83.6168 183.634 82.8387 184.297 82.637C184.96 82.4065 185.781 82.1903 186.761 81.9886C187.769 81.7869 188.908 81.5996 190.176 81.4266C192.885 81.052 195.046 80.8647 196.66 80.8647C198.245 80.8647 199.167 80.9367 199.426 81.0808C199.715 81.1961 199.916 81.4266 200.032 81.7725C200.176 82.1183 200.248 82.9684 200.248 84.3229V85.0578C204.196 82.8099 207.352 81.4843 209.715 81.0808C210.579 80.9079 211.804 80.8215 213.389 80.8215H213.778C215.565 80.8503 217.539 81.3834 219.7 82.4209C221.862 83.4295 223.735 84.8848 225.32 86.7869C228.663 90.8214 230.334 96.2681 230.334 103.127C230.334 110.274 228.36 115.865 224.412 119.899C220.694 123.703 215.824 125.605 209.801 125.605C207.438 125.605 204.988 124.957 202.452 123.66C201.876 123.372 201.444 123.17 201.156 123.055V137.839H210.752C211.53 137.839 211.919 138.718 211.919 140.475C211.919 141.859 211.703 142.781 211.271 143.242C210.839 143.703 210.464 143.934 210.147 143.934H185.723ZM201.156 116.571C203.144 118.156 205.853 118.948 209.282 118.948C214.758 118.948 218.447 116.326 220.349 111.081C221.098 109.006 221.473 106.398 221.473 103.257C221.473 100.144 221.112 97.6514 220.392 95.7782C219.671 93.8762 218.764 92.3776 217.668 91.2825C215.766 89.3517 213.461 88.3863 210.752 88.3863H210.622C208.144 88.3863 205.767 89.15 203.49 90.6773C202.625 91.2537 201.847 91.9453 201.156 92.7523V116.571ZM269.974 120.85C265.392 124.193 261.256 125.865 257.568 125.865C250.305 125.865 245.637 122.954 243.562 117.133C242.87 115.202 242.524 112.954 242.524 110.389V88.3863H236.429C235.363 88.3863 234.83 87.2912 234.83 85.101C234.83 83.6601 235.118 82.8676 235.694 82.7235C240.536 81.4843 244.959 80.8647 248.965 80.8647C250.233 80.8647 250.896 82.0174 250.954 84.3229V107.233C250.954 112.853 252.395 116.21 255.276 117.305C256.141 117.651 257.222 117.824 258.519 117.824C259.787 117.824 260.997 117.68 262.15 117.392C263.331 117.104 264.383 116.758 265.305 116.354C266.17 115.922 266.948 115.461 267.64 114.971L269.498 113.588V88.3863H263.576C262.395 88.3863 261.804 87.32 261.804 85.1874C261.804 83.833 262.178 83.0117 262.928 82.7235C263.706 82.4065 264.642 82.1327 265.738 81.9021C266.833 81.7004 267.971 81.5131 269.152 81.3402C271.4 81.052 273.201 80.8935 274.556 80.8647H274.686C275.925 80.8647 276.688 81.0232 276.977 81.3402C277.322 81.6284 277.553 82.0318 277.668 82.5506C277.841 83.271 277.928 84.539 277.928 86.3546V118.905H285.19C285.968 118.905 286.357 119.842 286.357 121.715C286.357 123.732 285.766 124.827 284.585 125C281.645 125.461 279.023 125.692 276.717 125.692C274.412 125.692 273.057 125.576 272.654 125.346C272.25 125.115 271.905 124.798 271.616 124.395C271.155 123.761 270.608 122.579 269.974 120.85ZM290.507 93.1845C290.507 93.0981 290.565 92.7667 290.68 92.1903L292.582 81.7292H327.164V86.5275L302.567 118.516H320.507L322.538 113.804C322.827 113.199 323.331 112.896 324.051 112.896C324.772 112.896 325.334 112.94 325.737 113.026C326.083 113.112 326.429 113.242 326.775 113.415C327.524 113.761 327.899 114.193 327.899 114.712C327.899 114.856 327.884 114.957 327.855 115.014L324.743 125H291.112V120.245L315.709 88.2134H298.72L297.423 92.9684C297.106 94.1788 295.882 94.784 293.749 94.784C291.588 94.784 290.507 94.2508 290.507 93.1845ZM334.08 93.1845C334.08 93.0981 334.138 92.7667 334.253 92.1903L336.155 81.7292H370.737V86.5275L346.141 118.516H364.08L366.112 113.804C366.4 113.199 366.904 112.896 367.625 112.896C368.345 112.896 368.907 112.94 369.311 113.026C369.657 113.112 370.002 113.242 370.348 113.415C371.097 113.761 371.472 114.193 371.472 114.712C371.472 114.856 371.458 114.957 371.429 115.014L368.316 125H334.685V120.245L359.282 88.2134H342.293L340.997 92.9684C340.68 94.1788 339.455 94.784 337.322 94.784C335.161 94.784 334.08 94.2508 334.08 93.1845ZM376.486 125C375.737 125 375.363 124.121 375.363 122.363C375.363 120.98 375.579 120.058 376.011 119.597C376.443 119.135 376.818 118.905 377.135 118.905H377.567C380.91 118.905 382.798 118.574 383.23 117.911C383.403 117.68 383.489 117.392 383.489 117.046V64.0924H375.881C375.074 64.0636 374.527 63.3287 374.239 61.8878C374.181 61.4843 374.138 61.0665 374.109 60.6342C374.109 59.3086 374.498 58.5016 375.276 58.2135C376.054 57.8965 377.077 57.6371 378.345 57.4354C379.642 57.2336 380.982 57.0751 382.365 56.9599C385.017 56.7293 387.553 56.5996 389.973 56.5708C391.184 56.5708 391.818 57.7956 391.875 60.2451C391.875 60.9656 391.89 61.7149 391.919 62.493V118.905H399.181C399.93 118.905 400.305 119.784 400.305 121.542C400.305 122.925 400.089 123.847 399.656 124.308C399.224 124.769 398.85 125 398.533 125H376.486ZM404.455 102.781C404.455 99.2076 405.045 96.0375 406.227 93.271C407.38 90.5621 408.936 88.2854 410.896 86.441C414.873 82.7523 419.786 80.8935 425.636 80.8647H425.766C431.126 80.8647 435.262 82.5506 438.172 85.9223C441.083 89.2652 442.538 94.0923 442.538 100.404C442.538 101.758 441.919 102.925 440.679 103.905C439.469 104.856 437.942 105.331 436.097 105.331H413.316C413.835 112.075 416.184 116.398 420.362 118.3C421.688 118.905 423.086 119.208 424.555 119.208C426.025 119.208 427.336 119.049 428.489 118.732C429.642 118.386 430.751 117.968 431.818 117.478C432.884 116.96 433.921 116.383 434.93 115.749C437.034 114.424 438.273 113.761 438.648 113.761C438.993 113.79 439.368 113.963 439.772 114.28C440.117 114.625 440.463 115.029 440.809 115.49C441.558 116.585 441.947 117.507 441.976 118.257V118.343C441.976 119.035 441.818 119.496 441.501 119.726C436.227 123.818 430.233 125.865 423.518 125.865C417.495 125.865 412.798 123.761 409.426 119.553C406.112 115.461 404.455 109.87 404.455 102.781ZM433.676 98.8473V98.6744C433.676 92.9684 432.019 89.4526 428.705 88.1269C427.668 87.7235 426.515 87.5217 425.247 87.5217C423.979 87.5217 422.653 87.7523 421.27 88.2134C419.887 88.7033 418.619 89.4093 417.466 90.3315C414.901 92.4353 413.518 95.2739 413.316 98.8473H433.676Z"
        fill="#FFEAB6"
      />
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="194" height="195">
        <ellipse cx="96.6502" cy="97.3366" rx="71" ry="68" transform="rotate(54.3089 96.6502 97.3366)" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
        <rect
          x="116.953"
          y="-4.66724"
          width="71"
          height="77"
          transform="rotate(54.3089 116.953 -4.66724)"
          fill="#2CC679"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M199.798 110.661L158.375 52.9971L145.752 62.0647C145.394 60.9629 144.863 59.8969 144.151 58.9057C140.445 53.7473 133.26 52.5695 128.101 56.275C122.943 59.9804 121.765 67.1659 125.471 72.3242C126.183 73.3154 127.023 74.1596 127.953 74.8505L95.8379 97.92L137.26 155.584L199.798 110.661Z"
          fill="#FF0E5B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M79.708 65.1813C78.5619 66.0046 77.3112 66.5759 76.0218 66.9059L97.4623 96.7532L80.2447 109.121C81.7427 109.892 83.0855 111.02 84.1359 112.482C87.6802 117.416 86.5536 124.29 81.6195 127.834C76.6855 131.378 69.8124 130.252 66.2681 125.318C65.2176 123.855 64.5775 122.223 64.3251 120.557L34.9249 141.676L-6.4976 84.0119L56.0398 39.0889L64.0617 50.2562C64.7861 49.1397 65.7268 48.1368 66.8729 47.3135C71.807 43.7692 78.6801 44.8958 82.2244 49.8298C85.7687 54.7639 84.6421 61.637 79.708 65.1813Z"
          fill="#0070D2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M137.466 145.586C136.32 146.41 135.069 146.981 133.78 147.311L138.885 154.418L113.708 172.503L97.6436 184.043L82.6653 194.802L76.3475 199.341L54.1777 168.478L34.925 141.676L44.2767 134.959C41.8914 134.33 39.7021 132.9 38.1507 130.74C34.6064 125.806 35.733 118.933 40.667 115.389C45.6011 111.844 52.4742 112.971 56.0185 117.905C57.57 120.065 58.2264 122.596 58.0603 125.057L97.4624 96.7532L121.82 130.661C122.544 129.545 123.485 128.542 124.631 127.719C129.565 124.174 136.438 125.301 139.983 130.235C143.527 135.169 142.4 142.042 137.466 145.586Z"
          fill="#FFC562"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100.452 76.9187L97.3736 72.6331L83.4457 82.6381L80.3194 78.286L73.7354 92.8618L89.6504 91.2757L86.5241 86.9236L100.452 76.9187Z"
          fill="#2CC679"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M94.4688 116.583L97.5473 120.868L111.475 110.863L114.602 115.216L121.185 100.64L105.27 102.226L108.397 106.578L94.4688 116.583Z"
          fill="#FFC562"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M117.297 99.7431L121.582 96.6646L111.577 82.7367L115.93 79.6104L101.354 73.0265L102.94 88.9415L107.292 85.8152L117.297 99.7431Z"
          fill="#FF0E5B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M77.6328 93.7599L73.3472 96.8383L83.3522 110.766L79.0001 113.893L93.5759 120.476L91.9898 104.561L87.6377 107.688L77.6328 93.7599Z"
          fill="#0070D2"
        />
      </g>
    </svg>
  );
};

export default Logo;