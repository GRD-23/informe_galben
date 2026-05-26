function Navbar() {
  return (
    <nav className="bg-zinc-950 border-b border-red-600 p-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-red-500 text-2xl font-bold">
          Sony Pictures Hack
        </h1>

        <ul className="flex gap-6 text-sm font-semibold">
          <li><a href="#resumen">Resumen</a></li>
          <li><a href="#leyes">Leyes</a></li>
          <li><a href="#delitos">Delitos</a></li>
          <li><a href="#conclusiones">Conclusiones</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;