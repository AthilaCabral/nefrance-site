// =====================================================================
// GLOBAL TYPE SHIMS
// ---------------------------------------------------------------------
// O plugin "next" do TypeScript já declara módulos CSS como side-effect
// imports — mas servidores TS rodando fora do plugin (alguns IDEs ou
// `tsc --noEmit` sem o plugin ativo) reclamam com TS2882.
// Este shim garante que `import "./globals.css"` é válido em qualquer
// contexto, sem afetar o pipeline de build.
// =====================================================================

declare module "*.css";
declare module "*.scss";
