import './AttractionCard.css';

interface AttractionCardProps {
  title: string;
  description: string;
  image?: string;
  category?: string;
  href?: string;
}

export default function AttractionCard({ title, description, image, category, href = '/attractions' }: AttractionCardProps) {
  return (
    <div className="attraction-card card">
      {image && (
        <div className="attraction-card-image">
          <img src={image} alt={title} />
          {category && <span className="attraction-category">{category}</span>}
        </div>
      )}
      <div className="attraction-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a 
          href={href || '/attractions'} 
          className="attraction-card-link"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
}


