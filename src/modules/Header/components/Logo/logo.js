import React from 'react';

const Icon = ({mobile, light, ...restProps}) => {
  const width = mobile ? '110' : '165';
  const height = mobile ? '32' : '48';

  const textColor = light ? '#ffffff' : '#171721';
  const pointsColor = light ? '#ffffff' : '#51A7F9';
  return (
    <svg {...restProps} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 165 48">
      <g fill="none" fill-rule="nonzero">
        <path fill={textColor} d="M72.188 30.462h3.75V17.538h-3.75v12.924zm10.547-10.893h-4.902l-.958-2.03h15v2.03h-5.859v10.893h-3.281V19.569zm16.873 0h-4.9l-.958-2.03h15v2.03h-5.859v10.893h-3.283V19.569zm23.204 8.88v2.013h-13.125V17.538h12.776v2.012h-9.526v3.36h8.451v1.976h-8.45v3.563h9.874zm14.474-2.862l-3.26-5.649-3.237 5.65h6.497zm1.063 1.883h-8.646l-1.705 2.992h-3.31l7.781-12.924h3.162l7.806 12.924h-3.359l-1.73-2.992zm23.875-9.932l-7.016 8.566-7.145-8.566h-2.75v12.924h3.186v-8.456l5.913 6.977h1.49l5.911-7.088.026 8.565H165l-.025-12.923-2.75.001zM62.002 29.171H56.77v-3.896h5.232c2.509 0 3.763.65 3.763 1.948 0 1.299-1.254 1.948-3.763 1.948m6.18-3.828c-.565-.572-1.33-.98-2.293-1.225.699-.281 1.247-.68 1.645-1.195a2.819 2.819 0 0 0 .598-1.774c0-1.092-.557-1.95-1.669-2.574-1.113-.623-2.7-.935-4.76-.935h-9.117l.944 1.967h7.825c1.129 0 1.997.157 2.605.472.605.315.908.781.908 1.399 0 .604-.303 1.063-.91 1.377-.606.316-1.473.474-2.604.474H53.53v7.809h8.672c2.226 0 3.92-.319 5.084-.955 1.162-.637 1.743-1.54 1.743-2.709 0-.848-.283-1.559-.847-2.13"/>
        <path fill={pointsColor} d="M12.089 5.51c0-.431.349-.779.781-.779a.779.779 0 1 1 0 1.556.78.78 0 0 1-.781-.778m-4.03 2.317c0-.43.35-.777.781-.777a.78.78 0 0 1 .782.777.78.78 0 0 1-.782.778.78.78 0 0 1-.781-.778m-4.03 2.318c0-.43.35-.778.782-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.78.78 0 0 1-.781-.778m7.473 0c0-.752.612-1.36 1.366-1.36.756 0 1.366.608 1.366 1.36 0 .753-.611 1.361-1.365 1.361a1.38 1.38 0 0 1-.97-.4 1.347 1.347 0 0 1-.397-.961m8.644 0c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.78.78 0 0 1-.781-.778M8.059 12.462c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.78.78 0 0 1-.781-.778m16.117 0c0-.43.35-.778.782-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.78.78 0 0 1-.782-.778M3.444 14.779c0-.752.611-1.361 1.367-1.361.754 0 1.365.609 1.365 1.361s-.611 1.361-1.365 1.361a1.38 1.38 0 0 1-.969-.4c-.256-.256-.4-.601-.398-.961m8.645 0c0-.43.349-.778.781-.778a.779.779 0 1 1 0 1.556.78.78 0 0 1-.781-.778m7.473 0c0-.752.612-1.361 1.365-1.361.756 0 1.367.609 1.367 1.361s-.611 1.361-1.366 1.361c-.754 0-1.366-.609-1.366-1.361m8.644 0c0-.43.35-.778.781-.778a.779.779 0 1 1 0 1.556.78.78 0 0 1-.781-.778M8.059 17.096c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.78.78 0 0 1-.781-.778m16.117 0c0-.43.35-.778.782-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.78.78 0 0 1-.782-.778m8.058 0c0-.43.35-.778.783-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.79.79 0 0 1-.554-.229.77.77 0 0 1-.229-.549M4.03 19.414c0-.43.35-.778.781-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.777.789.789 0 0 1-.554-.228.77.77 0 0 1-.227-.55m7.473 0c0-.75.612-1.36 1.366-1.36.756 0 1.366.61 1.366 1.36 0 .753-.611 1.362-1.365 1.362a1.38 1.38 0 0 1-.969-.4c-.256-.256-.4-.602-.398-.961m8.644 0c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.777.789.789 0 0 1-.554-.228.77.77 0 0 1-.227-.55m7.474 0c0-.75.612-1.36 1.365-1.36.756 0 1.367.61 1.367 1.36 0 .753-.611 1.362-1.367 1.362-.753 0-1.365-.61-1.365-1.361m8.643 0c0-.43.35-.778.781-.778a.779.779 0 1 1 0 1.555.78.78 0 0 1-.781-.777M8.059 21.73c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.789.789 0 0 1-.553-.23.77.77 0 0 1-.228-.548m16.117 0c0-.43.35-.778.782-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.789.789 0 0 1-.554-.23.77.77 0 0 1-.228-.548m8.058 0c0-.43.35-.778.783-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.789.789 0 0 1-.555-.229.77.77 0 0 1-.228-.55m-28.79 2.318c0-.751.611-1.36 1.367-1.36.754 0 1.365.609 1.365 1.36 0 .752-.611 1.361-1.365 1.361a1.38 1.38 0 0 1-.969-.4c-.256-.256-.4-.601-.398-.961m8.645 0c0-.43.349-.778.781-.778a.779.779 0 1 1-.554 1.327.77.77 0 0 1-.227-.549m16.117 0c0-.43.35-.778.781-.778a.779.779 0 1 1-.554 1.327.77.77 0 0 1-.227-.549m7.473 0c0-.751.612-1.36 1.366-1.36.755 0 1.366.609 1.366 1.36 0 .752-.61 1.361-1.365 1.361a1.38 1.38 0 0 1-.969-.4c-.256-.256-.4-.601-.398-.961M8.06 26.366c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.789.789 0 0 1-.553-.229.77.77 0 0 1-.228-.549m24.175 0c0-.43.35-.778.783-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.789.789 0 0 1-.555-.229.77.77 0 0 1-.228-.549M4.03 28.683c0-.43.35-.778.781-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.78.78 0 0 1-.781-.778m7.473 0c0-.753.612-1.361 1.366-1.361.756 0 1.366.609 1.366 1.361s-.611 1.36-1.365 1.36a1.38 1.38 0 0 1-.969-.4c-.256-.255-.4-.6-.398-.96m16.118 0c0-.753.612-1.361 1.365-1.361.756 0 1.367.609 1.367 1.361s-.611 1.36-1.367 1.36c-.753 0-1.365-.608-1.365-1.36m8.643 0c0-.43.35-.778.781-.778a.779.779 0 1 1 0 1.556.78.78 0 0 1-.781-.778M8.059 31.001c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.777.78.78 0 0 1-.781-.777m16.117 0c0-.43.35-.778.782-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.777.78.78 0 0 1-.782-.777m8.058 0c0-.43.35-.778.783-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.777.79.79 0 0 1-.554-.228.77.77 0 0 1-.229-.55m-28.79 2.318c0-.752.611-1.362 1.367-1.362.754 0 1.365.61 1.365 1.362 0 .751-.611 1.36-1.365 1.36a1.38 1.38 0 0 1-.969-.4c-.256-.255-.4-.6-.398-.96m8.645 0c0-.43.349-.778.781-.778a.779.779 0 1 1 0 1.556.78.78 0 0 1-.781-.778m7.473 0c0-.752.612-1.362 1.365-1.362.756 0 1.367.61 1.367 1.362 0 .751-.611 1.36-1.366 1.36-.754 0-1.366-.609-1.366-1.36m8.644 0c0-.43.35-.778.781-.778a.779.779 0 1 1 0 1.556.78.78 0 0 1-.781-.778m7.473 0c0-.752.612-1.362 1.366-1.362.755 0 1.366.61 1.366 1.362 0 .751-.61 1.36-1.365 1.36a1.38 1.38 0 0 1-.968-.4c-.257-.255-.4-.6-.399-.96M8.06 35.636c0-.43.35-.779.781-.779a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.78.78 0 0 1-.781-.778m8.058 0c0-.43.35-.778.782-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.78.78 0 0 1-.782-.778m8.06 0c0-.43.35-.778.78-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.781.778.78.78 0 0 1-.782-.778m8.058 0c0-.43.35-.778.783-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.79.79 0 0 1-.554-.229.77.77 0 0 1-.229-.549M4.03 37.953c0-.43.35-.779.781-.779a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.78.78 0 0 1-.781-.778m7.473.001c0-.753.612-1.362 1.366-1.362.756 0 1.366.609 1.366 1.361s-.611 1.362-1.365 1.362a1.38 1.38 0 0 1-.969-.401c-.256-.256-.4-.601-.398-.96m8.644 0c0-.43.35-.779.781-.779a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.78.78 0 0 1-.781-.778m7.474.001c0-.753.612-1.362 1.365-1.362.756 0 1.367.609 1.367 1.361s-.611 1.362-1.367 1.362c-.753 0-1.365-.61-1.365-1.362M8.06 40.27c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.777.78.78 0 0 1-.781-.777m8.058 0c0-.43.35-.778.782-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.777.78.78 0 0 1-.782-.777m8.06 0c0-.43.35-.778.78-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.781.777.78.78 0 0 1-.782-.777M12.09 42.588c0-.43.349-.78.781-.78a.779.779 0 1 1 0 1.557.78.78 0 0 1-.781-.778m7.473 0c0-.753.612-1.36 1.365-1.36.756 0 1.367.608 1.367 1.36 0 .752-.611 1.361-1.366 1.361-.754 0-1.366-.609-1.366-1.361m-3.445 2.318c0-.43.35-.778.782-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.78.78 0 0 1-.782-.778"/>
        <path fill="#DCDCE5" d="M20.147.875c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.78.78 0 0 1-.781-.778m-4.03 2.317c0-.43.35-.778.782-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.78.78 0 0 1-.782-.778m8.06 0c0-.43.35-.778.78-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.781.778.78.78 0 0 1-.782-.778m-4.03 2.317c0-.43.35-.778.782-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.78.78 0 0 1-.781-.778m8.059 0c0-.43.35-.778.781-.778a.779.779 0 1 1 0 1.556.78.78 0 0 1-.781-.778M16.117 7.826c0-.43.35-.777.782-.777a.78.78 0 0 1 .781.777.78.78 0 0 1-.781.778.78.78 0 0 1-.782-.778m8.06 0c0-.43.35-.777.78-.777a.78.78 0 0 1 .782.777.78.78 0 0 1-.781.778.78.78 0 0 1-.782-.778m8.058 0c0-.43.35-.777.783-.777a.78.78 0 0 1 .781.777.78.78 0 0 1-.781.778.79.79 0 0 1-.554-.228.77.77 0 0 1-.229-.55m-4.028 2.318c0-.43.35-.778.781-.778a.779.779 0 1 1 0 1.556.78.78 0 0 1-.781-.778m8.058 0c0-.43.35-.778.781-.778a.779.779 0 1 1 0 1.556.78.78 0 0 1-.781-.778M0 12.462c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.78.78 0 0 1-.781-.778m16.117 0c0-.43.35-.778.782-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.78.78 0 0 1-.782-.778m16.117 0c0-.43.35-.778.783-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.79.79 0 0 1-.554-.23.77.77 0 0 1-.229-.548m8.06 0c0-.43.35-.778.782-.778a.78.78 0 0 1 0 1.556.79.79 0 0 1-.554-.23.77.77 0 0 1-.229-.548m-4.029 2.317c0-.43.35-.778.781-.778a.779.779 0 1 1 0 1.556.78.78 0 0 1-.781-.778M0 17.096c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.78.78 0 0 1-.781-.778m16.117 0c0-.43.35-.778.782-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.78.78 0 0 1-.782-.778m24.176 0c0-.43.35-.778.783-.778a.78.78 0 0 1 0 1.556.79.79 0 0 1-.554-.229.77.77 0 0 1-.229-.549M0 21.731c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.789.789 0 0 1-.553-.23.77.77 0 0 1-.228-.548m16.117 0c0-.43.35-.778.782-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.789.789 0 0 1-.554-.23.77.77 0 0 1-.228-.548m24.176 0c0-.43.35-.778.783-.778a.78.78 0 0 1 0 1.556.789.789 0 0 1-.555-.229.77.77 0 0 1-.228-.55m-20.146 2.318c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.789.789 0 0 1-.554-.229.77.77 0 0 1-.227-.549M0 26.366c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.789.789 0 0 1-.553-.229.77.77 0 0 1-.228-.549m16.117 0c0-.43.35-.778.782-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.789.789 0 0 1-.554-.229.77.77 0 0 1-.228-.549m8.06 0c0-.43.35-.778.78-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.781.778.789.789 0 0 1-.554-.229.77.77 0 0 1-.228-.549m16.117 0c0-.43.35-.778.783-.778a.78.78 0 0 1 0 1.556.789.789 0 0 1-.555-.229.77.77 0 0 1-.228-.549m-20.146 2.317c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.78.78 0 0 1-.781-.778M0 31.001c0-.43.35-.778.781-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.777.78.78 0 0 1-.781-.777m16.117 0c0-.43.35-.778.782-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.777.78.78 0 0 1-.782-.777m24.176 0c0-.43.35-.778.783-.778a.78.78 0 0 1 0 1.556.79.79 0 0 1-.554-.23.77.77 0 0 1-.229-.548M0 35.636c0-.43.35-.779.781-.779a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.78.78 0 0 1-.781-.777m40.293 0c0-.43.35-.779.783-.779a.78.78 0 0 1 0 1.556.79.79 0 0 1-.554-.229.77.77 0 0 1-.229-.549m-4.029 2.318c0-.43.35-.779.781-.779a.779.779 0 1 1 0 1.556.78.78 0 0 1-.781-.778m-4.03 2.318c0-.43.35-.778.783-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.777.79.79 0 0 1-.554-.228.77.77 0 0 1-.229-.55m-4.028 2.319c0-.43.35-.78.781-.78a.779.779 0 1 1 0 1.557.78.78 0 0 1-.781-.778m-4.03 2.318c0-.43.35-.778.782-.778a.78.78 0 0 1 .781.778.78.78 0 0 1-.781.778.78.78 0 0 1-.782-.778m-4.03 2.317c0-.43.35-.778.782-.778a.78.78 0 0 1 .782.778.78.78 0 0 1-.782.778.78.78 0 0 1-.781-.778"/>
      </g>
    </svg>
  );
}

export default Icon