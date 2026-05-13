/** @type {import('next').NextConfig} */
// =====================================================================
// NEXT CONFIG · Nefrance
// ---------------------------------------------------------------------
// Webpack file cache desabilitado em DEV.
// Motivo: no Windows + Next 14.2, o cache de pack.gz em
// `.next/cache/webpack/` corrompe entre Ctrl+C abrupto e reinícios,
// produzindo "Cannot find module './<n>.js'" e 404 em chunks.
// Em DEV, perdemos ~1s na primeira recompilação após mudança grande,
// em troca de zero cache desync. Em PROD (next build), cache fica
// como padrão — ali ele é seguro porque é write-once.
// =====================================================================

const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
