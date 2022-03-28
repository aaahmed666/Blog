import React from "react";

const Map = () => {
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13807.38942365587!2d31.3243168!3d30.0985577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3ce8b351dcd81a7c!2zUHJvZmVzc29yIE1haG1vdWQgWmFrYXJpYSDYo9iz2KrYp9iwINis2LHYp9it2KfYqiDYp9mE2LPZhdmG2Kkg2YjYp9mE2LPZg9ixINio2KzYp9mF2LnYqSDYudmK2YYg2LTZhdiz!5e0!3m2!1sen!2seg!4v1648045841424!5m2!1sen!2seg"
        width="100%"
        height="250"
        allowFullScreen=""
        loading="lazy"></iframe>
    </div>
  );
};

export default Map;
