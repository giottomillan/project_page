const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(pathname) {
  if (!pathname) return basePath || "/";
  if (pathname.startsWith("http://") || pathname.startsWith("https://")) return pathname;
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${basePath}${normalized}`;
}
