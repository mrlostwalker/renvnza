import React from "react";

function Map() {
  return (
    <div className="m-4 md:m-8 xl:mx-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1117.830297709082!2d76.88503985095359!3d8.564276538230194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bee2c53009c5%3A0x6510861b288460a1!2sUniversity%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1718091626117!5m2!1sen!2sin"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[30rem] rounded-md map"
      ></iframe>
    </div>
  );
}

export default Map;
