// import { Eye, Target, GraduationCap } from 'lucide-react'
// import PageHero from '../components/PageHero'

// const mission = [
//   {
//     id: 'M1',
//     text: 'To make the department a Center for Excellence in Technical Education, Innovation & Research.',
//   },
//   {
//     id: 'M2',
//     text: 'To foster students technologically up-to-date and endow with a high-end environment of learning by doing through continuous amendment of the curriculum with periodic feedback from all stakeholders.',
//   },
//   {
//     id: 'M3',
//     text: 'To strive to touch global benchmarks in shaping future leaders to become part of top-notch industries and research organizations at national and international levels.',
//   },
// ]

// const peos = [
//   {
//     id: 'PEO1',
//     title: 'Technical Expertise',
//     text: 'Develop the ability to plan, analyze, design, code, implement, test and maintain the software product for real time systems that are technically sound, economically feasible, environmentally sustainable and socially acceptable.',
//   },
//   {
//     id: 'PEO2',
//     title: 'Successful Career',
//     text: 'Exhibit professionalism, ethical attitude and technical excellence in the field of Computer Applications to become a successful Technocrat or Entrepreneur.',
//   },
//   {
//     id: 'PEO3',
//     title: 'Interpersonal Skills',
//     text: 'Develop communication skills, teamwork and leadership quality in their professional, multidisciplinary projects and adapt to current trends.',
//   },
//   {
//     id: 'PEO4',
//     title: 'Continuous Learning',
//     text: 'Prepare the students to pursue higher studies by acquiring knowledge in mathematical and engineering principles in the field of computing and related fields and to work continuously in the fields of teaching and research.',
//   },
// ]

// function VisionMissionPage() {
//   return (
//     <>
//       <PageHero
//         badge="Vision & Mission"
//         title="Vision, Mission & Program Educational Objectives"
//         subtitle="Institute of Engineering & Management, Newtown, Kolkata"
//       />

//       {/* Vision + Mission */}
//        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
//         <div className="grid md:grid-cols-2 gap-6 items-stretch">
//           {/* Vision card */}
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-brand-blue p-6 sm:p-7 flex flex-col">
//             <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
//               <Eye className="w-6 h-6 text-brand-blue" strokeWidth={2} />
//             </div>
//             <h2 className="text-navy font-bold text-lg sm:text-xl mb-3">Vision</h2>
//             <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
//               To be globally recognized through excellence in Outcome Based Education
//               utilizing the potential of Application Oriented Research and Innovation
//               in the field of Computer Applications. The holistic approach rendered in amalgamating the academic progress of the students with the niche of cutting edge technology rightly proclaims to bridge the industry-academia gap.
//             </p>
//             <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-gray-100">
//               {['Outcome Based Education', 'Applied Research', 'Innovation', 'Global Recognition'].map((tag) => (
//                 <span
//                   key={tag}
//                   className="inline-block bg-blue-50 text-brand-blue text-xs font-medium px-3 py-1.5 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Mission card */}
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-orange-400 p-6 sm:p-7 flex flex-col">
//             <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
//               <Target className="w-6 h-6 text-orange-500" strokeWidth={2} />
//             </div>
//             <h2 className="text-navy font-bold text-lg sm:text-xl mb-4">Mission</h2>
//             <ul className="space-y-3">
//               {mission.map((m) => (
//                 <li key={m.id} className="flex gap-2.5">
//                   <span className="text-xs font-semibold text-orange-500 shrink-0 mt-0.5">{m.id}</span>
//                   <span className="text-gray-600 text-sm sm:text-base leading-relaxed">{m.text}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>


//       {/* PEOs */}
//       <section className="bg-gray-50 py-14 sm:py-16 lg:py-20">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <span className="inline-block bg-blue-50 text-brand-blue text-xs font-medium px-3 py-1.5 rounded-full mb-4">
//               PEOs
//             </span>
//             <h2 className="text-2xl sm:text-3xl font-bold text-navy">Program Educational Objectives</h2>
//             <div className="w-16 h-1 bg-brand-blue rounded-full mx-auto mt-4" />
//           </div>

//           <div className="grid sm:grid-cols-2 gap-6">
//             {peos.map((peo) => (
//               <div
//                 key={peo.id}
//                 className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
//               >
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
//                     <GraduationCap className="w-5 h-5 text-brand-blue" strokeWidth={2} />
//                   </div>
//                   <div>
//                     <span className="text-xs font-semibold text-brand-blue">{peo.id}</span>
//                     <h3 className="text-navy font-semibold text-sm sm:text-base">{peo.title}</h3>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed">{peo.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default VisionMissionPage


import PageHero from '../components/PageHero'
import VisionMissionPEO from '../components/VisionMissionPEO'

function VisionMissionPage() {
  return (
    <>
      <PageHero
        badge="Vision & Mission"
        title="Vision, Mission & Program Educational Objectives"
        subtitle="Institute of Engineering & Management, Newtown, Kolkata"
      />
      <VisionMissionPEO />
    </>
  )
}

export default VisionMissionPage