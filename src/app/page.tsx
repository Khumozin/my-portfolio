import Image from 'next/image';
import Link from 'next/link';



export default function Home() {
    const yearsOfExp = new Date().getFullYear() - new Date(2018, 1, 18).getFullYear();

    return (
      <main className="main">
      <div className="content">
    <div className="left-side">

<Image
      src="/khumo.jpeg"
      width={150}
      height={150}
      alt="Picture of the author"
      className='profile-photo'
      priority
    />

      <h1>Khumo Mogorosi</h1>
      <p>
        An enthusiastic technical professional with a complete understanding of the entire software development
        lifecycle.
      </p>

      <p>
        As a software developer with over <b>{ yearsOfExp } years of experience</b>, I have developed a strong
        expertise in Angular, Nx
        Monorepo, TypeScript, Javascript, Cypress (E2E Automation),
        Jasmine (Unit Testing), and DevSecOps. I am passionate about building scalable and maintainable software
        solutions that
        solve real-world problems.
      </p>

      <h2>Work experiences:</h2>

      <p>
        Currently, I&apos;m a <b>Software Developer</b> at <Link className="pill"
           href="https://www.toyota.co.za/"
           target="_blank"
           rel="noopener">Toyota SA Motors</Link>, and I&apos;m responsible for building, optimizing and
        improving enterprise scale Angular applications.
      </p>

      <p>Things I&apos;ve worked on:</p>

      <p>
        - Build standalone Angular libraries<br/>
        - Application runtime performance optimizations<br/>
        - Code architecture improvements<br/>
        - Code modernization with latest Angular features<br/>
        - Migrating legacy apps to Angular app<br/>
        - Unit and E2E testing Angular apps<br/>
        - Release Management (Semantic Versioning)
      </p>

      <p>
        Using Angular with a variety of libraries and other frameworks like Electron, NgRx, Angular Material,
        NgBootstrap,
        Tailwind CSS, .Net,
        Node.js, and more, targeting all platforms including iOS, Android, Desktop apps, etc,. is something I&apos;m very
        familiar with.
      </p>

      <div className="built">
        <h6 className='mr-4'>Built with </h6>

        <Image src="/next.svg"
      width={150}
      height={150}
      alt="Picture of the author"
      priority></Image>
      </div>
    </div>
    <div className="divider"
         role="separator"
         aria-label="Divider"></div>
    <div className="right-side">
      <div className="pill-group">
        {
            [
                { title: 'Github Profile', link: 'https://github.com/khumozin' },
                { title: 'Stack Overflow', link: 'https://stackoverflow.com/users/9674861/khumo-mogorosi' },
                { title: 'LinkedIn', link: 'https://www.linkedin.com/in/khumo-mogorosi-8ab477145/' },
                { title: 'Medium Blog', link: 'https://medium.com/@khumomogorosi' },
                ].map((item) => {
                    return  <Link key={item.title} className="pill flex"
                    href="{item.link}"
                    target="_blank"
                    rel="noopener">
          <span>{ item.title }</span>
          <svg xmlns="http://www.w3.org/2000/svg"
               height="14"
               viewBox="0 -960 960 960"
               width="14"
               fill="currentColor">
            <path
                  d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
          </svg>
        </Link>
                })
        }
      </div>
    </div>
  </div>
</main>
  );
}
