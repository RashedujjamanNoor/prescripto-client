import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr,1fr,1fr] gap-14 my-10 mt-40 text-sm">
        <div>
        <h1 onClick={() => navigate("/")}
        
        className="font-bold text-2xl mb-5 text-primary cursor-pointer">DoctorBari</h1>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+88017XXXXXXX</li>
            <li>doctorshub@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="text-sm text-center py-5">
          Copyright © 2024 DoctorsHub - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
