import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { v4 as uuidv4 } from 'uuid';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/ayodejiabidemi/',
      name: 'Ayodeji Abidemi',
      review: "Abdul Saboor Sohaib is an excellent software developer I met learning at Microverse. We worked on a project together and he was a great collaborator. He displayed the act of kindness and support to his partners, He proved his commitment and determination over and over again, He's the type of person that has the patience to learn new things, and his attention to detail is evident in all of the projects I've worked with him on. He is always PUNCTUAL and values your time. It has been a pleasure working with him! I recommend him highly and without reservations.",
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/kolapo-akinrinlola/',
      name: 'KOLAPO AKINRINLOLA',
      review: "Abdul is a developer you'll surely want on your team due to his perseverance, he stiffs to know more and is open to learning something new. He offers help whenever he can and is also a good team player. He loves professionalism and strives to get the job done, efficiently though. I recommend Abdul for any job involving a team player and efficient code writing.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/habibpayenda/',
      name: 'Habib Payenda',
      review: "Abdul Saboor is exactly the sort of software developer any company would love. I met them while struggling with a tough data structures problem, and within a few minutes they'd managed to explain a concept I'd been struggling with for days. They have a great way of simplifying complex problems into bite-sized pieces, and as a junior developer, that was really valuable for me. They're also just a fun person to chat with! If you need to get a job done simply and efficiently, Abdul Saboor is definitely the person for you.",
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/andy-diegaardt/',
      name: 'Andrea Diegaardt',
      review: "If you’re looking to work with someone who can help you reach your full potential, Abdul is that person. I have had the pleasure of working with him on a few projects now and he has been very supportive and motivating. He had excellent time management skills and a knack for keeping everyone calm and productive during tough times.",
    },
    {
      id: 5,
      link: 'http://linkedin.com',
      name: 'Name of peers',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates voluptatem exercitationem quos voluptate quas quibusdam, quia, quod voluptates',
    },
  ];

  return (
    <section id="testimonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container container__testimonials"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          testimonials.map(({
            id,
            link,
            name,
            review,
          }) => (
            <SwiperSlide key={id} className="testimonial">
              <div className="peer__avatar">
                <a href={link} target="_blank" rel="noreferrer">
                  <BsLinkedin />
                </a>
              </div>
              <h5 className="peer__name">{name}</h5>
              <small className="peer__review">{review}</small>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
