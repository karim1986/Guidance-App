import { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";

const UploadFoto = () => {
  const [selectedFile, setSelectedFile] = useState(false);
  const handleChange = (evt) => {
    setSelectedFile(evt.taget.files[0]);
  };

  return (
    <div className="upload__foto">
      <FaCameraRetro className="svg__camera" size={25} color="#f3796b" />
      <label for="inputTag">
        Select Image
        <input
          onChange={handleChange}
          name="inputTags"
          type="file"
          accept="image/png, image/jpg, image/gif, image/jpeg"
        />
      </label>
    </div>
  );
};

export default UploadFoto;
