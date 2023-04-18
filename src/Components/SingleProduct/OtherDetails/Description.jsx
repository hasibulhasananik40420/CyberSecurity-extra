import React from "react";
import {  motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div  initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}>
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus id quod maxime placeat possimus omnis voluptas assumenda
      est, omnis dolor repellendus. Temporibus autem quibusdam aut officiis
      debitis aut necessitatibus saepe eveniet ut et voluptates repudiandae sint
      et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
      delectus, ut aut reiciendis voluptatibus maiores alias consequatur
    </motion.div>
  );
};

export default Description;
