import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

const stories=[
 {tag:"AZURE LIFE",title:"A community designed around the way you live",copy:"Discover the everyday moments, thoughtful services and welcoming spaces that make Azure feel like home."},
 {tag:"NEWS & EVENTS",title:"Living well, together",copy:"From family moments to the places that bring neighbours together, explore life beyond the front door."},
 {tag:"THE AZURE JOURNAL",title:"The details that make a difference",copy:"A closer look at our residences, amenities and the care behind every Azure experience."}
];
export default function News(){return <div className="news-page"><section className="simple-hero"><p className="eyebrow">AZURE LIFE / NEWS & EVENTS</p><h1>Live<br/><em>beyond.</em></h1></section><section className="news-grid section-pad">{stories.map((story)=><article className="news-card" key={story.title}><div className="news-card-art"/><p className="eyebrow gold">{story.tag}</p><h2>{story.title}</h2><p>{story.copy}</p><Link href="/contact" className="text-button">FIND OUT MORE <ArrowUpRight size={15}/></Link></article>)}</section></div>}
