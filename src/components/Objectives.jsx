import React from 'react';
import { Users, Target, Award, Heart, CheckCircle2, MapPin } from 'lucide-react';

const Objectives = () => {
  const corePrograms = [
    {
      icon: <Users />,
      title: "Social Cohesion",
      desc: "To promote and harness social cohesion amongst all community members.",
      img: "https://images.unsplash.com/photo-1523240715630-97af400173b0?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Target />,
      title: "Healthy Lifestyles",
      desc: "Promote and develop healthy lifestyles with coaching and motivational seminars.",
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Award />,
      title: "Youth Mentorship",
      desc: "Mentor and provide guidance to the youth, this will be done by creating programs that will empower and uplift the youth in our respective communities.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Heart />,
      title: "Skills Development",
      desc: "Facilitate public good, civic and furtherance of education as well as skills development in all our communities.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <CheckCircle2 />,
      title: "Employment Programs",
      desc: "Promote and Facilitate Youth Employment and Entrepreneurial Programs.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <MapPin />,
      title: "Reintegration Programs",
      desc: "Develop workable diversion interventions and pathways for the youth in conflict with the law as well as ex offender reintegration programs.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1521791136364-798a7bc0d261?auto=format&fit=crop&q=60&w=800";
  };

  return (
    <section id="objectives" className="py-20 md:py-24 bg-slate-50 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Our Objectives</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">Our Impact in Action</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {corePrograms.map((p, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-500 group">
              <div className="h-56 md:h-64 rounded-[2rem] overflow-hidden mb-6 relative">
                <img
                  src={p.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt={p.title}
                  onError={handleImageError}
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-xl text-orange-600 shadow-md">
                  {p.icon}
                </div>
              </div>
              <div className="p-4 pt-0">
                <h3 className="text-xl md:text-2xl font-black mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 font-medium">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;