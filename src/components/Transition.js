import { motion } from "framer-motion";
const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
const Transitions = ({ children }) => {
    return (
        <motion.section
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 3 }}
        >
            {children}
        </motion.section>
    );
};
export default Transitions;