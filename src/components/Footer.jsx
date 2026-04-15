import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Journey', // මෙතනත් Journey දැම්මා
      href: '#journey'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/Imaludayanga6'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/imal-udayanga-b13631269' // Tracking link අයින් කලා
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/imal_udayanga' // ඔයාගේ X link එකට හැදුවා
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/imal_udayanga6' // Tracking link අයින් කලා
    }
    // CodePen අයින් කලා, මොකද ඒක ඔයාගේ නෙමේ තිබ්බේ
  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                        Let&apos;s work together today!
                    </h2>

                    {/* වෙනස් කරපු Email එක */}
                    <ButtonPrimary href="mailto:imaludayanga6@gmail.com" label="Start Project" icon="chevron_right" />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2">
                            Sitemap
                        </p>

                        <ul>
                            {sitemap.map(({ label ,href} ,key) => (
                                <li key={key}>
                                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2">
                            Socials
                        </p>

                        <ul>
                            {socials.map(({ label ,href} ,key) => (
                                <li key={key}>
                                    <a href={href} target="_blank" rel="noopener noreferrer" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a href="#home" className="">
                    <img src="/images/logo.png" width={40} height={40} alt="Logo" />
                </a>

                <p className="text-zinc-500 text-sm">
                    &copy; 2025 <span className="text-zinc-200">
                        Imal Udayanga
                    </span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer