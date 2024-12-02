import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Vehicle Service Management System',
      tags: ['Service Management', 'MERN Stack', 'Web Application'],
      projectLink: 'https://github.com/Imaludayanga6/Vehicle-service-Management-System'
    },
    {
      imgSrc: '/images/project-2.png',
      title: 'Multitask Mobile App',
      tags: ['Task Management', 'Mobile Development', 'Android Studio'],
      projectLink: 'https://github.com/Imaludayanga6/Multi-Task-App'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'UI Design App',
      tags: ['UI/UX Design', 'Mobile Application', 'Creative Layouts'],
      projectLink: 'https://github.com/Imaludayanga6/UI-Design-App'
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Online Property Management System',
      tags: ['Property Management', 'Web Application', 'Real Estate'],
      projectLink: 'https://github.com/Imaludayanga6/online-property-management-system'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'Online Examination System',
      tags: ['Education', 'Assessment Platform', 'Web Development'],
      projectLink: 'https://github.com/Imaludayanga6/online-examination-system'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/Imaludayanga6/ImalUdayanaga'
    },
  ];
const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">My Portfolio highlights</h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                
                {works.map(({ imgSrc, title, tags, projectLink}, key) => (
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="reveal-up"
                    />
                ))}
            </div>
            
        </div>
    </section>
  )
}

export default Work
