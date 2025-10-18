import React from 'react';

interface ValueCardProps {
    title: string;
    description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
        <h4 className="text-xl font-bold text-firetech-red mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
    </div>
);

const CoreValues: React.FC = () => {
    const values = [
        { title: 'Safety First', description: 'We prioritize the well-being of people and communities in everything we do.' },
        { title: 'Reliability', description: 'We build lasting partnerships through consistent and trustworthy service.' },
        { title: 'Quality', description: 'We provide only internationally certified products and materials.' },
        { title: 'Commitment', description: 'We are dedicated to delivering on time and exceeding client expectations.' },
        { title: 'Innovation', description: 'We leverage advanced solutions to meet modern construction and safety needs.' },
        { title: 'Integrity', description: 'We operate with honesty and transparency in every project.' },
    ];

    return (
        <section id="values" className="py-16 sm:py-20 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-sm font-bold uppercase text-firetech-red tracking-widest mb-2">Guiding Principles</h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-12">Our Core Values</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {values.map((value, index) => (
                        <ValueCard key={index} title={value.title} description={value.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;