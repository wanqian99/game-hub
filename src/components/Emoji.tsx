import bullsEye from "../assets/Emojis/bulls-eye.webp";
import thumbUp from "../assets/Emojis/thumbs-up.webp";
import meh from "../assets/Emojis/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
	rating: number;
}

// index signature, tell typescript compiler that
// this object can have any number of keys, and the keys are numbers
// ImageProps defines the props available on the Image component
const emojiMap: { [key: number]: ImageProps } = {
	3: { src: meh, alt: "meh", boxSize: "25px" },
	4: { src: thumbUp, alt: "recommended", boxSize: "25px" },
	5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
};

const Emoji = ({ rating }: Props) => {
	if (rating < 3) return null;
	return (
		<>
			<Image {...emojiMap[rating]} marginTop={1} />
		</>
	);
};

export default Emoji;
