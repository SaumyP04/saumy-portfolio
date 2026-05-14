const links = [
  { label: 'GITHUB',   href: 'https://github.com/SaumyP04' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/saumy-patel/' },
  { label: 'EMAIL',    href: 'mailto:pates247@mcmaster.ca' },
];

const Contact = () => (
  <footer
    id="contact"
    className="w-full py-16 border-t"
    style={{ background: 'rgba(11,8,15,0.6)', borderColor: 'rgba(77,67,84,0.12)' }}
  >
    <div className="section-wrap">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Logo + copy */}
        <div className="space-y-3 text-center md:text-left">
          <p className="font-sora text-2xl font-bold tracking-tight" style={{ color: '#ddb7ff' }}>
            Saumy.dev
          </p>
          <p className="font-geist text-xs tracking-wider" style={{ color: '#cfc2d6' }}>
            © {new Date().getFullYear()} Saumy Patel. Built for the future.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="font-geist text-[11px] tracking-[0.15em] uppercase transition-all hover:-translate-y-1"
              style={{ color: '#cfc2d6', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ddb7ff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#cfc2d6')}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Contact;
