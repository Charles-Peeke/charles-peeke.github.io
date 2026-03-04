export function Navigation() {
  return (
    <nav className="p-4 border-b flex justify-between">
      <a href="/" className="font-semibold">Home</a>
      <a href="/portfolio" className="text-sm opacity-70 hover:opacity-100">Portfolio</a>
      <a href="/blog" className="text-sm opacity-70 hover:opacity-100">Blog</a>
      <a href="/contact" className="text-sm opacity-70 hover:opacity-100">Contact</a>
      <a href="/dashboard" className="text-sm opacity-70 hover:opacity-100">Dashboard</a>
      <a href="/events" className="text-sm opacity-70 hover:opacity-100">Events</a>
      <a href="/partnerships" className="text-sm opacity-70 hover:opacity-100">Partnerships</a>
      <a href="/ventures" className="text-sm opacity-70 hover:opacity-100">Ventures</a>
    </nav>
  );
}
