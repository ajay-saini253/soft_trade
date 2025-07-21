// images
import blogImg1 from "../images/blog/colleagues-working-together-office.jpg";
import blogImg2 from "../images/blog/desktop_erp.png";
import blogImg3 from "../images/blog/cloud-computing.png";
import blogImg4 from "../images/blog/Group 427320901.png";
import blogImg5 from "../images/blog/Rectangle 3807.png";
import blogImg6 from "../images/blog/Rectangle 3804.png";
import blogImg7 from "../images/blog/img01.jpg";
import blogImg8 from "../images/blog/img02.jpg";
import blogImg9 from "../images/blog/img03.jpg";
import blogImg10 from "../images/blog/cd-img01.jpg";
import blogImg11 from "../images/blog/cd-img02.jpg";
import blogImg12 from "../images/blog/cd-img03.jpg";
import blogImg13 from "../images/blog/img04.jpg";
import blogImg14 from "../images/blog/img05.jpg";
import blogImg15 from "../images/blog/img06.jpg";
import blogImg16 from "../images/blog/img07.jpg";



const blogs = [
    {
        id: '1',
        title: 'Mobile ERP',
        slug:'mobile-erp',
        screens: blogImg1,
        description: 'Mobile Erp is a softwere which use for Managment',
        author: 'Soft Trade',
        authorTitle:'Sineor Consultant',
        create_at: 'October 4, 2022',
        comment:'35',
        thumb:'Technology',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'DESKTOP ERP',
        slug:'desktop erp',
        screens: blogImg2,
        description:`Don't forget that gifts often come with costs that go beyond their purchase price.
                        When you purchase a child the latest smartphone,
                        you're also committing to a monthly phone bill. When you purchase the latest gaming system,
                        you're likely not going to be satisfied with the games that come with it for long and want to purchase new titles to play.
                        When you buy gifts it's important to remember that some come with additional costs down the road that can be much more expensive
                       than the initial gift itself.`,
        author: 'Andrew',
        authorTitle:'Creative Director',
        create_at: 'October 4, 2023',
        comment:'80',
        thumb:'Branding',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Cloud Base ERP',
        slug: 'Cloud-base-erp',
        screens: blogImg3,
        description: 'cloud-base-erp managment',
        author: 'Kurtz',
        authorTitle:'Art Director',
        create_at: 'October 4, 2024',
        comment:'95',
        thumb:'SEO',
        blClass:'format-video',
    },
    {
        id: '4',
        title: 'Faster Neuro Trials with AI-Powered Imaging',
        slug: 'Faster-Neuro-Trials-with-AI-Powered-Imaging',
        screens: blogImg4,
        description: 'Digital transformation with IT solutions is about using.',
        author: 'Alex',
        authorTitle:'Art Director',
        create_at: 'October 5, 2023',
        comment:'95',
        thumb:'Branding',
    },
    {
        id: '5',
        title: 'Transforming Clinical Trials Through AI and Cloud',
        slug: 'Transforming-Clinical-Trials-Through-AI-and-Cloud',
        screens: blogImg5,
        description: 'The future of cybersecurity relies on innovative IT.',
        author: 'Aliza',
        authorTitle:'Art Director',
        create_at: 'October 6, 2022',
        comment:'95',
        thumb:'Consulting',
    },
    {
        id: '6',
        title: 'IXICO’s AI Biomarkers: Smarter, Faster Trials',
        slug: 'IXICOs-AI-Biomarkers-Smarter-Faster-Trials',
        screens: blogImg6,
        description: 'Digital transformation with IT solutions is about..',
        author: 'Tika',
        authorTitle:'Art Director',
        create_at: 'October 9, 2024',
        comment:'95',
        thumb:'Embarking',
    },
    {
        id: '7',
        title: 'How to Prevent Ransomware Attacks, Tips for Businesses..',
        slug: 'How-to-Prevent-Ransomware-Attacks-Tips-for-Businesses..',
        screens: blogImg7,
        description: 'Student visa consulting agencies are equipped with professionals who specialize in the intricacies of visa applications.',
        author: 'Johnson',
        authorTitle:'Art Director',
        create_at: '11/12/2024',
        comment:'95',
        thumb:'Consulting',
    },
    {
        id: '8',
        title: 'Top Cybersecurity Threats Facing Businesses in the year..',
        slug: 'Top-Cybersecurity-Threats-Facing-Businesses-in-the year..',
        screens: blogImg8,
        description: 'The realm of visa applications is a and ever-changing landscape...',
        author: 'Anderson',
        authorTitle:'Art Director',
        create_at: '18/12/2024',
        comment:'95',
        thumb:'Consulting',
    },
    {
        id: '9',
        title: 'Common cyber threats and how to prevent them..',
        slug: 'Common-cyber-threats-and-how-to-prevent-them..',
        screens: blogImg9,
        description: 'Embarking on a journey to study abroad is an aspiration many students..',
        author: 'Martinez',
        authorTitle:'Art Director',
        create_at: '27/12/2024',
        comment:'95',
        thumb:'Consulting',
    },
    {
        id: '10',
        title: 'DevOps for Both Discontinuous and Continuous Improvements',
        slug: 'DevOps-for-Both-Discontinuous-and-Continuous-Improvements',
        screens: blogImg10,
        description: 'Student visa consulting agencies are equipped with professionals who specialize in the intricacies of visa applications.',
        author: 'Alex Olebar',
        authorTitle:'Art Director',
        create_at: '11/12/2024',
        comment:'95',
        thumb:'Consulting',
    },
    {
        id: '11',
        title: 'Five Great DevOps Job Opportunities',
        slug: 'Five-Great-DevOps-Job-Opportunities',
        screens: blogImg11,
        description: 'The realm of visa applications is a and ever-changing landscape...',
        author: 'Rakim Yakun',
        authorTitle:'Art Director',
        create_at: '18/12/2024',
        comment:'95',
        thumb:'Consulting',
    },
    {
        id: '12',
        title: 'Anthropic AI Model Automates Developer Mouse Movements',
        slug: 'Anthropic-AI-Model-Automates-Developer-Mouse-Movements',
        screens: blogImg12,
        description: 'Embarking on a journey to study abroad is an aspiration many students..',
        author: 'Kim Jung',
        authorTitle:'Art Director',
        create_at: '27/12/2024',
        comment:'95',
        thumb:'Consulting',
    },
    {
        id: '13',
        title: 'Soft Trade Launches AI-Support..',
        slug: 'Soft Trade-Launches-AI-Support',
        screens: blogImg13,
        read:'3 min read',
    },
    {
        id: '14',
        title: 'New Features Boost Soft Trade Support Solutions..',
        slug: 'New-Features-Boost-Soft Trade-Support-Solutions',
        screens: blogImg14,
        read:'4 min read',
    },
    {
        id: '15',
        title: 'Soft Trade Enhances Support with AI Automation..',
        slug: 'Soft Trade-Enhances-Support-with-AI-Automation..',
        screens: blogImg15,
        read:'8 min read',
    },
    {
        id: '16',
        title: 'Soft Trade AI Deflects 15% of Support Tickets..',
        slug: 'Soft Trade-AI-Deflects-15%-of-Support-Tickets..',
        screens: blogImg16,
        read:'9 min read',
    }
];
export default blogs;