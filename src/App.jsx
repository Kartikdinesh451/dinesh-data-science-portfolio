import "./App.css";

const projects = [
  {
    number: "01",
    title: "Coders of Delhi",
    description:
      "Analyzed cleaned and structured JSON data containing user profiles, friend-network relationships and shared interests. Built recommendation logic for People You May Know and Pages You Might Like.",
    technologies: "Python • Data Analysis • Recommendation System",
    github: "https://github.com/Kartikdinesh451/coders_of_delhi",
  },
  {
    number: "02",
    title: "Coders of Bangalore",
    description:
      "Performed data cleaning, standardization and exploratory analysis on coder/profile data to understand categories, followers and post activity. Created visualizations and summary insights.",
    technologies: "Python • Pandas • Matplotlib",
    github: "https://github.com/Kartikdinesh451/coders_of_banglore",
  },
  {
    number: "03",
    title: "Gurgaon Housing Price Prediction",
    description:
      "Built an end-to-end machine learning regression pipeline with preprocessing, stratified sampling, missing-value handling, feature scaling and one-hot encoding. Compared models and created a Random Forest prediction workflow with a Streamlit interface.",
    technologies: "Python • Pandas • Scikit-learn • Streamlit",
    github:
      "https://github.com/Kartikdinesh451/gurgaon-house-price-prediction",
  },
  {
    number: "04",
    title: "RAG-based AI Teaching Assistant",
    description:
      "Built a retrieval-augmented AI assistant that converts video content into timestamped transcripts using Whisper, creates semantic embeddings with BGE-M3 and retrieves relevant content for grounded LLM responses through DeepSeek-R1 and Ollama.",
    technologies: "Python • Whisper • BGE-M3 • DeepSeek-R1 • Ollama",
    github: "https://github.com/Kartikdinesh451/rag_based_ai",
  },
];

const skillGroups = [
  {
    icon: "PY",
    title: "Programming",
    items: "Python • SQL • HTML • CSS",
  },
  {
    icon: "DA",
    title: "Data Analysis",
    items: "NumPy • Pandas • Data Cleaning • Preprocessing • EDA",
  },
  {
    icon: "DV",
    title: "Visualization",
    items: "Matplotlib • Seaborn",
  },
  {
    icon: "ST",
    title: "Statistics",
    items: "Probability • Distributions • Bayes' Theorem • Sampling • CLT",
  },
  {
    icon: "ML",
    title: "Machine Learning",
    items:
      "Scikit-learn • Supervised/Unsupervised Learning • Regression • Random Forest • Pipelines",
  },
  {
    icon: "AI",
    title: "Deep Learning / AI",
    items:
      "Neural Networks • TensorFlow • PyTorch • MNIST • LLMs • RAG • Whisper",
  },
  {
    icon: "DB",
    title: "Databases",
    items:
      "MySQL • Joins • Subqueries • Constraints • Views • Indexes • Stored Procedures",
  },
  {
    icon: "TO",
    title: "Tools",
    items:
      "Requests • BeautifulSoup • Anaconda • Jupyter • Git • GitHub • Colab • Flask",
  },
];

function App() {
  return (
    <div className="portfolio">

      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            Dinesh<span>.</span>
          </a>

          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>


      {/* HERO */}

      <section id="home" className="hero-section">
        <div className="hero-container">

          <div className="hero-content">

            <p className="eyebrow">
              COMPUTER SCIENCE • DATA SCIENCE & AI
            </p>

            <h1>
              Dinesh <span>Chauhan</span>
            </h1>

            <h2>Entry-Level Data Science Professional</h2>

            <p className="hero-description">
              Computer Science (Data Science & AI) graduate with hands-on
              experience in Python, data analysis, SQL, statistics and machine
              learning, supported by practical data and AI projects.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="btn primary-btn">
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn secondary-btn"
              >
                View Resume
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/Kartikdinesh451"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/dinesh-chauhan-b20417215/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:dinesh4uchauhan@gmail.com">
                Email ↗
              </a>

            </div>
          </div>


          <div className="hero-card">

            <div className="hero-card-top">
              <span>AVAILABLE FOR</span>
              <strong>Entry-Level Opportunities</strong>
            </div>

            <div className="hero-stats">

              <div>
                <strong>4+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>2026</strong>
                <span>B.Tech Graduate</span>
              </div>

              <div>
                <strong>DS + AI</strong>
                <span>Specialization</span>
              </div>

            </div>

            <div className="hero-card-bottom">
              <span>Python</span>
              <span>SQL</span>
              <span>ML</span>
              <span>AI</span>
            </div>

          </div>

        </div>
      </section>


      {/* ABOUT */}

      <section id="about" className="section">
        <div className="section-container">

          <SectionTitle number="01" title="About Me" />

          <div className="about-grid">

            <div className="about-main">

              <h3>Turning data into practical solutions.</h3>

              <p>
                I am a Computer Science (Data Science & AI) graduate with
                hands-on training in Python, data analysis, SQL, statistics
                and machine learning.
              </p>

              <p>
                My projects cover data cleaning, exploratory data analysis,
                recommendation systems, predictive modeling and
                retrieval-augmented generation. I enjoy solving practical
                problems with clean, structured and data-driven approaches.
              </p>

              <a href="#contact" className="text-link">
                Let's connect →
              </a>

            </div>


            <div className="about-highlights">

              <div className="highlight-card">
                <span>01</span>
                <h4>Data Analysis</h4>
                <p>Cleaning, preprocessing, EDA and visualization.</p>
              </div>

              <div className="highlight-card">
                <span>02</span>
                <h4>Machine Learning</h4>
                <p>Regression, classification, pipelines and evaluation.</p>
              </div>

              <div className="highlight-card">
                <span>03</span>
                <h4>AI & RAG</h4>
                <p>Embeddings, retrieval and LLM-based applications.</p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* SKILLS */}

      <section id="skills" className="section section-alt">
        <div className="section-container">

          <SectionTitle number="02" title="Technical Skills" />

          <div className="skills-grid">
            {skillGroups.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>

        </div>
      </section>


      {/* PROJECTS */}

      <section id="projects" className="section">
        <div className="section-container">

          <SectionTitle number="03" title="Featured Projects" />

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.number} {...project} />
            ))}
          </div>

        </div>
      </section>


      {/* EDUCATION */}

      <section id="education" className="section section-alt">
        <div className="section-container">

          <SectionTitle number="04" title="Education" />

          <div className="timeline">

            <Education
              year="2026"
              title="B.Tech in Computer Science (DS + AI)"
              institute="Shri Ramswaroop Memorial University, Lucknow, Uttar Pradesh"
              result="CGPA: 6.9 / 10"
            />

            <Education
              year="2023"
              title="Diploma in Plastic Mould Technology"
              institute="CIPET, Ranchi, Jharkhand"
              result="78%"
            />

            <Education
              year="2020"
              title="Matriculation"
              institute="A.J.J. Academy, Lashkarpur Sadar, Varanasi, Uttar Pradesh"
              result="68%"
            />

          </div>
        </div>
      </section>


      {/* CERTIFICATION */}

      <section className="section certification-section">
        <div className="section-container">

          <SectionTitle number="05" title="Certification" />

          <div className="cert-card">

            <div className="cert-badge">
              CERTIFIED
            </div>

            <div>

              <h3>
                The Ultimate Job Ready Data Science Course
              </h3>

              <p>CodeWithHarry</p>

              <span>
                Python • NumPy • Pandas • Data Visualization • SQL •
                Statistics • Machine Learning • Neural Networks • Git/GitHub
              </span>

              <small>
                Certificate ID:
                CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-OS8JXR9Q
              </small>

              <div className="certificate-button-wrapper">

                <a
                  href="/certificate.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary-btn"
                >
                  View Certificate ↗
                </a>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* CONTACT */}

      <section id="contact" className="section contact-section">
        <div className="section-container contact-container">

          <SectionTitle number="06" title="Let's Connect" />

          <p className="contact-description">
            Looking for an entry-level Data Science opportunity where I can
            apply analytical thinking, clean coding practices and
            problem-solving to data-driven products.
          </p>

          <div className="contact-buttons">

            <a
              href="mailto:dinesh4uchauhan@gmail.com"
              className="btn primary-btn"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/dinesh-chauhan-b20417215/"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Kartikdinesh451"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              GitHub ↗
            </a>

          </div>

          <div className="contact-details">

            <span>📍 Marathahalli, Bangalore</span>

            <a href="mailto:dinesh4uchauhan@gmail.com">
              ✉ dinesh4uchauhan@gmail.com
            </a>

            <span>☎ +91 8081256703</span>

          </div>

        </div>
      </section>


      {/* FOOTER */}

      <footer>

        <div>
          <strong>Dinesh Chauhan</strong>
          <span>Data Science & AI</span>
        </div>

        <p>
          © 2026 Dinesh Chauhan. Built with React.
        </p>

      </footer>

    </div>
  );
}


function SectionTitle({ number, title }) {
  return (
    <div className="section-title">

      <div>
        <span>{number}</span>
        <h2>{title}</h2>
      </div>

      <div className="title-line" />

    </div>
  );
}


function SkillCard({ icon, title, items }) {
  return (
    <article className="skill-card">

      <div className="skill-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{items}</p>

    </article>
  );
}


function ProjectCard({
  number,
  title,
  description,
  technologies,
  github,
}) {
  return (
    <article className="project-card">

      <div className="project-top">

        <span className="project-number">
          {number}
        </span>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="project-github"
        >
          GitHub ↗
        </a>

      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="technologies">
        {technologies}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        View Repository →
      </a>

    </article>
  );
}


function Education({
  year,
  title,
  institute,
  result,
}) {
  return (
    <article className="education-item">

      <div className="education-year">
        {year}
      </div>

      <div className="education-content">

        <h3>{title}</h3>

        <p>{institute}</p>

        <strong>{result}</strong>

      </div>

    </article>
  );
}


export default App;