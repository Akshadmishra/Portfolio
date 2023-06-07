import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/parag-pandit',
      name: 'Parag Pandit',
      role: 'Implementation Enginner | BPC Banking Technologies',
      test: 'From the moment I met Akshad, his passion for coding and dedication to continuous improvement were evident. He consistently demonstrated an impressive understanding of the development process and showcased his expertise through his exceptional coding skills. Whether it was tackling complex algorithms or crafting efficient and elegant solutions, Akshads proficiency in coding languages such as C++, Java, and AngularJS was truly commendable.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/palak-mishra-428359169',
      name: 'Palak Mishra',
      role: 'PEC Controller | Smiths Detection',
      test: "Working with Akshad has been an absolute pleasure. His enthusiasm, adaptability, and eagerness to learn make him an invaluable asset to any development team. I have no doubt that his expertise in coding, HTML5, CSS, and ReactJS will continue to propel him towards even greater heights in his career.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/shraddha-hule-472103225',
      name: 'Shraddha Hule',
      role: 'Full Stack Developer| Ruby on Rails | PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: "As a developer and problem solver, Akshad is the best person you could have as a project partner. We have worked together on several projects and his ability to solve problems and analyse solutions has helped us in achieving many milestones. I've seen him progress in his understanding of the development process and his skills have upgraded ever since. He is a perfect fit for any organisation and will definitely prove to be an asset to a company.",
    },
   /*  {
      id: 4,
      link: 'https://www.linkedin.com/in/isaicespedes/',
      name: 'Isai Céspedes',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "I mentored Meri some months ago, and I can say that she is one of those people that you love to work with. She was always interested in what I was trying to teach her, paying attention and always asking questions if something was not clear. When it comes to professional skills, she is really committed to work, always doing her best and going beyond the requirements of the project she's building.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/hamzaalitarar/',
      name: 'Hamza Tarar',
      role: 'Software Developer',
      test: "Throughout all our collaborations, Meri has always conducted herself politely and kindly. She comes across as someone that's always willing to help and puts the team ahead of herself. But beneath this, I see a strength and determination to distinguish herself. She's not only someone I highly recommend but is also someone I greatly respect.",
    }, */
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials