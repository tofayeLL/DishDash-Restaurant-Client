

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="lg:w-72 mx-auto text-center mb-8 ">
            <p className="text-amber-500 text-base mb-3 italic">{subheading}</p>
            <h3 className="text-3xl font-semibold border-y-2 border-amber-100 py-6">{heading}</h3>


            
        </div>
    );
};

export default SectionTitle;