const Navbar = () => {
  return (
    <header
      className="fixed top-0 w-full z-[100] border-b"
      style={{
        background: 'rgba(10,10,15,0.6)',
        backdropFilter: 'blur(20px)',
        borderColor: 'rgba(77,67,84,0.25)',
      }}
    >
      <div className="section-wrap flex justify-between items-center h-20">
        {/* Logo */}
        <a
          href="#"
          className="font-sora text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
          style={{ color: '#ddb7ff' }}
        >
          Saumy<span className="text-on-surface">.dev</span>
        </a>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-10 font-sora text-sm font-medium">
          {[
            { id: 'about',      label: 'About' },
            { id: 'experience', label: 'Experience' },
            { id: 'skills',     label: 'Skills' },
            { id: 'projects',   label: 'Projects' },
            { id: 'certs',      label: 'Extra Curriculars' },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="transition-all hover:-translate-y-px"
              style={{ color: '#cfc2d6' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ddb7ff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#cfc2d6')}
            >
              {label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
