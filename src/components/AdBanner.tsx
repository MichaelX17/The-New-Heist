import React, { useEffect, useRef } from 'react';

interface AdBannerProps {
  adKey: string;
  width: number;
  height: number;
}

const AdBanner: React.FC<AdBannerProps> = ({ adKey, width, height }) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const atOptions = {
      key: adKey,
      format: 'iframe',
      height,
      width,
      params: {},
    };

    // 🧩 Crear script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;

    // ✅ Inyectar el anuncio dentro del contenedor
    if (adRef.current) {
      (window as any).atOptions = atOptions;
      adRef.current.innerHTML = ''; // Limpia el contenedor
      adRef.current.appendChild(script); // Inserta el script de AdTerra
    }

    // 🧹 Limpieza al desmontar
    return () => {
      if (adRef.current) adRef.current.innerHTML = '';
    };
  }, [adKey, width, height]);

  return <div ref={adRef} style={{ width, height }} />;
};

export default AdBanner;
