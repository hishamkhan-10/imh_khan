'use client';

import { useEffect, useRef } from 'react';

export default function QRCode() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const currentUrl = window.location.href.split('?')[0];
    const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(currentUrl);
    if (imgRef.current) {
      imgRef.current.src = qrUrl;
    }
  }, []);

  return (
    <>
      <p className="qr-label">Scan Me</p>
      <div className="qr-code">
        <img ref={imgRef} id="qrImg" alt="QR Code" />
      </div>
    </>
  );
}
