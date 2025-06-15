import React, { useEffect } from 'react';
import { FetchfundraisingProfile} from"../Store/Reducers/fundraiseReducer"
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import {
  Heart,
  MapPin,
  User,
  Hospital as HospitalIcon,
  FileText,
  Phone,
  Calendar,
  DollarSign,
  Share2
} from 'lucide-react';

const DonateFund = () => {

    const dispatch=useDispatch()
    const id=useSelector((state)=>state.fundraise.id)
      const { data, isLoading, error } = useSelector(
    (state) => state.fundraise.Fundraisingprofile
  );
   useEffect(() => {
    dispatch(FetchfundraisingProfile(id));
  }, [dispatch, id]);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: something went wrong try again later</p>;
 
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
  

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-8">
                {/* <StatusBadge status={campaignData.fundDetails.status} isVerified={campaignData.isVerified} /> */}
                <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
                {data.campaignTitle}
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {data.description}
                </p>
              </div>
            </div>

            {/* Media */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Campaign Media</h2>
             <div className='flex overflow-x-auto gap-5'> <img src={data.media.photos} className='rounded-lg w-full h-auto' />
              <video  className='rounded-lg w-full h-auto' controls>
  <source src={data.media.videoAppeal} type="video/mp4"/>
  Your browser does not support the video tag.
</video></div>
              {/* <MediaGallery photos={campaignData.media.photos} videoAppeal={campaignData.media.videoAppeal} /> */}
            </div>

            {/* Patient Info */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <User className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-blue-700 font-medium">Patient Name</p>
                    <p className="text-lg font-semibold text-blue-900">{data.patient.fullName}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <User className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <p className="text-sm text-green-700 font-medium">Gender</p>
                    <p className="text-lg font-semibold text-green-900">{data.patient.gender}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-600 mr-3" />
                  <div>
                    <p className="text-sm text-purple-700 font-medium">Location</p>
                    <p className="text-lg font-semibold text-purple-900">
                      {data.patient.location.city} {data.patient.location.state}
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                  <Phone className="w-6 h-6 text-orange-600 mr-3" />
                  <div>
                    <p className="text-sm text-orange-700 font-medium">Contact</p>
                    <p className="text-lg font-semibold text-orange-900">{data.patient.contactNumber}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Info */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Information</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Diagnosis</h3>
                  <p className="text-gray-700">{data.medical.diagnosis}</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Condition Description</h3>
                  <p className="text-gray-700">{data.medical.conditionDescription}</p>
                </div>
              </div>
            </div>

            {/* Hospital Info */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hospital & Treatment Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center p-4 bg-teal-50 rounded-lg">
                  <HospitalIcon className="w-6 h-6 text-teal-600 mr-3" />
                  <div>
                    <p className="text-sm text-teal-700 font-medium">Hospital</p>
                    <p className="text-lg font-semibold text-teal-900">{data.medical.hospital.name}</p>
                    <p className="text-sm text-teal-700">{data.medical.hospital.location}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-indigo-50 rounded-lg">
                  <User className="w-6 h-6 text-indigo-600 mr-3" />
                  <div>
                    <p className="text-sm text-indigo-700 font-medium">Attending Doctor</p>
                    <p className="text-lg font-semibold text-indigo-900">{data.medical.doctorName}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-yellow-50 rounded-lg">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-6 h-6 text-yellow-600 mr-3" />
                  <h3 className="text-lg font-semibold text-yellow-900">Treatment Cost</h3>
                </div>
                <p className="text-3xl font-bold text-yellow-900">
                  {data.medical.estimatedCost} {data.medical.currency}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href={data.medical.medicalReports} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                  <FileText className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-blue-700 font-medium">View Medical Reports</span>
                </a>
                <a href={data.medical.costEstimates} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 border-2 border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                  <FileText className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-700 font-medium">View Cost Estimates</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
          

            {/* <CountdownTimer deadline={campaignData.fundDetails.deadline} /> */}

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Campaign Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Campaign Deadline</p>
                    <p className="font-semibold text-gray-900">{formatDate(data.fundDetails.deadline)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <User className="w-5 h-5 text-gray-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Submitted By</p>
                    <p className="font-semibold text-gray-900">{data.submittedBy} </p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">Created</p>
                  <p className="font-semibold text-gray-900">{formatDate(data.createdAt)}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why We Need Your Help</h3>
              <p className="text-gray-700 leading-relaxed">{data.fundDetails.reasonForHelp}</p>
              {data.notes && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Additional Notes</p>
                  <p className="text-gray-700">{data.notes}</p>
                </div>
              )}
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bank account details</h3>
              <p className="text-gray-700 leading-relaxed">ACCOUNT NUMBER:   {data.paymentInfo.accountNumber}</p>
              <p className="text-gray-700 leading-relaxed">IFSC CODE:   {data.paymentInfo.ifscCode}</p>
              <p className="text-gray-700 leading-relaxed">BANK:   {data.paymentInfo.bankName}</p>
              <p className="text-gray-700 leading-relaxed">UPI ID:   {data.paymentInfo.upiId}</p>
              {data.notes && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">ACOUNT HOLDER</p>
                  <p className="text-gray-700">{data.paymentInfo.accountHolderName}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  
)
}

export default DonateFund;
