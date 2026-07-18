import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TrailerModalProps {
  open: boolean;
  trailerKey: string | null;
  onClose: () => void;
}

const TrailerModal = ({
  open,
  trailerKey,
  onClose,
}: TrailerModalProps) => {

  return (

    <AnimatePresence>

      {open && (

        <motion.div
          className="
            fixed
            inset-0
            z-50
            bg-black/80
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-6
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          {/* Close Button */}

          <button
            onClick={onClose}
            className="
              absolute
              top-6
              right-6
              text-white
              hover:text-pink-500
              transition
            "
          >
            <X size={32} />
          </button>

          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.8,
              opacity: 0
            }}
            transition={{
              duration: 0.3
            }}
            className="
              w-full
              max-w-5xl
              aspect-video
              rounded-2xl
              overflow-hidden
              shadow-2xl
            "
          >

            {trailerKey && (

              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                title="Movie Trailer"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />

            )}

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );

};

export default TrailerModal;