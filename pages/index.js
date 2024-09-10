import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Link, Element, animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'

function ResumeWebsite() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToNext = () => {
    scroll.scrollTo(window.innerHeight, {
      duration: 800,
      smooth: 'easeInOutQuart',
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-800 to-teal-500">
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <nav className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white"
          >
            Girik Khatta
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            {['Experience', 'Skills', 'Education', 'Contact'].map((item, index) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={800}
                offset={-70}
                className="text-white hover:text-teal-300 transition-colors cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        </nav>
      </header>

      <main>
        <section className="h-screen flex flex-col justify-center items-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="Profile Picture"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4 text-center"
          >
            Girik Khatta
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl mb-8 text-center"
          >
            IT Infrastructure and Operations Leader
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl mb-12 max-w-2xl text-center"
          >
            Experienced IT leader with a proven track record in managing complex infrastructure, driving innovation, and ensuring regulatory compliance in the financial and medical sectors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="animate-bounce cursor-pointer"
            onClick={scrollToNext}
          >
            <ChevronDown size={48} />
          </motion.div>
        </section>

        <Element name="experience">
          <ExperienceSection />
        </Element>
        <Element name="skills">
          <SkillsSection />
        </Element>
        <Element name="education">
          <EducationSection />
        </Element>
        <Element name="contact">
          <ContactSection />
        </Element>
      </main>
    </div>
  )
}

function ExperienceSection() {
  const [openSections, setOpenSections] = useState({})

  const toggleSection = (jobTitle, sectionTitle) => {
    setOpenSections(prev => ({
      ...prev,
      [jobTitle]: {
        ...prev[jobTitle],
        [sectionTitle]: !prev[jobTitle]?.[sectionTitle]
      }
    }))
  }

  const experiences = [
    {
      title: 'DIRECTOR OF IT OPERATIONS',
      company: 'Securityplus Federal Credit Union',
      location: 'Windsor Mill',
      period: 'February 2024 – August 2024',
      responsibilities: [
        {
          title: 'Leadership & Team Management',
          details: 'Spearheaded a high-performing IT infrastructure and operations team, including network engineers, system administrators, and help desk technicians, to ensure the reliability and scalability of IT services across the organization. Developed and implemented strategic IT operational plans aligned with business objectives and regulatory requirements, fostering a collaborative and high-performance culture.'
        },
        {
          title: 'IT Infrastructure, Network, and Systems Management',
          details: 'Directed the 24/7/365 operation, maintenance, and optimization of the credit union\'s IT infrastructure, including VMware virtualized environments, Dell EMC servers, and NetApp SAN storage. Managed and optimized network infrastructure across two data centers, a large operations center, and seven branch locations, ensuring seamless connectivity and operational resilience. Led the migration of on-premise disaster recovery infrastructure to a robust colocation facility, enhancing disaster recovery capabilities and business continuity.'
        },
        {
          title: 'Banking Operations & Core Systems',
          details: 'Integrated and managed core banking systems, including Fiserv DNA, AppWorx CoreFTP, and Fiserv Nautilus Documentation, ensuring high availability and performance of critical banking applications. Implemented a knowledge transfer program to maintain continuity in the management of critical systems, preparing for the retirement of senior staff.'
        },
        {
          title: 'Disaster Recovery, Business Continuity, and Resilience Planning',
          details: 'Developed and executed comprehensive disaster recovery and business continuity plans, including overseeing HVAC, UPS, and generator operations at primary and disaster recovery sites. Successfully migrated disaster recovery operations to a more resilient colocation facility, ensuring continuity in the event of a disaster.'
        },
        {
          title: 'Regulatory Compliance, Audit Preparedness, and SOW Development',
          details: 'Conducted a full FFIEC regulatory audit to assess compliance, leading to the development of a strategic migration roadmap from legacy on-premise systems to cloud-based infrastructure. Developed statements of work (SOWs) for IT solutions, ensuring all projects were aligned with regulatory standards and business objectives. Addressed audit findings from the NCUA, third-party internal auditors, and internal audit teams, ensuring full regulatory compliance.'
        },
        {
          title: 'Cybersecurity & Compliance Management',
          details: 'Enhanced the organization\'s cybersecurity posture by implementing multi-factor authentication (MFA), consolidating and monitoring elevated administrative accounts, and conducting regular GLBA risk assessments. Developed and executed security strategies to mitigate risks and comply with industry regulations.'
        },
        {
          title: 'IT Service Management (ITSM) & Help Desk Operations',
          details: 'Established a comprehensive IT Service Management (ITSM) structure that significantly improved IT service delivery. Launched a 24/7 IT Help Desk with a three-tiered escalation process, reducing Tier 3 workload by over 85% and enhancing overall user experience and support efficiency.'
        },
        {
          title: 'IT Asset Management, Refresh Projects, and Cloud Integration',
          details: 'Managed extensive IT asset refresh projects, including the transition of operations center staff to a mobile-first approach and the introduction of Azure AD-connected, Intune-managed systems. Facilitated the shift from legacy Active Directory to cloud-based identity management, aligning with the organization\'s future IT strategy.'
        },
        {
          title: 'Budget Management, Vendor Relations, and Strategic Planning',
          details: 'Managed a $4.5 million IT budget, overseeing vendor management, contract negotiations, and strategic financial planning to ensure alignment with corporate objectives and maximize ROI on IT investments.'
        },
        {
          title: 'Training, Knowledge Management, and Performance Metrics',
          details: 'Developed and operationalized a knowledge management system within the IT department, documenting all critical IT processes and procedures. This initiative enabled lower-tiered staff to take on higher-level responsibilities, contributing to departmental growth and efficiency. Established key performance indicators (KPIs) for IT infrastructure, network operations, and service delivery, improving visibility into operational performance and driving continuous improvement.'
        }
      ]
    },
    {
      title: 'IT MANAGER (Systems Engineer)',
      company: 'BrainScope Company',
      location: 'Chevy Chase',
      period: 'February 2017 – February 2024',
      responsibilities: [
        {
          title: 'On-Prem Infrastructure & VMware Environment Management',
          details: 'Led the management and optimization of IT infrastructure, including a combination of on-prem storage and Azure environments. Managed a large VMware-based environment consisting of 120 virtual machines that supported a wide range of organizational needs, including algorithm data processing, medical device software development, financial management systems, manufacturing fulfillment systems, customer management systems, and more. Additionally, oversaw multiple smaller VMware environments dedicated to the manufacturing and support of individual medical device products, ensuring that each environment met the specific needs of its associated product line.'
        },
        {
          title: 'Azure Implementation & Hybrid Cloud Integration',
          details: 'Spearheaded the implementation of Azure and its seamless integration with the on-prem infrastructure to form a robust hybrid cloud environment. Developed, managed, and administered both internal and customer-facing solutions within Azure, including systems used by hospitals and patients, as well as integrations with field medical devices. This hybrid environment enhanced the organization\'s scalability, flexibility, and disaster recovery capabilities, while also supporting real-time data processing and secure communication between medical professionals and patients.'
        },
        {
          title: 'FDA Regulatory Compliance & QMS Development',
          details: 'Managed all IT environments at BrainScope under strict FDA regulatory oversight, ensuring compliance with 21 CFR Part 11 (electronic records and signatures) and Part 820 (Quality System Regulation). Played a key role in developing the organization\'s QMS, ensuring that all IT-related activities aligned with FDA regulations, including data integrity and security, validation and documentation, and risk management for internal business operations, product development, software development, and medical device manufacturing.'
        },
        {
          title: 'Vulnerability Management',
          details: 'Conducted comprehensive vulnerability management across the organization using tools such as Tenable Nessus, Qualys VMDR, OpenVAS, and SentinelOne Complete. Continuously assessed the organization\'s IT assets for vulnerabilities, establishing a risk-based management system to efficiently and effectively mitigate risks, ensuring the security and integrity of the IT environment.'
        },
        {
          title: 'SDLC Implementation',
          details: 'Led the implementation of robust SDLC practices across the organization, collaborating closely with engineering teams to deploy and manage tools such as Terraform, Subversion, GitLab CI/CD, Jenkins, Artifactory, Ansible, and Docker. These tools were integral in automating processes, enhancing software quality, and ensuring regulatory compliance throughout the development lifecycle.'
        },
        {
          title: 'Disaster Recovery Site Development & IT Service Continuity',
          details: 'Spearheaded the growth of the organization\'s disaster recovery capabilities, transforming a simple offsite backup repository into a fully-fledged "Site-B" capable of handling complete infrastructure failover at a moment\'s notice to ensure continuous business operations. Built out multiple disaster recovery sites over time, including datacenters in D.C. area high rises, eventually migrating these environments, which combined on-prem storage with Azure, into datacenter colocations to enhance operational resilience and scalability.'
        },
        {
          title: 'Team Management & Scalable Support Structures',
          details: 'Developed and implemented scalable team management mechanisms to quickly adjust service capabilities based on organizational needs. Managed a tiered help desk support structure, enabling efficient resolution of support requests. Utilized ad-hoc contractors for projects and professional services as needed, ensuring the team could effectively cover a broad range of support requirements, including internal operations, product support, customer operations, and dedicated projects.'
        },
        {
          title: 'ITIL-Based Service Management',
          details: 'Managed incidents to restore normal service operation as quickly as possible, minimizing the impact on business operations. Identified and managed the root causes of incidents through Problem Management, preventing future occurrences and enhancing overall service reliability. Monitored IT infrastructure and services via Event Management to detect and respond to events that could impact performance. Managed service requests from users, such as password resets and software installations, ensuring timely and efficient Request Fulfillment. Ensured users had appropriate access to services while protecting against unauthorized access through robust Access Management protocols.'
        },
        {
          title: 'Vendor Relations, Supplier Management & Project SOW Development',
          details: 'Managed relationships with key vendors and suppliers to ensure they met contractual obligations and delivered value for money. Developed and executed detailed SOWs for various IT projects, such as infrastructure upgrades, network enhancements, and cybersecurity initiatives, ensuring all projects were completed on time, within scope, and under budget.'
        },
        {
          title: 'Service Transition & Change Management',
          details: 'Managed the transition of new or updated services into the operational environment, including the build, testing, and deployment phases, ensuring minimal impact on business operations. Implemented Change Management and SACM to maintain accurate information on IT assets and configurations.'
        },
        {
          title: 'CSI',
          details: 'Led CSI initiatives, using ITIL\'s CSI process to identify and implement improvements to IT services, processes, and infrastructure. Managed Service Measurement and Reporting to track and report on IT service performance, ensuring alignment with business goals and enhancing overall efficiency and effectiveness.'
        },
        {
          title: 'Endpoint Security & SIEM Automation',
          details: 'Upgraded endpoint security through the deployment of SentinelOne XDR/MDR and Microsoft Defender 365. Developed automated SIEM response protocols, integrating endpoint security with the broader IT infrastructure to enhance threat detection and response.'
        },
        {
          title: 'Communication Systems Optimization & Remote Work Technologies',
          details: 'Reengineered email and communication systems, achieving an 80% increase in efficiency. Enhanced remote work capabilities by securing communication channels and providing training on platforms like Microsoft Teams and Zoom, ensuring secure and efficient remote operations.'
        },
        {
          title: 'Storage Solutions & Disaster Recovery Planning',
          details: 'Engineered and managed storage solutions that combined on-prem and Azure environments, optimizing data tiering and disaster recovery strategies. Implemented automated storage management systems to enhance efficiency and ensure BCP in case of disruptions.'
        },
        {
          title: 'Network Reliability & Capacity Planning',
          details: 'Improved network reliability by 65% through strategic upgrades, including the deployment of Aruba network switch stacks and Cisco SAN network infrastructure. Conducted capacity planning and implemented automated network monitoring to maintain optimal performance and security across both on-prem and Azure environments.'
        },
        {
          title: 'IT Budget Management & Data Center Projects',
          details: 'Managed an annual IT budget ranging from $500,000 to $1.25 million, optimizing expenditures through strategic vendor management and project prioritization. Successfully led the design, construction, and operation of multiple data centers, leveraging a combination of on-prem and Azure storage, later migrating to a colocation facility to streamline infrastructure and enhance operational efficiency.'
        },
        {
          title: 'AI Framework Development & CRM Administration',
          details: 'Led the development of an AI framework to enhance service delivery and compliance using tools like Microsoft Co-Pilot and ChatGPT. Managed HubSpot CRM administration to improve sales processes and data management, ensuring a unified and strategic approach to customer relations.'
        }
      ]
    },
    {
      title: 'DATACENTER OPERATIONS ANALYST',
      company: 'USAToday/Gannett',
      location: 'McLean',
      period: 'December 2013 – February 2017',
      responsibilities: [
        {
          title: 'Systems Architecture & Operations Liaison',
          details: 'Acted as a critical liaison between systems architecture teams and datacenter operations. Shadowed architects during system implementations and deployments, facilitating the smooth transition of newly established systems to ongoing operations. Streamlined knowledge transfer to technicians and specialists, ensuring efficient and sustained management of these systems.'
        },
        {
          title: 'VMware Infrastructure Upgrade',
          details: 'Orchestrated an upgrade of VMware infrastructure, enhancing system uptime and optimizing resource utilization. Implemented advanced storage and network management solutions, automating key processes using VMware PowerCLI to reduce manual labor and increase operational precision.'
        },
        {
          title: 'Datacenter Operations Redesign',
          details: 'Led the redesign of datacenter operations to significantly boost energy efficiency. Integrated modern cooling systems and power management solutions, developing capacity planning and redundancy strategies that improved uptime and supported technological advancement through eco-friendly methods.'
        },
        {
          title: 'Backup Operations Management',
          details: 'Managed backup operations using NetBackup and Veeam, optimizing storage through deduplication and snapshot technologies. Strengthened off-site data redundancy and security by implementing innovative air-gapped backup solutions.'
        },
        {
          title: 'Windows Domain Services & Active Directory',
          details: 'Specialized in Windows domain services and Active Directory, improving integration and network efficiency. Streamlined network management through DHCP, enhanced security with Group Policy, and maintained reliable Active Directory services to ensure seamless operations.'
        },
        {
          title: 'Server Update & Migration',
          details: 'Led the update and migration of Windows servers, enhancing both security and productivity. Maintained thousands of servers with WSUS and SCCM, overseeing server performance and security with ManageEngine tools to ensure robust infrastructure integrity.'
        },
        {
          title: 'IT Integration Post-Mergers',
          details: 'Directed the IT integration of VMware environments following mergers, successfully merging Windows and Linux servers into a unified system. Ensured technical diligence and smooth infrastructure integration, which enhanced overall operational efficiency.'
        },
        {
          title: 'Virtualization & Resiliency Enhancements',
          details: 'Deployed VMware and Hyper-V virtualization solutions, improving resiliency with cluster sets and high performance using Storage Spaces Direct. Protected virtual environments with shielded VMs and centralized management using SCVMM, ensuring high availability and security.'
        },
        {
          title: 'Linux Server Management',
          details: 'Managed a large number of Linux servers, utilizing EM7 for monitoring and scripting for maintenance. Ensured optimal server performance through regular updates and expert troubleshooting, maintaining high levels of operational reliability.'
        },
        {
          title: 'Storage Area Network (SAN) Management',
          details: 'Oversaw the strategic design and management of Storage Area Networks, enhancing data replication and throughput. Integrated flash storage solutions, maintaining high-speed connectivity to ensure disaster recovery readiness.'
        },
        {
          title: 'Vulnerability Assessments & Security',
          details: 'Performed extensive vulnerability assessments using Nessus, developing and implementing strategies to mitigate identified risks. Led patch management and security initiatives, ensuring quick and consistent updates to fortify system defenses.'
        },
        {
          title: 'Break/Fix Operations & Hardware Management',
          details: 'Handled critical break/fix operations for East Coast datacenter hardware, managing server and network components. Conducted thorough hardware diagnostics and lifecycle management, ensuring constant availability and operational integrity.'
        }
      ]
    },
    {
      title: 'DATACENTER LAB ENGINEER (Datacenter Lab Specialist / Junior Tech)',
      company: 'Computer Sciences Corporation / Eagle Alliance, Annapolis Junction / DXC',
      location: '',
      period: 'June 2010 – March 2013',
      responsibilities: [
        {
          title: 'Server & Desktop Environment Management',
          details: 'Managed support and optimization of a diverse environment consisting of over 600 servers and 200+ desktops, significantly improving the performance of the development and testing lab. Acted as a key facilitator, effectively bridging the gap between the development of these environments and their ongoing operational maintenance.'
        },
        {
          title: 'Network Services Management',
          details: 'Oversaw essential network services such as DNS, DHCP, and Active Directory, ensuring the stability and security of the network infrastructure. Played a pivotal role in translating complex architectural designs into seamless and efficient operational practices.'
        },
        {
          title: 'Advanced Networking & Infrastructure Implementation',
          details: 'Handled advanced networking tasks on QFabric and Brocade devices, significantly enhancing network performance. Liaised between network architects and operations teams to ensure smooth implementation and ongoing maintenance of network infrastructure.'
        },
        {
          title: 'VMware Resource Realignment & Optimization',
          details: 'Realigned VMware resources to support a 120% increase in virtual machines, reducing the hardware footprint by 60% and expanding storage capacity by 20%. Coordinated closely with systems architects and datacenter operations to drive resource optimization projects.'
        },
        {
          title: 'Server Virtualization & Environment Streamlining',
          details: 'Led the virtualization of over 300 servers, reducing physical datacenter hardware and streamlining system environments. Provided critical support in transitioning systems to virtual setups, ensuring effective communication of changes to the operations team.'
        },
        {
          title: 'Storage Management & Backup Solutions',
          details: 'Collaborated with storage teams to refine NetApp resource allocation and implement robust nightly backups, ensuring data integrity and availability. Acted as an intermediary, translating complex storage solutions into actionable processes for operational personnel.'
        },
        {
          title: 'Data Center Airflow & Energy Efficiency',
          details: 'Executed a data center airflow redesign, leading to a 35% reduction in energy usage. Addressed power, cooling, and space efficiency challenges, and shared insights with the operations team to maintain new energy-efficient standards.'
        },
        {
          title: 'Automated VM Health Monitoring Solutions',
          details: 'Developed automated solutions for VM health monitoring, facilitating predictive management of resources and thermal events. Transferred knowledge and tools to the operations team, enabling proactive system management.'
        },
        {
          title: 'Cross-Functional Team Leadership',
          details: 'Led cross-functional teams in various IT projects, enhancing problem-solving skills and promoting a team-oriented approach. Ensured that operational teams were well-informed and equipped to continue the support and maintenance of these projects.'
        }
      ]
    },
    {
      title: 'INTERN',
      company: 'C.W. Architects',
      location: 'Columbia',
      period: '2009 – 2010',
      responsibilities: [
        {
          title: 'IT Infrastructure Modernization',
          details: 'Led the modernization of the IT infrastructure by replacing outdated technology with advanced solutions for file sharing, customer websites, booking systems, and online marketing. Introduced 3D modeling software, significantly enhancing design capabilities and securing a competitive advantage for the firm.'
        },
        {
          title: 'Design Project Coordination',
          details: 'Coordinated multiple design projects simultaneously, showcasing strong organizational and multitasking skills. Prepared comprehensive design documents and presentations utilizing industry-standard tools such as AutoCAD, REVIT, and Google SketchUp.'
        },
        {
          title: 'Career Foundation & IT Skill Development',
          details: 'Initiated my IT career at C.W. Architects, gaining foundational experience that paved the way for future consulting roles and private contracts. Focused on helping businesses upgrade their technological frameworks, setting the stage for a successful career in IT.'
        }
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="space-y-16">
          {experiences.map((job, jobIndex) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: jobIndex * 0.1 }}
              className="bg-gradient-to-r from-purple-100 to-teal-100 rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
              <h4 className="text-xl mb-2 text-gray-700">{job.company}</h4>
              <p className="text-gray-600 mb-4">{job.location} • {job.period}</p>
              <ul className="space-y-4">
                {job.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>
                    <button
                      onClick={() => toggleSection(job.title, resp.title)}
                      className="flex justify-between items-center w-full text-left font-semibold text-gray-800 hover:text-purple-600 transition-colors duration-200"
                    >
                      <span>{resp.title}</span>
                      {openSections[job.title]?.[resp.title] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    <AnimatePresence>
                      {openSections[job.title]?.[resp.title] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 text-gray-600"
                        >
                          {resp.details}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const skills = [
    'IT Infrastructure Management',
    'Cybersecurity',
    'Regulatory Compliance',
    'Cloud Computing (Azure)',
    'Disaster Recovery',
    'Team Leadership',
    'Budget Management',
    'Vendor Relations',
    'ITIL-Based Service Management',
    'VMware Virtualization',
    'Network Management',
    'Storage Solutions',
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 rounded-lg p-4 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
            >
              <p className="font-semibold">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationSection() {
  const education = [
    {
      degree: 'Master of Business Administration',
      school: 'University of Maryland University College',
      period: '2023 - Present',
    },
    {
      degree: 'Bachelor in Computer Networks and Security',
      school: 'University of Maryland University College / University of Maryland, Baltimore County',
      period: '2010 - 2015',
    },
    {
      degree: 'Pre-College: Architectural Design and Business Management',
      school: 'Carnegie Mellon',
      period: '2009',
    },
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-r from-purple-100 to-teal-100 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
              <h4 className="text-xl mb-2 text-gray-700">{edu.school}</h4>
              <p className="text-gray-600">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-700 via-blue-800 to-teal-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 rounded-lg p-8"
          >
            <p className="mb-4">
              <strong>Email:</strong> girikkhatta@gmail.com
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> (443) 538-8886
            </p>
            <p className="mb-4">
              <strong>Location:</strong> Marriottsville, MD 21104
            </p>
            <p className="mb-4">
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/girik-khatta-a74b7a166/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-teal-300 transition-colors"
              >
                Girik Khatta
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ResumeWebsite