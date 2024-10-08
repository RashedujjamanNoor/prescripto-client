import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [doctorInfo, setDoctorInfo] = useState(null);
  const fetchDocInfo = async () => {
    const docInfo = await doctors.find((doc) => doc._id === docId);
    setDoctorInfo(docInfo);
  };
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    doctorInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary  w-full sm:max-w-72 rounded-lg"
              src={doctorInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {doctorInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {doctorInfo.degree} - {doctorInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {doctorInfo.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {doctorInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment Fee:{" "}
              <span className="text-gray-600">${doctorInfo.fees}</span>
            </p>
          </div>
        </div>
        <RelatedDoctors docId={docId} speciality={doctorInfo.speciality} />
      </div>
    )
  );
};

export default Appointments;
