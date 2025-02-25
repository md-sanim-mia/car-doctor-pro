'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { fullName, email, password } = data;
    console.log(fullName, email, password);
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <div className="text-center lg:text-left lg:w-full">
            <img
              className="w-full"
              src={'/assets/images/login/login.svg'}
              alt=""
            />
          </div>
          <div className="card shrink-0 w-full md:w-2/3 lg:w-1/2 shadow-2xl bg-base-100">
            <h2 className="text-4xl font-semibold text-center pt-4 text-[#FF3811]">
              Register Now
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                  {...register('fullName', { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register('email', { required: true })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register('password', { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="bg-[#FF3811] btn text-white "
                  type="submit"
                  value="Register"
                />
              </div>

              <h2 className="text-center ">
                Already have an account?
                <Link href={'/login'}>
                  <button className="text-blue-600 font-semibold">Login</button>
                </Link>{' '}
              </h2>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
