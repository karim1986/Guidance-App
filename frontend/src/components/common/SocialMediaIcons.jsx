import { SocialIcon } from "react-social-icons";
const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <div>
        <SocialIcon
          className="social-icons"
          url="https://facebook.com"
          target="_blanck"
          rel="noopener noreferrer"
        />
      </div>
      <div>
        <SocialIcon
          className="social-icons"
          url="https://google.com"
          target="_blanck"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
};

export default SocialMediaIcons;
