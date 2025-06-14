// import React from 'react';
// import {
//   Heart,
//   MapPin,
//   User,
//   Hospital as HospitalIcon,
//   FileText,
//   Phone,
//   Calendar,
//   DollarSign,
//   Share2
// } from 'lucide-react';



// function DonateFund() {
//     let campaignData =Data;
 
//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };



//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
  

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Hero */}
//             <div className="bg-white rounded-xl shadow-sm overflow-hidden">
//               <div className="p-8">
//                 {/* <StatusBadge status={campaignData.fundDetails.status} isVerified={campaignData.isVerified} /> */}
//                 <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
//                 this is tittle
//                 </h1>
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   this is description
//                 </p>
//               </div>
//             </div>

//             {/* Media */}
//             <div className="bg-white rounded-xl shadow-sm p-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Campaign Media</h2>
//               photo and video
//               {/* <MediaGallery photos={campaignData.media.photos} videoAppeal={campaignData.media.videoAppeal} /> */}
//             </div>

//             {/* Patient Info */}
//             <div className="bg-white rounded-xl shadow-sm p-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Information</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="flex items-center p-4 bg-blue-50 rounded-lg">
//                   <User className="w-6 h-6 text-blue-600 mr-3" />
//                   <div>
//                     <p className="text-sm text-blue-700 font-medium">Patient Name</p>
//                     <p className="text-lg font-semibold text-blue-900">this is for patientname</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center p-4 bg-green-50 rounded-lg">
//                   <User className="w-6 h-6 text-green-600 mr-3" />
//                   <div>
//                     <p className="text-sm text-green-700 font-medium">Gender</p>
//                     <p className="text-lg font-semibold text-green-900">this is for gender</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center p-4 bg-purple-50 rounded-lg">
//                   <MapPin className="w-6 h-6 text-purple-600 mr-3" />
//                   <div>
//                     <p className="text-sm text-purple-700 font-medium">Location</p>
//                     <p className="text-lg font-semibold text-purple-900">
//                       this is for city, this is for state
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center p-4 bg-orange-50 rounded-lg">
//                   <Phone className="w-6 h-6 text-orange-600 mr-3" />
//                   <div>
//                     <p className="text-sm text-orange-700 font-medium">Contact</p>
//                     <p className="text-lg font-semibold text-orange-900">this is for phone number</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Medical Info */}
//             <div className="bg-white rounded-xl shadow-sm p-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Information</h2>
//               <div className="space-y-6">
//                 <div className="border-l-4 border-red-500 pl-6">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Diagnosis</h3>
//                   <p className="text-gray-700">this is for mediacl diognosis</p>
//                 </div>
//                 <div className="border-l-4 border-blue-500 pl-6">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Condition Description</h3>
//                   <p className="text-gray-700">this is for medical conditionDescription</p>
//                 </div>
//               </div>
//             </div>

//             {/* Hospital Info */}
//             <div className="bg-white rounded-xl shadow-sm p-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Hospital & Treatment Details</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="flex items-center p-4 bg-teal-50 rounded-lg">
//                   <HospitalIcon className="w-6 h-6 text-teal-600 mr-3" />
//                   <div>
//                     <p className="text-sm text-teal-700 font-medium">Hospital</p>
//                     <p className="text-lg font-semibold text-teal-900"> this is for hospital name</p>
//                     <p className="text-sm text-teal-700">this is for hopital location</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center p-4 bg-indigo-50 rounded-lg">
//                   <User className="w-6 h-6 text-indigo-600 mr-3" />
//                   <div>
//                     <p className="text-sm text-indigo-700 font-medium">Attending Doctor</p>
//                     <p className="text-lg font-semibold text-indigo-900"> this is for doctor name</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 p-6 bg-yellow-50 rounded-lg">
//                 <div className="flex items-center mb-4">
//                   <DollarSign className="w-6 h-6 text-yellow-600 mr-3" />
//                   <h3 className="text-lg font-semibold text-yellow-900">Treatment Cost</h3>
//                 </div>
//                 <p className="text-3xl font-bold text-yellow-900">
//                   this is for estimated cost value this is for currency
//                 </p>
//               </div>

//               <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <a href={this is for medicalreport url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
//                   <FileText className="w-5 h-5 text-blue-600 mr-2" />
//                   <span className="text-blue-700 font-medium">View Medical Reports</span>
//                 </a>
//                 <a href={this is for cost Estimates url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 border-2 border-green-200 rounded-lg hover:bg-green-50 transition-colors">
//                   <FileText className="w-5 h-5 text-green-600 mr-2" />
//                   <span className="text-green-700 font-medium">View Cost Estimates</span>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
          

//             {/* <CountdownTimer deadline={campaignData.fundDetails.deadline} /> */}

//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Campaign Details</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <Calendar className="w-5 h-5 text-gray-600 mr-3" />
//                   <div>
//                     <p className="text-sm text-gray-600">Campaign Deadline</p>
//                     <p className="font-semibold text-gray-900">{formatDate(this is for deadline date)}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <User className="w-5 h-5 text-gray-600 mr-3" />
//                   <div>
//                     <p className="text-sm text-gray-600">Submitted By</p>
//                     <p className="font-semibold text-gray-900"> this is for submitedby </p>
//                   </div>
//                 </div>
//                 <div className="pt-4 border-t">
//                   <p className="text-sm text-gray-600">Created</p>
//                   <p className="font-semibold text-gray-900">{formatDate(this is for created date)}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Why We Need Your Help</h3>
//               <p className="text-gray-700 leading-relaxed">{this is for fund details reason for help}</p>
//               {this is for notes && (
//                 <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                   <p className="text-sm text-gray-600 mb-1">Additional Notes</p>
//                   <p className="text-gray-700">{this is for notes}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DonateFund;
