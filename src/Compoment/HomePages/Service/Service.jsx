'use client';
import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Service = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setService(data));
  }, []);

  return (
    <div>
      <div className="lg:w-2/3 mx-auto text-center mb-12">
        <h2 className="text-[#FF3811] text-center font-bold ">Services</h2>
        <h2 className="text-5xl font-bold my-5">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{' '}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 grid-cols-1">
        {service?.map((serv, idex) => (
          <ServiceCart key={idex} serv={serv}></ServiceCart>
        ))}
      </div>

      <div className="grid justify-center mt-12">
        <button className="btn bg-[#FF3811]  text-white">More Services</button>
      </div>
    </div>
  );
};

export default Service;
