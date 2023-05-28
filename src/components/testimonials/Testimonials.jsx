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
      link: 'http://linkedin.com',
      name: 'Name of peers',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates voluptatem exercitationem quos voluptate quas quibusdam, quia, quod voluptates',
    },
    {
      id: 2,
      link: 'http://linkedin.com',
      name: 'Name of peers',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates voluptatem exercitationem quos voluptate quas quibusdam, quia, quod voluptates',
    },
    {
      id: 3,
      link: 'http://linkedin.com',
      name: 'Name of peers',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates voluptatem exercitationem quos voluptate quas quibusdam, quia, quod voluptates',
    },
    {
      id: 4,
      link: 'http://linkedin.com',
      name: 'Name of peers',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates voluptatem exercitationem quos voluptate quas quibusdam, quia, quod voluptates',
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
