import React from 'react';
import './style.css';

export default function App() {
  const ref = React.useRef(null);
  const [src, setSrc] = React.useState('');

  const onClickEc = (event, byteArray) => {
    // if (event.target.files && event.target.files[0]) {

    const accessToken =
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRSZWZJZCI6ImVlMjFmNzYwLTJjMzQtNDJiMS1hZThiLTNkNTIzOGEwNTQ2NCIsInRlbmFudElkIjoiNTEzIiwiZW1haWwiOiJkZXNoYW4ub2ZmaWNlQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZGVzaGFuLm9mZmljZUBnbWFpbC5jb20iLCJ1c2VySWQiOiIxNjYwIiwidXNlclJlZklkIjoiY2RiYjllNzgtNDcxOS00N2VmLWE4NDUtM2VjMjI2YThiZmFlIiwiZmlyc3ROYW1lIjoiRGVzaGFuIiwibGFzdE5hbWUiOiJKYXlhd2VlcmEiLCJ1bmlxdWVJZGVudGlmaWVyIjoiZjhkOTJhNzEtMGU4Ny00YjgxLWJmMjEtZmZlYjUxOTY1MTI4IiwiYXBwbGljYXRpb25DbGFpbXMiOlsiU2lnbi5TaWduZXIiLCJGYWxjb24uUmVhZEFsbCIsIkxpY2Vuc2luZyJdLCJzY29wZXMiOlsiU2lnbiIsIkZhbGNvbiIsIkxpY2Vuc2luZyJdLCJuYmYiOjE2OTc2Mjc2NzQsImV4cCI6MTY5ODIzMjQ3NCwiaWF0IjoxNjk3NjI3Njc0LCJpc3MiOiJGYWxjb24iLCJhdWQiOiJFdmlhIn0.T0zgwN1bZl5TXcEiLivoxcyTySiJm8mfAT7H_kp8jL398arsWbIe3jbEJ54C2I8DTLvQx2K5zt8flrb1Z414nSPsiabWJSuRvkI4R-GiSs4AevX3In1FD50YFZrlc8PAOF3R0duM9G03y7QXOfDEi-QvExNglGqF450S3z0Zc1KVe-zipGXh_D7cpN3aWf_f5LmJQgLic1k0XzJyCHP1Bj1kkz0XwCB52-yCMCkhH7XYGV_6VpucjA0neBNqxFOdnoFGVCN4B8ICfCAaqxZWUSx39FYRtz8CfsruqRGxuYUJGLvFyS-Bl_2xHnF3jDj4Z4Y5wsRimCL0L92LSE5cIQ';

    const headers = new Headers({
      Authorization: `Bearer ${accessToken}`,
      Accept: '*/*',
    });

    fetch(
      'https://eviasea.enadocapp.com/_apis/sign/thumbs/api/ImageRenderingService/GetPage?documentToken=ZXZpYV9zaWduX3BkZl81NTg4MzhhNi0xYzMxLTQ3NmItYTY3OC1mZmQxNzEyYjkwODNfY2IxNDliZTgtMWVkNC00YjI5LWI2OTEtZGNmZWJjZDdkY2FiLnBkZnwx',
      { headers }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.arrayBuffer();
      })
      .then((data) => {
        byteArray = new Uint8Array(data);

        let binaryString = '';
        byteArray.forEach((byte) => {
          binaryString += String.fromCharCode(byte);
        });

        setSrc('data:image/png;base64,' + btoa(binaryString));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    //}
  };

  return (
    <div>
      {/* <button onClick={() => ref.current.click()}>Upload</button> */}
      <button onClick={onClickEc}>Show</button>
      {/* <input ref={ref} type="file" onChange={onChange} /> */}
      <img src={src} />
    </div>
  );
}
